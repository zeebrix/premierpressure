#!/usr/bin/env python3
"""Generate a branded Open Graph image (1200x630) for social sharing."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NAVY = (10, 22, 40)
NAVY2 = (26, 43, 69)
CYAN = (0, 212, 255)
WHITE = (255, 255, 255)
GREY = (190, 200, 215)

img = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(img)

# subtle diagonal panel
d.polygon([(0, H), (W, H), (W, H - 160), (0, H - 60)], fill=NAVY2)
# top accent bars
d.rectangle([0, 0, W // 2, 10], fill=(124, 92, 255))
d.rectangle([W // 2, 0, W, 10], fill=CYAN)

def font(sz, bold=True):
    names = (["arialbd.ttf", "Arialbd.ttf"] if bold else ["arial.ttf"]) + ["DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"]
    for n in names:
        try:
            return ImageFont.truetype(n, sz)
        except Exception:
            continue
    return ImageFont.load_default()

f_brand = font(34)
f_h1 = font(78)
f_h2 = font(78)
f_sub = font(30, bold=False)
f_phone = font(36)

# brand eyebrow
d.text((70, 70), "PREMIER PRESSURE SOLUTIONS WA", font=f_brand, fill=CYAN)

# headline
d.text((70, 180), "Professional", font=f_h1, fill=WHITE)
d.text((70, 268), "Pressure Cleaning", font=f_h2, fill=CYAN)
d.text((70, 356), "Across Perth", font=f_h1, fill=WHITE)

# subtitle
d.text((72, 470), "Driveways  -  House Washing  -  Roof  -  Limestone  -  Pavers", font=f_sub, fill=GREY)

# phone chip
chip = [70, 525, 70 + 360, 525 + 64]
d.rounded_rectangle(chip, radius=12, fill=CYAN)
d.text((96, 540), "Call 0452 579 657", font=f_phone, fill=NAVY)

# website
d.text((760, 552), "premierpressuresolutions.com.au", font=f_sub, fill=GREY)

img.save(r"D:\Upwork\premierpressure\public\og-image.jpg", "JPEG", quality=88)
# also save a png copy for any consumers expecting png
img.save(r"D:\Upwork\premierpressure\public\og-image.png", "PNG")
print("WROTE public/og-image.jpg and og-image.png", img.size)
