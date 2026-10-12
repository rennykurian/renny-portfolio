# Renny Kurian — Personal Website

A fast, static personal site (plain HTML/CSS/JS, no build step).

## Files
- `index.html` — all page content (edit text here)
- `styles.css` — styling, light & dark themes
- `script.js` — theme toggle, scroll effects, terminal animation
- `Renny_Kurian_Resume.pdf` — résumé served by the "Download résumé" buttons
- `favicon.svg`, `vercel.json`

## Preview locally
Open `index.html` in a browser, or run `npx serve .`

## Deploy on Vercel via GitHub
1. Create a new empty repo on GitHub (e.g. `renny-portfolio`).
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/renny-portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new → Import the repo.
4. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Click **Deploy**.
5. Every future `git push` to `main` redeploys automatically.

## To customise
- LinkedIn: in `index.html`, find the commented LinkedIn button in the Contact section, add your URL and uncomment it.
- Résumé: replace `Renny_Kurian_Resume.pdf` with a new file of the same name. Note it currently includes your phone number.
