import os
import re

SRC_DIR = r"c:\Users\Mohithsai Malla\OneDrive\Desktop\The Apple In\src"
PUBLIC_IMAGES_DIR = r"c:\Users\Mohithsai Malla\OneDrive\Desktop\The Apple In\public\images"

forbidden_keywords = [
    'unsplash', 'pexels', 'pixabay', 'shutterstock', 'getty', 'freepik',
    'images.unsplash', 'images.pexels', 'source.unsplash'
]

img_tag_regex = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
src_regex = re.compile(r'["\'](/images/[^"\']+)["\']')

violations = []
checked_images = set()

print("--- AUDITING CODEBASE FOR IMAGES ---")
for root, dirs, files in os.walk(SRC_DIR):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js', '.css', '.html')):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as fh:
                content = fh.read()
                
                # Check for forbidden keywords
                for kw in forbidden_keywords:
                    if kw in content.lower():
                        violations.append(f"Forbidden keyword '{kw}' in {file_path}")
                
                # Check for http:// or https:// inside image contexts
                for line_idx, line in enumerate(content.splitlines(), start=1):
                    if '<img' in line and ('http://' in line or 'https://' in line):
                        violations.append(f"External image URL on line {line_idx} in {file_path}: {line.strip()}")
                
                # Collect all /images/... references
                for match in src_regex.findall(content):
                    checked_images.add(match)

print(f"Total unique local image references found: {len(checked_images)}")
for ref in sorted(checked_images):
    rel_name = ref.replace('/images/', '')
    full_path = os.path.join(PUBLIC_IMAGES_DIR, rel_name)
    exists = os.path.exists(full_path)
    size = os.path.getsize(full_path) if exists else 0
    print(f"  [{'EXISTS' if exists else 'MISSING'}] {ref} -> {full_path} ({size} bytes)")
    if not exists:
        violations.append(f"Referenced image file missing on disk: {ref}")

print("\n--- AUDIT RESULTS ---")
if violations:
    print(f"FAILED with {len(violations)} issues:")
    for v in violations:
        print(f"  - {v}")
else:
    print("PERFECT: ZERO external image URLs, all image paths are local in /public/images/ and physically exist on disk!")
