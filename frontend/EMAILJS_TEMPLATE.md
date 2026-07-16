# EmailJS Template for Contact Form

Use the following template fields in your EmailJS template configuration.

## Template ID
Set this value as `VITE_EMAILJS_TEMPLATE_ID` in `frontend/.env`.

## Template parameters
- `from_name` — Sender name from the form
- `from_email` — Sender email from the form
- `subject` — Form subject
- `message` — Form message

## Sample email template body
```html
<p><strong>Sender:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

## Frontend environment variables
In `frontend/.env` include:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Notes
- Make sure the template field names match exactly.
- If you want to use a custom subject in the template itself, you can also set `subject` in the template body.
- This frontend sends the form data directly from the browser, so be sure to secure your EmailJS public key appropriately in Vercel or local environment.
