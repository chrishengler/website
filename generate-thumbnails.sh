#!/bin/bash
set -euo pipefail

IMAGES_DIR="$(dirname "$0")/public/images/"

# Find all image files excluding thumbnails and old -1500 versions
find "$IMAGES_DIR" \( -name "*.jpg" -o -name "*.jpeg" \) \
  ! \( -name "*-thumbnail.jpg" -o -name "*-thumbnail.jpeg" \) \
  ! \( -name "*-1500.jpg" -o -name "*-1500.jpeg" \) | \
while read -r img; do
  ext="${img##*.}"
  thumb="${img%.$ext}-thumbnail.$ext"

  # Only generate thumbnail if it doesn't already exist
  if [ ! -f "$thumb" ]; then
    magick "$img" -resize x100 "$thumb"
  fi
done