# Passion & Co

Next.js, TypeScript and Tailwind company website. Motion provides restrained page and scroll transitions.

## Local development

`npm install` then `npm run dev`. Production: `npm run build` and `npm start`.

## Updating content

Services, contacts and project stories live in `lib/content.ts`. Add optimised photographs and MP4 clips to `public/media`, then update the relevant project's image and video arrays. `media-manifest.json` maps each photograph to the supplied original filename. Progress and completion status must reflect the actual evidence.

Individual service-page content, the enquiry process and FAQs live in `lib/service-details.ts`. The home page includes residential and commercial capability sections. See `ASSET_NOTES.md` for the source and playback behaviour of the hero film and the transparent logo.

The quotation form prepares a WhatsApp message for either supplied contact number. It does not submit to a database or send a message automatically.

Set `NEXT_PUBLIC_SITE_URL` to the final production domain if the domain changes, for sitemap and sharing metadata.

All photography, logo and project video are supplied Passion & Co assets. No generated interiors or invented testimonials are used.
