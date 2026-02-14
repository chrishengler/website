#!/bin/bash
set -euo pipefail

IMAGES_DIR="$(dirname "$0")/public/images"

find "$IMAGES_DIR" -name "*-thumbnail.jpg" -o -name "*-thumbnail.jpeg" | xargs -r rm

find "$IMAGES_DIR" \( -name "*.jpg" -o -name "*.jpeg" \) \
  ! \( -name "*-thumbnail.jpg" -o -name "*-thumbnail.jpeg" \) \
  ! \( -name "*-1500.jpg" -o -name "*-1500.jpeg" \) | \
while read -r img; do
  ext="${img##*.}"
  thumb="${img%.$ext}-thumbnail.$ext"
  magick "$img" -resize y100 "$thumb"
done
