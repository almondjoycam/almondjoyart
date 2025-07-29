#!/bin/bash

inputDir=img/full/

# Convert everything into a nice png.
for img in $inputDir*; do convert $img ${img%.*}.png; done

# Remove stuff that is not png.
for img in $inputDir*; do if [[ "${img##*.}" != "png" ]]; then rm $img; fi; done
