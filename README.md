# Marie Cielo B. Balbuena - Portfolio

A modern React portfolio built with Vite, Tailwind CSS, and Swiper carousel.

## Features

✨ **Modern React Setup** - Built with Vite for fast development and deployment
🎨 **Tailwind CSS** - Utility-first CSS framework
🎡 **Swiper Carousel** - Beautiful gallery and carousel effects
📱 **Fully Responsive** - Mobile-first design
✨ **Smooth Animations** - Scroll reveal and interactive elements
🌐 **Easy Deployment** - Ready for deployment on Vercel, Netlify, or any static host

## Project Structure

```
src/
├── components/           # React components
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Timeline.jsx
│   ├── Leadership.jsx
│   ├── Athlete.jsx
│   ├── Achievements.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Gallery.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SideNav.jsx
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles

public/
└── img/                 # Images directory
    ├── gallery/
    ├── certificates/
    └── other images
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is ready to deploy on:

- **Vercel** (recommended)
  ```bash
  npm i -g vercel
  vercel
  ```

- **Netlify**
  - Connect your Git repository to Netlify
  - Build command: `npm run build`
  - Publish directory: `dist`

- **GitHub Pages, Firebase, AWS S3**, etc.
  - Build the project and upload the `dist/` folder

## Technologies Used

- **React 18** - JavaScript library for building UIs
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper** - Modern carousel/slider library
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## Customization

### Update Personal Information
Edit each component file to update content, images, and personal details.

### Modify Styles
- Global styles are in `src/index.css`
- Component-specific classes use Tailwind CSS
- CSS variables defined in `:root` can be customized

### Add More Certificates
Edit `src/components/Certificates.jsx` to add more certificate images.

### Add Gallery Images
Edit `src/components/Gallery.jsx` to add more gallery slides.

## License

© 2026 Marie Cielo B. Balbuena. All Rights Reserved.
