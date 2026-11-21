# Bihar Charitra — Website

A responsive React + Vite website using the supplied Bihar Charitra photographs and logo, plus an original generated Bihar-inspired hero visual. Designed with a warm beige / burgundy editorial palette.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Personalise before publishing

Edit `src/siteConfig.js`:
- `founderName`: replace `Founder & Host` with the founder's approved public name.
- `customDomain`: replace `YOUR-DOMAIN.COM`.
- `email` and `instagram`: add official contact/social links.
- `featuredVideoIds`: add YouTube video IDs to show embedded episodes.

The founder's biography is intentionally generic until an approved bio is supplied. Photo captions describe the visible scene rather than guessing identities, roles or affiliations.

## Publish on GitHub Pages

1. Create a GitHub repository named `bihar-charitra` (or your preferred repository name).
2. Upload/push all files in this folder.
3. In the repository, open **Settings → Pages**.
4. Set **Build and deployment** to **GitHub Actions**.
5. Add the workflow below as `.github/workflows/deploy.yml` (already included).
6. Push to the `main` branch. GitHub Actions builds and publishes the `dist` folder.

## Connect your custom domain

1. Replace `YOUR-DOMAIN.COM` in `src/siteConfig.js`.
2. Create a file named `public/CNAME` containing only your domain, e.g. `example.com`.
3. In your domain registrar's DNS panel, add the DNS records recommended by GitHub Pages for your domain:
   - Apex/root domain: GitHub Pages A records (and optional AAAA records) shown in GitHub's Pages settings.
   - `www` subdomain: a CNAME to `<your-github-username>.github.io`.
4. In GitHub **Settings → Pages → Custom domain**, enter the domain and save.
5. Enable **Enforce HTTPS** once DNS verification completes.

Do not copy example DNS values blindly; use the values shown in your repository's GitHub Pages settings.

## Add YouTube videos

Open a video on YouTube and copy the ID from the URL. For `https://www.youtube.com/watch?v=VIDEO_ID`, add `"VIDEO_ID"` to `featuredVideoIds` in `src/siteConfig.js`. The video section will automatically render up to three embeds.

## Notes

- The UP Election 2027 section is framed as an upcoming, independent, non-partisan editorial project. Update the year and project description if the official schedule or scope changes.
- The site does not invent election statistics, candidate positions, episode titles, guest names or testimonials.
- The email link is a placeholder until an official address is added.
