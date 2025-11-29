# Joker Spinner

A modern React web application featuring a Joker spinner game and resolution selector.

## Features

- **Joker Spinner**: Interactive clicking game with odd/even logic
- **Resolution Selector**: View images in different resolutions (720p, 1080p, 4k)
- **Modern UI**: Beautiful gradients, animations, and glassmorphism effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices

## Tech Stack

- React 18
- Vite
- CSS3 with modern animations
- Deployed on Vercel

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Method 3: Deploy from Git

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Connect to Vercel and deploy automatically

## Build Configuration

The project is already configured with:
- ✅ `vercel.json` - Vercel configuration
- ✅ `.gitignore` - Git ignore rules
- ✅ `package.json` - Build scripts
- ✅ `vite.config.js` - Vite configuration

## Project Structure

```
jokerSpinner/
├── src/
│   ├── components/
│   │   ├── JokerSpinner.jsx
│   │   ├── JokerSpinner.css
│   │   ├── ResolutionSelector.jsx
│   │   └── ResolutionSelector.css
│   ├── images/
│   │   └── jokerImages.jpeg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## License

MIT

