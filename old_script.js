/**
 * Lead form + Detailed intake modal → Zapier Webhook → construction owner.
 * Replace ZAPIER_WEBHOOK_URL with your Zapier "Catch Hook" URL.
 */
(function () {
  const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_HOOK/';

  const form = document.getElementById('lead-form');
  const submitBtn = document.getElementById('submit-btn');
  const messageEl = document.getElementById('form-message');
  const yearEl = document.getElementById('year');

  const intakeModal = document.getElementById('intake-modal');
  const intakeForm = document.getElementById('intake-form');
  const intakeBack = document.getElementById('intake-back');
  const intakeNext = document.getElementById('intake-next');
  const intakeSubmit = document.getElementById('intake-submit');
  const intakeMessage = document.getElementById('intake-message');
  const openModalTriggers = document.querySelectorAll('#open-intake-modal, #open-intake-modal-expect, [data-open-intake], .btn-open-modal');
  const closeModalBtn = document.getElementById('intake-modal-close');
  const modalBackdrop = document.getElementById('intake-modal-backdrop');

  const TOTAL_STEPS = 4;
  let currentStep = 1;

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function showMessage(el, text, type) {
    if (!el) return;
    el.textContent = text;
    el.className = 'form-message visible ' + (type || '');
  }

  function setSubmitting(loading) {
    if (submitBtn) {
      submitBtn.disabled = !!loading;
      submitBtn.textContent = loading ? 'Sending…' : 'Submit — Get My Free Assessment';
    }
  }

  // —— Intake modal: open / close ——
  function openIntakeModal() {
    if (!intakeModal) return;
    intakeModal.classList.add('open');
    intakeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const openBtn = document.getElementById('open-intake-modal');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
    goToStep(1);
    if (intakeForm) intakeForm.reset();
    showMessage(intakeMessage, '');
    setTimeout(function () {
      const first = intakeModal.querySelector('input, select, textarea');
      if (first) first.focus();
    }, 100);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function closeIntakeModal() {
    if (!intakeModal) return;
    intakeModal.classList.remove('open');
    intakeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const openBtn = document.getElementById('open-intake-modal');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
  }

  openModalTriggers.forEach(function (btn) {
    btn.addEventListener('click', openIntakeModal);
  });
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeIntakeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeIntakeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && intakeModal && intakeModal.classList.contains('open')) {
      closeIntakeModal();
    }
  });

  // —— Intake steps ——
  function goToStep(step) {
    currentStep = Math.max(1, Math.min(TOTAL_STEPS, step));
    const panels = intakeModal ? intakeModal.querySelectorAll('.intake-panel') : [];
    const dots = intakeModal ? intakeModal.querySelectorAll('.intake-step-dot') : [];
    panels.forEach(function (panel) {
      const n = parseInt(panel.getAttribute('data-panel'), 10);
      panel.classList.toggle('active', n === currentStep);
    });
    dots.forEach(function (dot) {
      const n = parseInt(dot.getAttribute('data-step'), 10);
      dot.classList.toggle('active', n === currentStep);
      dot.setAttribute('aria-current', n === currentStep ? 'step' : null);
    });
    if (intakeBack) intakeBack.disabled = currentStep === 1;
    if (intakeNext) intakeNext.style.display = currentStep === TOTAL_STEPS ? 'none' : '';
    if (intakeSubmit) intakeSubmit.style.display = currentStep === TOTAL_STEPS ? '' : 'none';
  }

  function validateCurrentStep() {
    const panel = intakeModal ? intakeModal.querySelector('.intake-panel[data-panel="' + currentStep + '"]') : null;
    if (!panel) return true;
    const required = panel.querySelectorAll('[required]');
    let valid = true;
    required.forEach(function (field) {
      const v = (field.value || '').trim();
      if (!v) {
        valid = false;
        field.setAttribute('aria-invalid', 'true');
            field.classList.add('input-error');
      } else {
        field.removeAttribute('aria-invalid');
            field.classList.remove('input-error');
      }
    });
    return valid;
  }

  if (intakeBack) {
    intakeBack.addEventListener('click', function () {
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  }
  if (intakeNext) {
    intakeNext.addEventListener('click', function () {
      if (!validateCurrentStep()) {
        showMessage(intakeMessage, 'Please fill in all required fields on this step.', 'error');
        return;
      }
      showMessage(intakeMessage, '');
      if (currentStep < TOTAL_STEPS) goToStep(currentStep + 1);
    });
  }

  if (intakeForm) {
    intakeForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (!validateCurrentStep()) {
        showMessage(intakeMessage, 'Please fill in all required fields.', 'error');
        return;
      }
      showMessage(intakeMessage, '');
      intakeSubmit.disabled = true;
      intakeSubmit.textContent = 'Sending…';

      const fd = new FormData(intakeForm);
      const get = function (name) { return (fd.get(name) || '').toString().trim(); };
      const payload = {
        name: get('name'),
        phone: get('phone'),
        email: get('email'),
        contact_method: get('contact_method'),
        best_time: get('best_time'),
        alt_phone: get('alt_phone'),
        referral_source: get('referral_source'),
        address: get('address'),
        city: get('city'),
        state: get('state') || 'TX',
        zip: get('zip'),
        property_type: get('property_type'),
        sqft: get('sqft'),
        year_built: get('year_built'),
        stories: get('stories'),
        roof_type: get('roof_type'),
        damage_type: get('damage_type'),
        date_of_loss: get('date_of_loss'),
        insurance_carrier: get('insurance_carrier'),
        claim_number: get('claim_number'),
        policy_holder: get('policy_holder'),
        claim_filed: get('claim_filed'),
        policy_number: get('policy_number'),
        deductible: get('deductible'),
        adjuster_status: get('adjuster_status'),
        description: get('description'),
        urgency: get('urgency'),
        temp_repairs: get('temp_repairs'),
        preferred_inspection_date: get('preferred_inspection_date'),
        photos_note: get('photos_note'),
        notes: get('notes'),
        full_address: [get('address'), get('city'), get('state'), get('zip')].filter(Boolean).join(', '),
        submitted_at: new Date().toISOString(),
        source: 'detailed_intake_modal'
      };

      try {
        const res = await fetch(ZAPIER_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('Network response was not OK');
        showMessage(intakeMessage, 'Thanks! Your details have been sent to our team. We’ll contact you within 24 hours.', 'success');
        intakeForm.reset();
        setTimeout(closeIntakeModal, 2000);
      } catch (err) {
        console.error('Intake submit error:', err);
        showMessage(intakeMessage, 'Something went wrong. Please call us at (512) 555-1234 or try again later.', 'error');
      } finally {
        intakeSubmit.disabled = false;
        intakeSubmit.textContent = 'Send to Our Team — Get My Free Assessment';
      }
    });
  }

  // —— In-page lead form (Zapier) ——
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    showMessage(messageEl, '');
    setSubmitting(true);

    const payload = {
      name: form.name?.value?.trim() || '',
      phone: form.phone?.value?.trim() || '',
      email: form.email?.value?.trim() || '',
      address: form.address?.value?.trim() || '',
      damage_type: form.damage_type?.value || '',
      insurance_carrier: form.insurance_carrier?.value?.trim() || '',
      description: form.description?.value?.trim() || '',
      submitted_at: new Date().toISOString(),
      source: 'in_page_form'
    };

    try {
      const res = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Network response was not OK');
      showMessage(messageEl, 'Thanks! We'll contact you within 24 hours.', 'success');
      form.reset();
    } catch (err) {
      console.error('Form submit error:', err);
      showMessage(messageEl, 'Something went wrong. Please call us at (512) 555-1234 or try again later.', 'error');
    } finally {
      setSubmitting(false);
    }
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
})();
