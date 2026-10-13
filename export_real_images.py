import os
from PIL import Image

src_dir = r"C:\Users\Mohithsai Malla\.gemini\antigravity\brain\0691f4c5-dbc2-415e-bbe8-91373a9d29b1\.user_uploaded"
dst_dir = r"public\images"

mapping = {
    'media_1789641594045.png': 'apple-in-signboard.jpg',
    'media_1791001083819.png': 'lodge-exterior-real.jpg',
    'media_1791001093529.png': 'lodge-room-interior-real.jpg',
    'media_1791001103992.png': 'lodge-reception-lounge-real.jpg',
    'media_1791001136591.png': 'lodge-ac-bedroom-real.jpg',
    'media_1791001154951.png': 'lodge-non-ac-room-real.jpg'
}

for s, d in mapping.items():
    sp = os.path.join(src_dir, s)
    dp = os.path.join(dst_dir, d)
    im = Image.open(sp)
    if im.mode in ('RGBA', 'P'):
        im = im.convert('RGB')
    im.save(dp, 'JPEG', quality=95)
    print(f"Saved {dp}: {im.size}")
