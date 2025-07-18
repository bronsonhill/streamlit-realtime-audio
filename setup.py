import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="streamlit_realtime_audio",
    version="0.0.1",
    author="Bronson Hill",
    author_email="bronson.hill@yahoo.com.au",
    description="Streamlit component for real-time audio conversation with OpenAI using WebRTC",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/bronsonhill/streamlit-realtime-audio",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.9",
    install_requires=[
        "streamlit >= 1.28.0",
    ],
    keywords=["streamlit", "component", "webrtc", "openai", "realtime", "audio"],
)