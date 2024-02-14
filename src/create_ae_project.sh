#!/bin/bash

# Define the project directory name
PROJECT_DIR="AfterEffectsProject"

# Create the main project directory
mkdir $PROJECT_DIR

# Create subdirectories
mkdir -p $PROJECT_DIR/scripts/utilities
mkdir -p $PROJECT_DIR/scripts/modules
mkdir -p $PROJECT_DIR/sources/images
mkdir -p $PROJECT_DIR/sources/videos
mkdir -p $PROJECT_DIR/sources/audio
mkdir -p $PROJECT_DIR/compositions

echo "Folder structure for '$PROJECT_DIR' created successfully."
