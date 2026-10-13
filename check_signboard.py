from PIL import Image

# In the previous step, signin-board.png was used or generated. Let's see what signin-board was:
# media_1791858710197_be851a49.png shows a cropped version where "THE APPLE IN LODGE & DORMITORY" is shown across the billboard.
# But it was cropped with object-cover on a 16:9 container, so left and right were cut off!
# If we check apple-in-signboard.jpg, let's see its aspect ratio and create a clean wide banner or let the container use object-contain / auto aspect ratio.

im = Image.open('public/images/apple-in-signboard.jpg')
print("Signboard size:", im.size)

# Also let's check apple-inn-banner-wide.png:
banner = Image.open('public/images/apple-inn-banner-wide.png')
print("Banner size:", banner.size)
