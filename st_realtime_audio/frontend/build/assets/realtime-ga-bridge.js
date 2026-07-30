const originalFetch = window.fetch.bind(window);

window.fetch = async (input, init = {}) => {
  const requestUrl = typeof input === "string" ? input : input instanceof Request ? input.url : String(input);
  const headers = new Headers(init.headers || (input instanceof Request ? input.headers : undefined));

  if (
    requestUrl.startsWith("https://api.openai.com/v1/realtime?") &&
    (init.method || (input instanceof Request ? input.method : "GET")) === "POST" &&
    headers.get("Content-Type") === "application/sdp"
  ) {
    const parsedUrl = new URL(requestUrl);
    const requestedModel = parsedUrl.searchParams.get("model");
    const model = !requestedModel || requestedModel.includes("realtime-preview")
      ? "gpt-realtime-2.1"
      : requestedModel;
    const formData = new FormData();
    formData.set("sdp", typeof init.body === "string" ? init.body : "");
    formData.set(
      "session",
      JSON.stringify({
        type: "realtime",
        model,
        output_modalities: ["audio"],
      })
    );
    headers.delete("Content-Type");

    return originalFetch("https://api.openai.com/v1/realtime/calls", {
      ...init,
      headers,
      body: formData,
    });
  }

  return originalFetch(input, init);
};

const originalSend = RTCDataChannel.prototype.send;
RTCDataChannel.prototype.send = function (data) {
  let nextData = data;

  if (typeof data === "string") {
    try {
      const event = JSON.parse(data);

      if (event?.type === "session.update" && event.session) {
        nextData = JSON.stringify({
          ...event,
          session: {
            type: "realtime",
            instructions: event.session.instructions,
            output_modalities: ["audio"],
            audio: {
              input: {
                transcription: event.session.input_audio_transcription
                  ? { model: event.session.input_audio_transcription.model || "whisper-1" }
                  : null,
                turn_detection: event.session.turn_detection
                  ? {
                      type: event.session.turn_detection.type || "server_vad",
                      threshold: event.session.turn_detection.threshold,
                      prefix_padding_ms: event.session.turn_detection.prefix_padding_ms,
                      silence_duration_ms: event.session.turn_detection.silence_duration_ms,
                      create_response: event.session.turn_detection.create_response,
                      interrupt_response: event.session.turn_detection.interrupt_response,
                    }
                  : null,
              },
              output: {
                voice: event.session.voice,
              },
            },
          },
        });
      } else if (event?.type === "response.create" && event.response) {
        const outputModalities = Array.isArray(event.response.output_modalities)
          ? event.response.output_modalities
          : Array.isArray(event.response.modalities) && event.response.modalities.includes("audio")
            ? ["audio"]
            : ["audio"];
        nextData = JSON.stringify({
          ...event,
          response: {
            instructions: event.response.instructions,
            output_modalities: outputModalities,
          },
        });
      }
    } catch {
      // Ignore non-JSON data channel payloads.
    }
  }

  return originalSend.call(this, nextData);
};

const originalAddEventListener = RTCDataChannel.prototype.addEventListener;
RTCDataChannel.prototype.addEventListener = function (type, listener, options) {
  if (type !== "message" || typeof listener !== "function") {
    return originalAddEventListener.call(this, type, listener, options);
  }

  const wrappedListener = function (event) {
    if (typeof event?.data !== "string") {
      return listener.call(this, event);
    }

    try {
      const payload = JSON.parse(event.data);
      const renamedTypeMap = {
        "response.output_audio.delta": "response.audio.delta",
        "response.output_audio_transcript.delta": "response.audio_transcript.delta",
        "response.output_audio_transcript.done": "response.audio_transcript.done",
      };

      const mappedType = renamedTypeMap[payload.type];
      if (!mappedType) {
        return listener.call(this, event);
      }

      listener.call(this, { ...event, data: JSON.stringify({ ...payload, type: mappedType }) });
    } catch {
      listener.call(this, event);
    }
  };

  return originalAddEventListener.call(this, type, wrappedListener, options);
};

import "./index-o_-sC0bU.js";
