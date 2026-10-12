# Thrivewell-Recruitment

A buildless, responsive static website for the ThriveWell research study. Recruitment copy follows the supplied study document and the October 11 wording revisions. The chat screenshot was supplied by the study team. The official Vitality Lab logo is sourced from the UIC lab website.

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
- `dist/assets/thrivewell-logo.png`: supplied ThriveWell logo for the header
- `dist/assets/thrivewell-chat.png`: study-team screenshot of the recipe assistant

## GitHub Pages

The GitHub Actions workflow in `.github/workflows/pages.yml` deploys `dist/` when `main` is updated. In the repository's Settings → Pages, set the publishing source to **GitHub Actions**.

Website: https://VitalityLab.github.io/Thrivewell-Recruitment/

The proposed custom domains in the supplied document are not configured. The separate Sites-hosted version starts with private access.
