DREAM GURKHAS INN — VERCEL STATIC WEBSITE
=========================================

Pages:
- index.html       Home
- menu.html        Menu
- gallery.html     Gallery
- blog.html        Blog
- about.html       About Us
- book-now.html    Book Now

WHAT WAS CHANGED
----------------
Only functional/technical wiring:
- Connected existing Home, Menu, Gallery, Blogs, About Us and Book Now links.
- Pointed existing logo links to Home.
- Converted existing Book Now CTA buttons into links to book-now.html while
  preserving their original CSS classes and visual appearance.
- Added viewport metadata only where it was missing.

DESIGN PRESERVATION
-------------------
The six original Stitch HTML designs were retained. No color, font, typography,
image, background, spacing, layout, card, or decorative CSS was intentionally
changed. No redesign was performed.

BOOKING
-------
The Book Now page is the supplied updated export. Its WhatsApp and email actions
remain client-side. The visitor must review and press Send in WhatsApp or their
email application. This static website does not store enquiries.

DEPLOY TO VERCEL
----------------
1. Upload all six HTML files to the ROOT of one GitHub repository.
2. Import that repository at https://vercel.com/new.
3. Framework Preset: Other.
4. Build Command: leave empty.
5. Output Directory: . (root).
6. Deploy.

IMPORTANT
---------
All six original HTML exports use Tailwind CDN and Google Fonts / Material Symbols
from external services. Internet access is required for those remote resources.
Images are referenced by their original remote URLs in the Stitch exports.

This package contains the six HTML page files only. The original screen.png and
DESIGN.md files from each Stitch export are preview/reference materials, not
required for the live site.
