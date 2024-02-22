#!/bin/bash

# Define the source and project directory names directly
SOURCE_DIR="./src"
PROJECT_DIR="AfterEffectsProject"

# Create the project directory if it doesn't exist
mkdir -p "$PROJECT_DIR"

# Since the structure within src should be mirrored at the root of PROJECT_DIR,
# directly copy the contents of SOURCE_DIR to PROJECT_DIR
cp -r "$SOURCE_DIR/"* "$PROJECT_DIR/"

# Optionally, create additional directories under PROJECT_DIR if they don't exist in src
mkdir -p "$PROJECT_DIR"/{sources/{images,videos,audio},scripts/{utilities,modules},compositions}

# Example of copying specific files or directories. Uncomment and adjust as needed.
# Ensure these paths are relative to the project root or fully qualified paths.
# cp ./path/to/specific/file "$PROJECT_DIR/target/path/"

# Check if the copy was successful
if [ $? -eq 0 ]; then
  echo "The contents of '$SOURCE_DIR' were copied to '$PROJECT_DIR' successfully."
else
  echo "There was an error copying the contents."
fi

echo "Folder structure for '$PROJECT_DIR' created successfully."
