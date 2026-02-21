# API Hunter

A modern React product showcase app that fetches real-time data from Fake Store API and displays it in a clean, animated, dark-mode-ready UI.

## Features

- Live product fetching from `https://fakestoreapi.com/products`
- Search by product title
- Category-based filtering
- Product detail modal with image, rating, description, and price
- Dark/Light theme toggle
- Skeleton loading states
- API status bar with live result count
- Smooth hover and entrance animations
- Responsive layout for mobile, tablet, and desktop

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Lucide React Icons

## Project Structure

```txt
src/
  components/
    Navbar.jsx
    Hero.jsx
    CategoryBar.jsx
    ProductGrid.jsx
    ProductCard.jsx
    ProductModal.jsx
    StatusBar.jsx
  hooks/
    useProducts.js
  pages/
    Home.jsx
  App.jsx
  main.jsx
  index.css
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd 8.API-Hunter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## API Used

- Fake Store API: `https://fakestoreapi.com/products`

## Theme Support

This project uses class-based dark mode with Tailwind v4.

- Toggle is handled in `src/pages/Home.jsx`
- Tailwind dark variant is configured in `src/index.css`

## Screenshots

Add your screenshots in this section:

- Home (Light)
- Home (Dark)
- Product Modal
- Mobile View

## Deployment

You can deploy this project easily on:

- Vercel
- Netlify
- GitHub Pages (with Vite static build)

Build command:

```bash
npm run build
```

Output directory:

```txt
dist
```

## Future Improvements

- Add cart and checkout flow
- Add pagination or infinite scroll
- Add sorting (price, rating, newest)
- Persist theme in localStorage
- Add unit tests and component tests

## License

This project is open-source and available under the MIT License.
