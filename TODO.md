# FSB Doors Website - TODO

## Missing Pages
- [ ] `/privatnost` - Privacy policy page (linked in Footer)
- [ ] `/uvjeti` - Terms of use page (linked in Footer)
- [ ] Custom 404 page

## Performance Improvements
- [ ] Add `sizes` prop to all images with `fill` attribute for better performance
- [ ] Add `loading="eager"` to hero/LCP images
- [ ] Fix logo image aspect ratio warning (add `width: "auto"` or `height: "auto"`)

## Footer Updates
- [ ] Add individual service links to Footer under "Usluge" section:
  - Savjetovanje o protupožarnoj zaštiti
  - Planiranje protupožarne zaštite
  - Ugradnja protupožarnih vrata
  - Održavanje protupožarnih vrata

## SEO & Meta Tags
- [ ] Add Open Graph meta tags for social sharing (og:title, og:description, og:image)
- [ ] Add Twitter card meta tags
- [ ] Verify/add favicon and app icons

## Functionality
- [ ] Contact form backend integration (currently visual only)
- [ ] Consider adding form validation

## Optional Enhancements
- [ ] Add smooth scroll behavior fix (`data-scroll-behavior="smooth"` on html element)
- [ ] Add loading states/skeletons for images
- [ ] Consider adding a sitemap.xml
- [ ] Consider adding robots.txt

---

## Completed
- [x] All pages created (Home, Products, Applications, Services, About, Contact)
- [x] Individual product category pages
- [x] Individual product detail pages
- [x] Individual application area pages
- [x] Individual service detail pages
- [x] All images updated to use local files from /images/
- [x] Header transparency/solid state based on page
- [x] Hero text alignment (left-aligned)
- [x] Hero bottom gradient toned down
- [x] CTA button visibility fixes
- [x] Mobile responsive design
- [x] Testimonials section with initials avatars
- [x] Scroll animations with GSAP + ScrollTrigger
  - Hero entrance animations (badge, title, subtitle, CTAs, trust indicators)
  - ProductGrid staggered card reveal
  - Process sequential step animations
  - FeatureGrid split reveal (left slides in, features stagger from right)
  - ApplicationGrid bento cards with scale
  - Stats animated counters
  - Testimonials fade in
  - FAQ staggered accordion items
  - CTA entrance animation
  - Reusable ScrollReveal and AnimatedCounter components
