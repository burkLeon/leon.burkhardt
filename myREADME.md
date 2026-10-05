# Personal website

A minimal Jekyll site (no theme, no plugins beyond the GitHub Pages defaults,
one ~25-line JavaScript file). Content lives in Markdown and YAML; you should
never need to touch HTML or CSS.

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## How to change things

| I want to…            | Edit                                                                     |
| --------------------- | ------------------------------------------------------------------------ |
| add a paper           | `_data/papers.yml` — add an item to the right group, newest first        |
| add a talk            | `_data/talks.yml` — add an item at the top                                |
| add a contact row     | `_data/contact.yml`                                                       |
| add a nav link        | `_data/nav.yml`                                                           |
| edit the intro text   | the body of `index.md`                                                    |
| edit the misc page    | the body of `misc.md`                                                     |
| change the portrait   | replace `assets/img/portrait.svg` (or add a photo and point `photo:` at it in `index.md` front matter) |
| add an image anywhere | put the file in `assets/img/` and write `![alt]({{ '/assets/img/name.jpg' | relative_url }})` |
| change the site title, description, URL | `_config.yml`                                          |

### Citation labels

Paper entries use amsalpha-style labels: author initials plus a two-digit year,
e.g. `key: "DL25"` for Doe & Lindqvist 2025, `Doe23` for a single author. Set
the `key` yourself; leave it out and no label is shown.

### Adding a new page

1. Create `notes.md` with front matter:

   ```yaml
   ---
   layout: default
   title: "Notes"
   nav: notes
   permalink: /notes/
   ---
   ```

2. Add a `notes:` list to `_data/nav.yml` (usually just a link back to `/`).
3. Add `{ label: "notes", url: "/notes/" }` to the `home:` list in the same file.

## Deploy on GitHub Pages

1. Push the repository to GitHub.
2. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. In `_config.yml`:
   - user site (`username.github.io`): `url: "https://username.github.io"`, `baseurl: ""`
   - project site (`username.github.io/repo`): `url: "https://username.github.io"`, `baseurl: "/repo"`

All internal links go through `relative_url`, so a non-empty `baseurl` works.

## The two JavaScript features

Both live in `assets/js/site.js` and both degrade gracefully:

1. Markdown headings (h2/h3) become self-linking anchors. Headings written in
   templates already carry their own anchor link.
2. The obfuscated email (`jane.doe (at) example.org`) becomes a real `mailto:`
   link. The raw address never appears in the generated HTML.
