from PIL import Image

src_img = Image.open(r"C:\Users\Mohithsai Malla\.gemini\antigravity\brain\0691f4c5-dbc2-415e-bbe8-91373a9d29b1\.user_uploaded\media_1789641594045.png")
print("Signboard source dimensions:", src_img.size)

banner_img = Image.open(r"public\images\apple-inn-banner-wide.png")
print("Banner wide dimensions:", banner_img.size)
