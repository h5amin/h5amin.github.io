# How to write a blog post

Blog posts live in the `_posts` folder. Each post is one text file written in Markdown (plain text with a few symbols for formatting).

## 1. Create the file

In GitHub, open the `_posts` folder, click **Add file → Create new file**, and name it like this:

```
2026-10-15-your-post-title.md
```

The date at the start is the publish date. The rest becomes the web address: `h5amin.github.io/blog/your-post-title/`.

## 2. Add the post details at the top

Paste this at the very top of the file and fill it in:

```
---
title: "Your post title"
description: "One or two sentences. Shows on the blog page and when shared on LinkedIn."
image: /assets/img/blog/your-cover-image.jpg
image_alt: "What the cover image shows"
tags: [Content strategy, SEO]
---
```

`image`, `image_alt` and `tags` are optional. Delete those lines if you don't need them.

## 3. Write

| To get | Type |
| --- | --- |
| A heading | `## Heading` (or `###` for a smaller one) |
| **Bold** | `**bold**` |
| *Italic* | `*italic*` |
| A link | `[link text](https://example.com)` |
| A bullet list | `- item` on each line |
| A numbered list | `1. item` on each line |
| A pull quote | `> Your quote` |

### Tables

Use pipes `|` between columns and a row of dashes under the header:

```
| Plan | Price | Best for |
| --- | --- | --- |
| Starter | $ | Small teams |
| Growth | $$ | Scaling teams |
```

Tip: you can copy a table from Google Sheets or Excel into a converter like [tableconvert.com](https://tableconvert.com/excel-to-markdown) to get the Markdown version.

### Images

1. Upload the image to `assets/img/blog/` (open the folder in GitHub, click **Add file → Upload files**).
2. Add it to your post one of two ways:

Simple:

```
![What the image shows](/assets/img/blog/my-image.png)
```

With a caption (and optionally `wide=true` to make it bigger than the text column):

```
{% include image.html src="/assets/img/blog/my-image.png" alt="What the image shows" caption="Your caption here" %}
```

Keep images under about 500 KB so pages load quickly. Always describe the image in the alt text for screen readers.

### Videos and LinkedIn posts

Paste the embed code from YouTube, Loom, etc. straight into the post. It will resize to fit.

For a LinkedIn post, copy its embed code (the **…** menu on the post → **Embed this post**) and wrap it like this so it keeps the right shape:

```
<div class="embed-linkedin"><iframe src="https://www.linkedin.com/embed/feed/update/..." height="433" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe></div>
```

## 4. Publish

Click **Commit changes**. The post goes live in a minute or two and shows up on the blog page and in the "Fresh from the blog" section on the homepage.

To save a draft without publishing, put the file in a `_drafts` folder instead (no date needed in the file name).

## Editing a post that's already live

1. Go to the repo on GitHub and open the `_posts` folder.
2. Click the post's file, then the **pencil icon** (Edit this file) at the top right.
3. Make your changes. The **Preview** tab shows roughly how the formatting will look.
4. Click **Commit changes**. The live site updates in a minute or two.

GitHub keeps every version, so nothing is ever lost. To undo a change, open the file, click **History**, and copy back the old text.

### Common tweaks

| To change | Edit |
| --- | --- |
| A post's title, summary or tags | The lines between the `---` at the top of the post |
| The publish date | The date in the file name (renaming the file changes the date) |
| An image | Upload the new image to `assets/img/blog/` with the same file name, or point the post at the new name |
| Hide a post without deleting it | Add `published: false` to the lines at the top |
| Delete a post | Open the file, click the **…** menu, then **Delete file** |
| The chart numbers in the Shrek post | `_data/shrek_box_office.yml` |
| The blog page heading ("Notes on content that grows") | `blog/index.html` |
| The "Want help with your content?" box under every post | `_layouts/post.html` |

## Example

`_posts/2026-10-02-what-shrek-taught-me-about-ai-and-content.md` is a full post with lists, links, a table, a LinkedIn embed and images. Open it to see how everything is written.
