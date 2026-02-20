# Integrating Austin Insure React Forms with Zapier

To automate lead capture from the website and push the data to your CRM, email, or Google Sheets, you can connect the React forms (`IntakeModal.jsx` and `LeadForm.jsx`) directly to Zapier using a **Zapier Webhook**.

Here is a step-by-step guide on how to build this flow.

---

## Step 1: Create a Catch Hook Trigger in Zapier

1. Log into your [Zapier account](https://zapier.com/).
2. Click **Create a Zap**.
3. For the **Trigger**, search for and select **Webhooks by Zapier**.
4. Set the **Event** to **Catch Hook** and click Continue.
5. You do not need to enter anything in the "Pick off a Child Key" field. Click Continue.
6. Zapier will generate a **Webhook URL** (it will look something like `https://hooks.zapier.com/hooks/catch/xxxxxx/yyyyyy/`). 
7. **Copy this URL**. You will need it for the React codebase.

---

## Step 2: Update the React Code to Send Data to Zapier

You need to modify the form submission handler inside your React components (e.g., `src/components/LeadForm.jsx` and `src/components/IntakeModal.jsx`) so they post data to the Webhook URL you just copied.

### Example Code for `IntakeModal.jsx` or `LeadForm.jsx`

```javascript
const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Example: Gathering form data from IntakeModal
    // Note: State might hold these values in a real multi-step setup,
    // but here is the comprehensive payload based on your form fields.
    const formData = {
        name: e.target.name?.value || "Unknown",
        phone: e.target.phone?.value || "Unknown",
        email: e.target.email?.value || "Unknown",
        propertyAddress: e.target.address?.value || "Unknown",
        propertyCity: "Austin",
        propertyZip: e.target.zip?.value || "Unknown",
        propertyType: e.target.propertyType?.value || "Single Family",
        damageType: e.target.damageType?.value || "Unknown",
        urgency: e.target.urgency?.value || "Unknown",
        details: e.target.details?.value || "Unknown",
        claimFiled: e.target.claimFiled?.value || "Not yet",
        source: "Website Lead Form / Intake Modal"
    };

    try {
        // Send data to Zapier Webhook
        const response = await fetch('https://hooks.zapier.com/hooks/catch/26518372/uck5rhu/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert("Thanks! We will contact you shortly.");
        } else {
            console.error("Submission failed");
        }
    } catch (error) {
        console.error("Error submitting to Zapier:", error);
    }
};
```

---

## Step 3: Test the Webhook in Zapier

1. Go back to your React app locally (`npm run dev`) and fill out the contact form with test data (e.g., Name: John Doe, Email: test@test.com). Hit Submit.
2. In Zapier, click **Test Trigger**.
3. Zapier will listen for the data. If successful, you will see the payload containing John Doe's information under "Record A".
4. Click **Continue with selected record**.

---

## Step 4: Add Your Desired Action(s)

Now that Zapier is successfully receiving leads from your website, you can route that data anywhere. 

### Popular Actions for Contractors:
- **Email Notification**: Select **Gmail** > **Send Email** and map the incoming fields so you get an instant email when a lead comes in.
- **CRM Integration**: Select your CRM (e.g., **JobNimbus**, **HubSpot**, **GoHighLevel**) > **Create Contact/Lead** to automatically add the lead to your pipeline.
- **SMS Alert**: Select **Twilio** or **ClickSend SMS** to text your sales reps instantly.
- **Google Sheets**: Select **Google Sheets** > **Create Spreadsheet Row** to maintain a backup log of all incoming website leads.

---

## Step 5: Publish the Zap

1. Once your Action is fully mapped and tested, name your Zap in the top left corner (e.g., "Austin Insure Website Leads").
2. Click **Publish**.

Now, every time a homeowner submits a form on your site, it will automatically trigger the Zap and execute your configured workflow!
