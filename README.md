# Alex Rivas — Designer Portfolio

A full-stack recreation of the provided wireframe: a React (Vite) frontend
with a vibrant color system, and a small Express backend that receives
contact-form submissions.

## Structure

```
portfolio-website/
├── frontend/   React + Vite single-page site
└── backend/    Express API (contact form)
```

## Design

- **Palette:** electric violet `#6C3CE9`, hot coral `#FF5470`, sunny yellow
  `#FFC145` and teal `#00C2A8` on a soft lavender-white background — a
  deliberately vibrant, energetic system in place of the wireframe's grayscale.
- **Type:** Space Grotesk (display), Inter (body), Space Mono (labels/eyebrows).
- **Signature element:** an abstract "sticker" artwork (layered blobs, dot
  pattern, rotated tag) used in place of real photography in the hero, about,
  portfolio and contact sections — swap in real photos any time by replacing
  `<Artwork />` with an `<img>`.

## Run it locally

### 1. Backend (port 4000)

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend (port 5173)

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. The Vite dev server proxies `/api/*` requests to
the backend, so the contact form on the site posts straight to
`http://localhost:4000/api/contact`.

## Customize

- Edit copy, services, projects, process steps and testimonials in
  `frontend/src/data/content.js`.
- Swap the abstract artwork for real photos/renders by editing
  `frontend/src/components/Artwork.jsx` or replacing `<Artwork />` usages with
  `<img src="..." />`.
- Contact messages are appended to `backend/messages.json` and can be viewed
  at `GET http://localhost:4000/api/contact` (no auth — for local/demo use;
  add authentication before deploying publicly).

## Build for production

```bash
cd frontend
npm run build
```

This outputs static files to `frontend/dist`, which can be served by any
static host. Point the host's `/api` proxy (or update the `fetch` URL in
`Contact.jsx`) at your deployed backend.
