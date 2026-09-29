# Eliza Tremzina Portfolio

## Local development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. The static output is written to `dist/`.

## Admin setup

The editor is available at `/admin/` and uses Netlify Identity with Git Gateway.

Before launch, configure the Netlify site as follows:

1. Enable **Identity**.
2. Set registration to **Invite only**.
3. Disable external login providers unless they are explicitly needed.
4. Enable **Git Gateway** for the repository.
5. Invite exactly one admin email address, then remove any other users.
6. Confirm that `/admin/` redirects unauthenticated visitors to login and that the invited account can create and publish a test draft.

Do not put an Identity token or password in this repository. Netlify owns the account and access settings; the repository only contains the CMS schema.
