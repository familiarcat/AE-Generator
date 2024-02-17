#!/bin/bash

# Define the project directory name
PROJECT_DIR="AfterEffectsProject"

# Create the main project directory
rm -r $PROJECT_DIR; mkdir $PROJECT_DIR
# mkdir $PROJECT_DIR

# Create subdirectories
mkdir -p $PROJECT_DIR/scripts/utilities
mkdir -p $PROJECT_DIR/scripts/modules
cp ./src/create_ae_project/main.jsx $PROJECT_DIR/scripts/main.jsx
# cp ./scripts/modules/compositionCreator.jsx $PROJECT_DIR/scripts/modules/compositionCreator.jsx 
# cp ./scripts/utilities/helpers.jsx $PROJECT_DIR/scripts/utilities/helpers.jsx 

mkdir -p $PROJECT_DIR/sources/images
mkdir -p $PROJECT_DIR/sources/videos
mkdir -p $PROJECT_DIR/sources/audio
mkdir -p $PROJECT_DIR/compositions

echo "Folder structure for '$PROJECT_DIR' created successfully."
