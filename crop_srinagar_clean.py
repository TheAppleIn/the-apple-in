from PIL import Image

flyer = Image.open('public/images/apple-inn-room-types-flyer.png').convert('RGB')
print('Flyer size:', flyer.size)

# 1. Deluxe room (emerald styling)
deluxe = flyer.crop((245, 230, 485, 465))
deluxe = deluxe.resize((600, 580), Image.Resampling.LANCZOS)
deluxe.save('public/images/room-deluxe-ac.jpg', 'JPEG', quality=95)

# 2. Basic room (split AC)
basic = flyer.crop((15, 230, 245, 465))
basic = basic.resize((600, 580), Image.Resampling.LANCZOS)
basic.save('public/images/room-basic-ac.jpg', 'JPEG', quality=95)

# 3. Srinagar clean banner: crop the middle section showcasing the two smart look rooms nicely
# from y=210 to y=480, full width 15 to 485 (aspect ratio ~ 470x270 = ~16:9)
srinagar_banner = flyer.crop((10, 210, 490, 480))
srinagar_banner = srinagar_banner.resize((960, 540), Image.Resampling.LANCZOS)
srinagar_banner.save('public/images/srinagar-branch-banner.jpg', 'JPEG', quality=95)

print('Successfully exported deluxe, basic, and srinagar_banner in crystal clear resolution.')
