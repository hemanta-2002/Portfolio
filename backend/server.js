import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, 'messages.json')

const app = express()
app.use(cors())
app.use(express.json())

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
