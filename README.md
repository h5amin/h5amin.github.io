# Hiba Amin Consulting

Website for Hiba Amin Consulting: content strategy, fractional Head of Content and content execution for scaling tech companies.

It's a plain HTML/CSS site with no build step. GitHub Pages serves it at https://h5amin.github.io once it's on the default branch.

## Files

| File | What's in it |
| --- | --- |
| `index.html` | All the page text. Each section starts with a comment like `<!-- ===== SERVICES ===== -->` |
| `assets/css/styles.css` | Colours, fonts and layout. Colours are at the top under `:root` |
| `assets/js/main.js` | Booking link, mobile menu, footer year |
| `assets/img/` | Favicon and headshot placeholder |

## Common edits

- **Change text:** open `index.html`, find the section comment, edit the words between the tags.
- **Add your booking link:** in `assets/js/main.js`, paste it into `const BOOKING_URL = "";`. Every "Book a call" button uses it. Until then they go to LinkedIn.
- **Add your headshot:** put the photo at `assets/img/headshot.jpg` and change the `src` in the About section of `index.html`.
- **Change colours:** edit the hex codes under `:root` in `styles.css`.

## Still to do

- [ ] Booking link (`BOOKING_URL` in `main.js`)
- [ ] Headshot
- [ ] Testimonials (spot marked `TODO` in the Results section)
- [ ] Double-check the stats in the Results section
- [ ] Custom domain (optional)

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
