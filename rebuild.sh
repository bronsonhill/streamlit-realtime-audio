#!/bin/bash
# Rebuild the frontend and reinstall the package locally.
# Usage: ./rebuild.sh

set -e

cd "$(dirname "$0")"

echo "Building frontend..."
cd st_realtime_audio/frontend
npm run build
cd ../..

echo "Installing package..."
pip install -e .

echo "Done. Run with: streamlit run st_realtime_audio/example.py"
