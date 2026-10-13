from PIL import Image

# apple-inn-banner-wide.png is (1024, 448).
# Notice what media_1791858710197_be851a49.png shows!
# In the screenshot:
# It shows a billboard on a building facade with a spotlight above it:
# The billboard says "THE APPLE IN LODGE & DORMITORY" on the left,
# and on the right: phone "90594 61033", "AC | Non AC ROOMS AVAILABLE", and a small inset photo of a bedroom!
# And underneath in a red band: "| Dormitory | Safe & Secure | Affordable Stay |"
# THAT IS apple-inn-banner-wide.png or media_1789645500195.png or media_1789646528609.png!
# Let's inspect which user upload that building photo was from!

import os

user_dir = r"C:\Users\Mohithsai Malla\.gemini\antigravity\brain\0691f4c5-dbc2-415e-bbe8-91373a9d29b1\.user_uploaded"
for f in os.listdir(user_dir):
    if f.endswith('.png') or f.endswith('.jpg'):
        p = os.path.join(user_dir, f)
        im = Image.open(p)
        print(f, im.size)
