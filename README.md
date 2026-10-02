# Eliza Tremzina Portfolio

An artist portfolio website built with Astro. Project pages are generated from Markdown content and can be managed through Decap CMS.

The backend architecture and technical implementation were created by [@dn237](https://github.com/dn237), including the content model, static page generation, CMS integration, gallery system, and deployment configuration.

## Features

- Responsive portfolio homepage and project pages
- Markdown-driven project content with ordered projects
- Image, MP4, and YouTube gallery blocks
- Decap CMS editor for creating and publishing projects
- Static production output for fast, simple hosting

## Tech stack

- Astro
- Markdown
- Decap CMS
- Netlify Identity and Git Gateway

## Technical contribution

The technical implementation in this repository was created by [@dn237](https://github.com/dn237) and includes:

- Designed the Markdown content model for portfolio projects
- Built the static project-page generation with Astro
- Configured Decap CMS for project and gallery management
- Implemented image, MP4, and YouTube media blocks
- Configured the Netlify deployment and access workflow

## Local development

Requires Node.js `22.12.0` or newer.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. The static output is written to `dist/`.
Use `npm run preview` to preview the production build locally.

## Deployment

The site should be deployed from Eliza Tremzina's GitHub repository. Connect that repository to Netlify and use the `main` branch for production builds. Netlify will build the site with `npm run build` and publish the `dist/` directory.

The repository does not contain passwords, Identity tokens, or other secrets.

## Admin setup

The editor is available at `/admin/` and uses Netlify Identity with Git Gateway.

Before launch, configure the Netlify site connected to Eliza's GitHub repository as follows:

1. Enable **Identity**.
2. Set registration to **Invite only**.
3. Disable external login providers unless they are explicitly needed.
4. Enable **Git Gateway** for the repository.
5. Invite exactly one admin email address, then remove any other users.
6. Confirm that `/admin/` redirects unauthenticated visitors to login and that the invited account can create and publish a test draft.

Do not put an Identity token or password in this repository. Netlify owns the account and access settings; the repository only contains the CMS schema.
