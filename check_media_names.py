from PIL import Image

# Let's inspect media_1789645500195, media_1789646528609, media_1789646543214
user_dir = r"C:\Users\Mohithsai Malla\.gemini\antigravity\brain\0691f4c5-dbc2-415e-bbe8-91373a9d29b1\.user_uploaded"
for name in ["media_1789645500195.png", "media_1789646528609.png", "media_1789646543214.png"]:
    im = Image.open(f"{user_dir}\\{name}")
    print(name, im.size)

# Also let's see which image was saved as public/images/signin-board.png earlier or where it came from
