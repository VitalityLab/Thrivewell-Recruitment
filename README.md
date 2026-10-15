# Thrivewell-Recruitment

A static recruitment website for IRB study 2025-0970. Study facts come from the supplied recruitment email effective June 30, 2026 and are organized for a webpage with navigation, an overview, participation details, eligibility requirements, and staff contacts.

The page contains the study purpose, participation and procedures, focus-group time commitment, compensation, eligibility criteria, study staff contacts, and the HTTPS REDCap screening link. It uses no logos, screenshots, external fonts, JavaScript, or form collection.

## Preview

Run `python3 -m http.server 4173 --directory dist`, then open http://localhost:4173.

## Files

- `dist/index.html`: recruitment copy and REDCap link
- `dist/styles.css`: responsive layout and typography

To change the screening URL, update the `screening-link` anchor in `dist/index.html`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys `dist/` when `main` is updated. Set the repository's Settings → Pages publishing source to **GitHub Actions**.

Website: https://VitalityLab.github.io/Thrivewell-Recruitment/
