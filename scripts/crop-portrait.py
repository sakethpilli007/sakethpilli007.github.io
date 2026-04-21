#!/usr/bin/env python3
"""
Crop a portrait photo to a square:
 - remove the bottom 30% of the image
 - take the largest centered square that fits in the remaining top 70%
   (anchored to the top edge, horizontally centered)
 - save as an optimized JPEG
 - also write a 128x128 WebP avatar

Usage:
    python3 scripts/crop-portrait.py path/to/your/original.jpg
"""

import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Install Pillow first: pip install --break-system-packages Pillow")

if len(sys.argv) < 2:
    sys.exit("Usage: python3 scripts/crop-portrait.py <input-image>")

src = Path(sys.argv[1]).expanduser().resolve()
if not src.exists():
    sys.exit(f"Can't find: {src}")

out_dir = Path(__file__).parent.parent / "public" / "assets" / "images"
out_dir.mkdir(parents=True, exist_ok=True)

img = Image.open(src).convert("RGB")
W, H = img.size

# Step 1: remove bottom 30%.
usable_h = int(round(H * 0.7))

# Step 2: largest square that fits top-anchored, horizontally centered.
side = min(W, usable_h)
x = (W - side) // 2
y = 0

cropped = img.crop((x, y, x + side, y + side))

# Write a 1024px main asset.
main_size = 1024
main = cropped.resize((main_size, main_size), Image.LANCZOS)
main_path = out_dir / "saketh.jpg"
main.save(main_path, "JPEG", quality=88, optimize=True, progressive=True)
print(f"wrote {main_path}  ({main_size}x{main_size})")

# Write a 128px avatar for mobile.
avatar = cropped.resize((256, 256), Image.LANCZOS)
avatar_path = out_dir / "saketh-avatar.webp"
avatar.save(avatar_path, "WEBP", quality=88, method=6)
print(f"wrote {avatar_path} (256x256)")

print("done.")
