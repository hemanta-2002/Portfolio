import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, 'messages.json')

const app = express()
app.use(cors())
app.use(express.json())

function createMailer() {
  const auth = process.env.SMTP_USER && process.env.SMTP_PASS ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  } : undefined

  const transport = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth,
  }

  return nodemailer.createTransport(transport)
}

function getRecipient() {
  return process.env.EMAIL_TO || 'hemantahere01@gmail.com'
}

async function readMessages() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeMessages(messages) {
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2))
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

// Receive a contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'name, email, subject and message are all required.' })
  }

  const entry = {
    id: Date.now().toString(36),
    name: String(name).trim(),
    email: String(email).trim(),
    subject: String(subject).trim(),
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  }

  const messages = await readMessages()
  messages.push(entry)
  await writeMessages(messages)

  try {
    const transporter = createMailer()
    await transporter.sendMail({
      from: `${entry.name} <${entry.email}>`,
      to: getRecipient(),
      subject: `Portfolio contact form: ${entry.subject}`,
      text: `Name: ${entry.name}\nEmail: ${entry.email}\n\nMessage:\n${entry.message}`,
      html: `<p><strong>Name:</strong> ${entry.name}</p><p><strong>Email:</strong> ${entry.email}</p><p><strong>Subject:</strong> ${entry.subject}</p><p><strong>Message:</strong></p><p>${entry.message.replace(/\n/g, '<br>')}</p>`,
    })
    console.log(`Email sent to ${getRecipient()} for contact message ${entry.id}`)
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return res.status(500).json({ error: 'Message saved but email delivery failed.' })
  }

  console.log(`New contact message from ${entry.name} <${entry.email}>: ${entry.subject}`)

  res.status(201).json({ ok: true, id: entry.id })
})

// List submitted messages (simple admin view — no auth, for local/demo use only)
app.get('/api/contact', async (_req, res) => {
  const messages = await readMessages()
  res.json(messages)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`)
})
