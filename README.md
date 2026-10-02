# Hiba Amin Consulting

Website for Hiba Amin Consulting: content strategy, fractional Head of Content and content execution for scaling tech companies.

It's a plain HTML/CSS site with no build step. GitHub Pages serves it at https://h5amin.github.io once it's on the default branch.

## Files

| File | What's in it |
| --- | --- |
| `index.html` | All the page text. Each section starts with a comment like `<!-- ===== SERVICES ===== -->` |
| `assets/css/styles.css` | Colours, fonts and layout. Colours are at the top under `:root` |
| `assets/js/main.js` | Booking link, mobile menu, footer year |
| `assets/img/` | Favicon and headshot |

## Common edits

- **Change text:** open `index.html`, find the section comment, edit the words between the tags.
- **Change your booking link:** in `assets/js/main.js`, change `BOOKING_URL`. Every "Book a call" button uses it.
- **Swap your headshot:** replace `assets/img/headshot.jpg` with a new photo (portrait, about 800×1000).
- **Change colours:** edit the hex codes under `:root` in `styles.css`.

## Still to do

- [x] Booking link (`BOOKING_URL` in `main.js`)
- [x] Headshot
- [ ] Real stats (placeholders marked `TODO` in the Results section)
- [ ] Real testimonials (placeholders marked `TODO` in the Testimonials section)
- [ ] Custom domain (optional)

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
