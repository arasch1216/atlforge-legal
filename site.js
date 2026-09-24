/** Optional ?app=riskpilot|ticket-quality on legal pages scrolls to app section */
(function () {
  const param = new URLSearchParams(window.location.search).get('app');
  if (!param) return;
  const id = param === 'ticket-quality' ? 'ticket-quality' : param === 'riskpilot' ? 'riskpilot' : param;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
})();
