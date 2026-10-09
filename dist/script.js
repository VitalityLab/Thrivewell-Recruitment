const menu = document.querySelector('.menu');
const mobileNav = document.getElementById('mobile-nav');
menu.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
 mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
 mobileNav.hidden = true;
 menu.setAttribute('aria-expanded', 'false');
 menu.setAttribute('aria-label', 'Open navigation');
}));
const surveyUrl = window.THRIVEWELL_CONFIG?.screeningUrl;
if (surveyUrl) {
 try {
  const url = new URL(surveyUrl);
  if (url.protocol === 'https:') {
   const link = document.getElementById('screening-link');
   link.href = url.href;
   link.innerHTML = 'Check your eligibility <span aria-hidden="true">↗</span>';
   document.getElementById('screening-note').textContent = 'Follow the link to the study’s eligibility screening survey.';
  }
 } catch { /* Keep the study-team email option until a valid URL is supplied. */ }
}
