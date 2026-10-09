# Thrivewell-Recruitment

A buildless, responsive static website for the UIC ThriveWell research study. Content is based on the supplied recruitment document. The food illustration is decorative; the personalization panel is clearly labeled as a concept, not a product screenshot. The official Vitality Lab logo is sourced from the UIC lab website.

## Preview

Run `python3 -m http.server 4173 --directory dist`, then open http://localhost:4173.

## Add the screening survey

Set `screeningUrl` in `dist/config.js` to the final HTTPS survey URL. The main participation button will automatically change from a study-team email link to the screening survey. No participant information is collected or stored by this website.

## Files

- `dist/index.html`: study content and layout
- `dist/styles.css`: responsive design
- `dist/config.js`: screening survey configuration
- `dist/script.js`: mobile menu and screening link
- `dist/assets/vitality-logo.jpg`: official lab logo

## GitHub Pages

The GitHub Actions workflow in `.github/workflows/pages.yml` deploys `dist/` when `main` is updated. In the repository's Settings → Pages, set the publishing source to **GitHub Actions**.

Website: https://VitalityLab.github.io/Thrivewell-Recruitment/

The proposed custom domains in the supplied document are not configured. The separate Sites-hosted version starts with private access.
