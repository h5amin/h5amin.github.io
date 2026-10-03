# Hiba Amin Consulting

Website for Hiba Amin Consulting: content strategy, fractional Head of Content and content execution for scaling tech companies.

It's built with Jekyll, which GitHub Pages runs automatically, so there's nothing to install. The site is served at https://h5amin.github.io once it's on the default branch.

## Files

| File | What's in it |
| --- | --- |
| `index.html` | Homepage text. Each section starts with a comment like `<!-- ===== SERVICES ===== -->` |
| `_posts/` | Blog posts, one Markdown file each. See **[BLOGGING.md](BLOGGING.md)** |
| `blog/index.html` | The blog listing page |
| `_config.yml` | Site name, booking link and social links |
| `work/index.html` | The Work & speaking page |
| `_data/` | Lists the site reads from: `portfolio.yml` (Work page projects), `speaking.yml` (talks and podcasts), `shrek_box_office.yml` (Shrek post chart) |
| `_includes/` | Header, footer, blog card and image-with-caption snippets shared by every page |
| `_layouts/` | Page templates (`default` for every page, `post` for blog posts) |
| `assets/css/styles.css` | Colours, fonts and layout. Colours are at the top under `:root` |
| `assets/js/main.js` | Mobile menu, new-tab booking links, scrollable tables |
| `assets/img/` | Favicon, headshot and blog images (`assets/img/blog/`) |

## Common edits

- **Write a blog post:** see [BLOGGING.md](BLOGGING.md).
- **Add a project to the Work page:** copy an entry in `_data/portfolio.yml` and change the text. New groups get their own heading and jump link automatically.
- **Add a talk, podcast or interview:** add it to `_data/speaking.yml`.
- **Add or remove companies in the logo strip:** edit the `companies` list at the top of `index.html`. Logos live in `assets/img/logos/` (plum, trimmed, 180px tall). A company without a logo shows its name as text.
- **Change homepage text:** open `index.html`, find the section comment, edit the words between the tags.
- **Change your booking link or social links:** edit `_config.yml`.
- **Rename a menu item:** edit `_includes/header.html` (the blog link is labelled "thonks").
- **Swap your headshot:** replace `assets/img/headshot.jpg` with a new photo (portrait, about 800×1000).
- **Change colours:** edit the hex codes under `:root` in `styles.css`.

## Still to do

- [x] Booking link
- [x] Headshot
- [ ] Real stats (placeholders marked `TODO` in the Results section)
- [ ] Real testimonials (placeholders marked `TODO` in the Testimonials section)
- [ ] Logo for Remote
- [ ] Shrek meme image for the Shrek post (spot marked `img-placeholder`)
- [ ] Custom domain (optional)

## Preview locally (optional)

```sh
gem install jekyll jekyll-feed jekyll-seo-tag kramdown-parser-gfm
jekyll serve
# open http://localhost:4000
```
