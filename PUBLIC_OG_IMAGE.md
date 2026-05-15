Place a social preview image at `public/og-image.png` before deploying.

Recommended specs:
- Format: PNG (or JPG)
- Size: 1200x630 px (recommended for wide previews)
- File name: og-image.png
- Path: public/og-image.png (will be served at https://<your-domain>/og-image.png)

This image is referenced from `index.html` via og:image and twitter:image. Many social platforms cache previews, so after deploying you may need to re-scrape the URL (e.g., Facebook Sharing Debugger, Twitter Card Validator) to refresh the preview.
