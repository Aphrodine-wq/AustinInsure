# Austin-Area Insurance Claims Landing Page

Landing page for EC Design & Build: lead intake form wired to **Zapier → Google Sheet** (no EmailJS).

## What’s included

- **Hero**: “Austin-Area Homeowners — File Your Insurance Claim With Confidence” + CTA  
- **Trust signals**: Licensed/insured badges, Texas contractor copy  
- **Lead form**: Name, phone, email, address, damage type, insurance carrier, description  
- **What to Expect**: 4-step process  
- **Form → Zapier Webhook → Google Sheet** (optional: add Twilio in Zapier for SMS)

## Zapier + Google Sheet setup

1. **Create a Zap**
   - **Trigger**: **Webhooks by Zapier** → **Catch Hook**
   - Zapier will show a URL like:  
     `https://hooks.zapier.com/hooks/catch/12345/abcdef/`
   - Leave the Zap in “test” mode for now so the URL is active.

2. **Put the URL in the site**
   - Open `script.js` and replace `ZAPIER_WEBHOOK_URL` with your Catch Hook URL:
     ```js
     const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_HOOK/';
     ```

3. **Send a test submission**
   - Submit the form once on your deployed or local site so Zapier receives a sample payload.

4. **Add the Google Sheet action**
   - **Action**: **Google Sheets** → **Create Spreadsheet Row**
   - Connect your Google account and pick (or create) a spreadsheet and sheet.
   - Map the incoming fields to columns. The form sends:
     - `name`, `phone`, `email`, `address`
     - `damage_type`, `insurance_carrier`, `description`
     - `submitted_at` (ISO timestamp)

5. **Optional: SMS via Twilio**
   - In the same Zap, add another action: **Twilio** → **Send SMS** (e.g. to the contractor’s phone) so he gets a text on each new lead.

6. **Turn the Zap on** so it runs on every form submission.

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
npx serve .
```

Then open the URL shown (e.g. http://localhost:3000). Replace the Zapier URL in `script.js` before testing the form.

## Deploy on Vercel

1. Push this repo to GitHub (e.g. [Aphrodine-wq/AustinInsure](https://github.com/Aphrodine-wq/AustinInsure)).
2. In [Vercel](https://vercel.com): **Add New** → **Project** → **Import** your GitHub repo.
3. Leave **Build Command** and **Output Directory** as default (Vercel will serve the root as static).
4. Click **Deploy**. Your site will be at `https://your-project.vercel.app`.
5. Optionally add a custom domain (e.g. ecdesignbuilds.com or austininsuranceclaims.com) under **Settings → Domains**.

## File structure

```
├── index.html
├── styles.css
├── script.js
├── README.md
└── vercel.json
```

## Notes

- **Phone number**: Replace `(512) 555-1234` in the header and in the form error message with the real number.
- **Before/After photos**: The “What to Expect” section has a placeholder; replace it with real images and captions.
- **Logo**: Update the “EC Design & Build” text/link in the header if you have a different name or URL.
