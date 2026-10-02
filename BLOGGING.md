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

### Videos

Paste the embed code from YouTube, Loom, etc. straight into the post. It will resize to fit.

## 4. Publish

Click **Commit changes**. The post goes live in a minute or two and shows up on the blog page and in the "Fresh from the blog" section on the homepage.

To save a draft without publishing, put the file in a `_drafts` folder instead (no date needed in the file name).

## Removing the sample posts

Delete the two sample posts in `_posts` (their file names contain `sample`) once you've written your own. Delete `assets/img/blog/sample-content-audit.svg` too.
