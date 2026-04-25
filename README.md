# Arkay Interior & Furniture

Static multi-page furniture website for Arkay Interior & Furniture in Chitrakoot Scheme, Jaipur.

## Structure

- `index.html` - homepage with hero slider, featured products, stats, testimonials, FAQ, and CTA sections
- `pages/about.html` - company story, timeline, mission, vision, team, and recognition
- `pages/products.html` - product catalog with filters and search
- `pages/product-detail.html` - detailed product view with gallery, tabs, and quote form
- `pages/gallery.html` - masonry portfolio with filters and lightbox
- `pages/contact.html` - contact form, map, hours, and social links
- `css/styles.css` - shared presentation layer on top of Tailwind CDN
- `js/main.js` - mobile nav, forms, modal, counters, cookie banner, and shared interactions
- `js/slider.js` - hero and testimonial carousel logic
- `js/filter.js` - product and gallery filtering
- `js/gallery.js` - gallery lightbox controller
- `images/` - reusable SVG placeholders for the demo build

## Notes

- The site is intentionally static and build-free.
- Tailwind is loaded from the CDN, with small custom CSS for animation and layout polish.
- Placeholder SVGs keep the pages functional until real product photography is added.

## Run

Open `index.html` directly in a browser or serve the folder with any static server.

## Browser behavior

- Sticky header and mobile slide-out navigation
- Hero and testimonial carousels
- Product filters, gallery filters, quick view modal, and lightbox
- Animated counters, smooth scroll reveals, FAQ accordion, and tabs
- Form validation, loading states, WhatsApp action, back-to-top button, and cookie consent banner
