from PIL import Image

# Let's inspect media_1789645500195.png and media_1789646528609.png
user_dir = r"C:\Users\Mohithsai Malla\.gemini\antigravity\brain\0691f4c5-dbc2-415e-bbe8-91373a9d29b1\.user_uploaded"

im1 = Image.open(f"{user_dir}\\media_1789645500195.png")
print("im1 size:", im1.size)
im1.save("public/images/apple-in-building-billboard.jpg", "JPEG", quality=95)

im2 = Image.open(f"{user_dir}\\media_1789646528609.png")
print("im2 size:", im2.size)

im3 = Image.open(f"{user_dir}\\media_1789641594045.png")
print("im3 size:", im3.size)
im3.save("public/images/apple-in-outdoor-signboard-full.jpg", "JPEG", quality=95)

print("Images saved successfully!")
