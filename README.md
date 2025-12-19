# Northwestern News Network – Strapi CMS

This repository contains the **Strapi headless CMS** for the Northwestern News Network (NNN). It serves as the central content management system powering the Astro frontend.

Editors, reporters, and producers use this CMS to manage:
- Stories and breaking news
- Staff profiles and roles
- Shows and programs
- Images, thumbnails, and video links

The CMS exposes a REST API that the Astro site consumes to render a fast, modern newsroom website.

---

## Tech Stack

- **Strapi v4** – Headless CMS
- **Node.js** – Runtime
- **SQLite / PostgreSQL** – Database (environment-dependent)
- **REST API** – Content delivery

---

## Requirements

Before running this project, you need:

- **Node.js** 18+
- **npm** or **yarn**
- Database:
  - Local dev: SQLite (default)
  - Production: PostgreSQL (recommended)

---

## Installation

Clone the repo and install dependencies:

```
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret
```

> **Important:** `APP_KEYS` is required for Strapi sessions. If missing, the server will fail to start.

---

## Running Strapi

### Development

```
npm run develop
```

Starts Strapi with hot reloading at:

```
http://localhost:1337
```

### Production

```
npm run build
npm run start
```

---

## Admin Panel

The admin UI is available at:

```
http://localhost:1337/admin
```

Create an admin user on first launch.

---

## Content Types

### Story

Primary content type used by the Astro frontend.

Typical fields:
- `headline` (text)
- `dek` (text)
- `slug` (UID)
- `articleBody` (rich text / blocks)
- `publishedAt` (date)
- `featured` (boolean)
- `videoUrl` (text, optional)
- `thumbnail` / `coverImage` (media)
- Relations:
  - `staff`
  - `show`

---

### Staff

Represents reporters, anchors, producers, and contributors.

Typical fields:
- `name`
- `role` (e.g. Reporter, Anchor)
- `headshot` (media)
- `bio`

Used to generate bylines such as:

```
By Jonas Blum • Reporter
```

---

### Show

Used for NNN programs and recurring content.

Typical fields:
- `title`
- `slug`
- `description`
- `logo`

---

## API Usage

The CMS exposes REST endpoints consumed by the Astro site.

Common patterns:

- Fetch latest stories:
  - `GET /api/stories?sort=publishedAt:desc`
- Fetch story by slug:
  - `GET /api/stories?filters[slug][$eq]=example-slug`
- Populate relations:
  - `populate=staff,thumbnail,show`

All content **must be published** to be available via the API.

---

## Roles & Permissions

Strapi permissions control what the public API can access.

Make sure the **Public** role has read access to:
- Stories
- Staff
- Shows

Fields must also be enabled individually.

---

## Media Handling

- Media is uploaded via the Strapi admin
- Images are served through Strapi’s media API
- Thumbnails and cover images are consumed by the Astro frontend

For production, configure cloud storage (S3, Cloudinary, etc.) if needed.

---

## Common Issues

### Server fails to start

Error:

```
Middleware "strapi::session": App keys are required
```

Fix:
- Ensure `APP_KEYS` is set in `.env`

---

### 400 errors from API

- Check that `populate` fields match exact content-type names
- Ensure relations exist on the entry
- Confirm the entry is published

---

### Content not appearing on frontend

- Entry is not published
- Public permissions are not enabled
- Incorrect API URL in Astro frontend

---

## Deployment Notes

- Strapi can be deployed on **Render**, **Railway**, **Heroku**, or **DigitalOcean**
- Use **PostgreSQL** for production
- Set all environment variables in the hosting provider
- Do not commit `.env` to version control

---

## Development Workflow

1. Run Strapi locally
2. Create or edit content in admin panel
3. Publish entries
4. View changes immediately in Astro frontend

---

## Maintainers

Northwestern News Network

Maintained by the NNN digital and newsroom teams.

