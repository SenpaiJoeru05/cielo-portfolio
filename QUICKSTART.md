# Quick Start Guide

## 1. Install Dependencies

Open terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including React, Vite, Swiper, and Tailwind CSS.

## 2. Start Development Server

```bash
npm run dev
```

Your portfolio will automatically open at `http://localhost:5173`

## 3. Make Changes

- Edit component files in `src/components/`
- Styles are in `src/index.css` and component files (Tailwind classes)
- Images are in the `img/` folder
- Changes will hot-reload automatically

## 4. Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## 5. Deploy

### Option A: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option B: Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set output: `dist`

### Option C: Other Platforms
Upload the contents of the `dist/` folder to your hosting provider.

## Project Structure Overview

```
cielo-portfolio/
├── src/
│   ├── components/          # React components (Hero, About, etc.)
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── img/                     # Images folder
│   ├── gallery/            # Gallery images
│   ├── certificates/       # Certificate images
│   └── other images
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment config
└── README.md               # Documentation
```

## Common Tasks

### Add a New Certificate
1. Place image in `img/certificates/`
2. Edit `src/components/Certificates.jsx`
3. Add certificate object to `schoolCertificates` or `onlineCertificates` array

### Add Gallery Images
1. Place images in `img/gallery/`
2. Edit `src/components/Gallery.jsx`
3. Update the `galleryImages` array with new image paths

### Update Content
Edit the component files directly - all content is in the components.

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Need to clear cache?**
```bash
rm -rf node_modules dist
npm install
```

**Images not loading?**
Make sure image paths start with `img/` (relative to public folder)

## Need Help?

Refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper React](https://swiperjs.com/react)
