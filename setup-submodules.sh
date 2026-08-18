#!/bin/bash
# This script runs on Vercel before the build to clone private git submodules.
# It uses GITHUB_ACCESS_TOKEN env var to authenticate with GitHub.
# Locally, submodules are already cloned via SSH, so this script is a no-op.

if [ -z "$GITHUB_ACCESS_TOKEN" ]; then
  echo "No GITHUB_ACCESS_TOKEN found — assuming local environment, skipping submodule setup."
  exit 0
fi

echo "Setting up private git submodules for Vercel build..."

# Rewrite all github HTTPS URLs to include the token for authentication
git config --global url."https://${GITHUB_ACCESS_TOKEN}@github.com/".insteadOf "https://github.com/"

# Initialize and clone all submodules
git submodule sync --recursive
git submodule update --init --recursive

echo "Submodules cloned successfully."
echo "Contents of notes/Publish:"
ls -la src/app/blogs/notes/Publish/ 2>/dev/null || echo "WARNING: Publish directory not found!"
