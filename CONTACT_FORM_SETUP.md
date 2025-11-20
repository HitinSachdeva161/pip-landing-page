# Contact Form Setup Guide

## Using Web3Forms (Current Implementation)

The contact form is currently configured to use **Web3Forms**, a free form backend service.

### Steps to Activate:

1. **Get Your Access Key**
   - Visit [https://web3forms.com](https://web3forms.com)
   - Sign up for a free account (no credit card required)
   - Copy your access key from the dashboard

2. **Update the Code**
   - Open `src/components/TeamSection.tsx`
   - Find line 28: `access_key: "YOUR_ACCESS_KEY_HERE"`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key

3. **Configure Email Notifications**
   - In Web3Forms dashboard, set the email address where you want to receive submissions
   - Customize email templates (optional)

### Features Included:
- ✅ Real-time form submission
- ✅ Loading states during submission
- ✅ Success/error message display
- ✅ Automatic form reset on success
- ✅ Email notifications to your inbox
- ✅ Spam protection built-in
- ✅ GDPR compliant

---

## Alternative: Formspree

If you prefer to use **Formspree** instead:

1. Visit [https://formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form endpoint URL
4. Update the fetch URL in `TeamSection.tsx` from:
   ```
   https://api.web3forms.com/submit
   ```
   to:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
5. Adjust the request body format accordingly

---

## Alternative: EmailJS

For **EmailJS** (client-side email sending):

1. Visit [https://www.emailjs.com](https://www.emailjs.com)
2. Create an account and set up email service
3. Install EmailJS: `npm install @emailjs/browser`
4. Follow EmailJS React documentation

---

## Testing

After setting up your access key:

1. Run the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check for:
   - Loading state appears
   - Success message shows
   - Form fields clear
   - Email received in your inbox

---

## Free Tier Limits

**Web3Forms Free Plan:**
- 250 submissions/month
- Email notifications
- Spam filtering
- File uploads (up to 5MB)
- Custom redirects

For higher limits, check their pricing page.

