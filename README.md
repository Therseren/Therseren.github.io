# Mikkel Thers Nielsen — Portfolio

A static portfolio site, built to be edited without touching layout code.

## Files

- `index.html` — page structure (you shouldn't need to edit this often)
- `style.css` — all visual styling
- `projects.js` — **edit this to add/remove/update projects**
- `skills.js` — **edit this to update the Skills section**
- `script.js` — renders everything from the two data files above
- `images/` — put project screenshots here, reference them in `projects.js`
- `cv-placeholder.pdf` — swap this out for your real CV (keep the same filename, or update the link in `index.html`)

## Adding a project

Open `projects.js` and copy one of the example objects, then fill in your own
values. Full field-by-field instructions are in the comment at the top of
that file. The filter chips above the project grid are generated automatically
from whatever categories you use — no need to edit them by hand.

## Publishing to GitHub Pages

1. Create a new repository on GitHub named exactly: **`Therseren.github.io`**
   (must match your GitHub username, and must be **public** on the free plan).
2. Push these files to the `main` branch of that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Therseren/Therseren.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, and under "Build and deployment"
   set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://therseren.github.io/` within a minute
   or two. Every future push to `main` updates it automatically.

## Local preview

You can just open `index.html` directly in a browser, or run a tiny local
server from this folder so relative paths behave exactly like they will on
GitHub Pages:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
