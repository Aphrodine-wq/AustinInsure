/**
 * Lead form → Zapier Webhook → Google Sheet (no EmailJS).
 * Replace ZAPIER_WEBHOOK_URL with your Zapier "Catch Hook" URL.
 */
(function () {
  // Set this to your Zapier Webhook URL (from Zapier: Webhooks by Zapier → Catch Hook)
  const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_HOOK/';

  const form = document.getElementById('lead-form');
  const submitBtn = document.getElementById('submit-btn');
  const messageEl = document.getElementById('form-message');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function showMessage(text, type) {
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.className = 'form-message visible ' + (type || '');
  }

  function setSubmitting(loading) {
    if (submitBtn) {
      submitBtn.disabled = !!loading;
      submitBtn.textContent = loading ? 'Sending…' : 'Submit — Get My Free Assessment';
    }
  }

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    showMessage('');
    setSubmitting(true);

    const payload = {
      name: form.name?.value?.trim() || '',
      phone: form.phone?.value?.trim() || '',
      email: form.email?.value?.trim() || '',
      address: form.address?.value?.trim() || '',
      damage_type: form.damage_type?.value || '',
      insurance_carrier: form.insurance_carrier?.value?.trim() || '',
      description: form.description?.value?.trim() || '',
      submitted_at: new Date().toISOString()
    };

    try {
      const res = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Network response was not OK');
      showMessage('Thanks! We’ll contact you within 24 hours.', 'success');
      form.reset();
    } catch (err) {
      console.error('Form submit error:', err);
      showMessage('Something went wrong. Please call us at (512) 555-1234 or try again later.', 'error');
    } finally {
      setSubmitting(false);
    }
  });
})();
