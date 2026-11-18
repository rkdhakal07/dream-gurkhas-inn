DREAM GURKHAS INN — VERCEL STATIC WEBSITE
=========================================

PAGES
-----
- index.html       Home
- menu.html        Menu
- gallery.html     Gallery
- blog.html        Blogs
- about.html       About Us
- book-now.html    Book Now

SHARED ASSETS
-------------
- assets/site.css  Consistent header/footer and mobile layout safeguards
- assets/site.js   Functional responsive mobile navigation

WHAT WAS FIXED
---------------
- Standardized the header/navigation and footer on all six pages.
- Added a working mobile hamburger menu on every page.
- Ensured all six page links are available from desktop and mobile navigation.
- Added the resort's Google Maps link to every page footer.
- Connected the Home page's family-stay and menu call-to-action buttons.
- Corrected inconsistent telephone link targets.
- Removed duplicate viewport declarations and retained one mobile viewport tag per page.
- Added responsive safeguards for narrow screens and desktop-sized hero blocks.

DESIGN PRESERVATION
-------------------
The six Stitch page contents, original page-specific Tailwind styling, imagery, and typography were retained. Changes are limited to the shared header/footer, responsive navigation, mobile overflow safeguards, and functional link wiring.

BOOKING
-------
The Book Now page's WhatsApp and email actions remain client-side. Visitors review and send the enquiry in WhatsApp or their email application. This static website does not store enquiries.

DEPLOY TO VERCEL
----------------
1. Extract this ZIP file.
2. Upload the six HTML files, the assets folder, and vercel.json to the ROOT of your GitHub repository.
3. Import that repository into Vercel.
4. Set Framework Preset to Other.
5. Leave Build Command empty and set Output Directory to . (root).
6. Deploy.

IMPORTANT
---------
Tailwind CSS, Google Fonts, Material Symbols, and existing Stitch images are loaded from external services. Internet access is needed for these remote resources.
