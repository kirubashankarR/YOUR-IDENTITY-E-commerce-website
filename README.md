# Your Identity - Corporate Identity Solutions

A complete corporate identity solutions website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Product Catalog**: Comprehensive product pages for all categories
- **Contact System**: Interactive contact form with validation
- **SEO Optimized**: Meta tags, sitemap, and robots.txt included
- **Performance**: Optimized images and fast loading times
- **Accessibility**: WCAG compliant components and navigation

## Pages

- **Home**: Hero section with company overview and featured categories
- **About**: Company story, values, and location information
- **Products**: Main product catalog with categories
  - ID Cards & Accessories
  - Business Cards
  - Corporate T-Shirts
  - Industrial Shoes
  - Caps & Uniforms
- **Contact**: Contact form and business information
- **404**: Custom not found page

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner toast notifications

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── about/                 # About page
├── contact/              # Contact page
├── products/             # Products section
│   ├── business-cards/   # Business cards category
│   ├── caps-uniforms/    # Caps and uniforms category
│   ├── id-cards/         # ID cards category
│   ├── shoes/            # Industrial shoes category
│   └── tshirts/          # Corporate t-shirts category
├── globals.css           # Global styles
├── layout.tsx            # Root layout
├── loading.tsx           # Loading component
├── not-found.tsx         # 404 page
├── page.tsx              # Home page
├── robots.ts             # Robots.txt
└── sitemap.ts            # Sitemap

components/
├── ui/                   # Reusable UI components
├── footer.tsx            # Site footer
├── navigation.tsx        # Main navigation
└── theme-provider.tsx    # Theme provider

public/
├── placeholder.jpg       # Placeholder images
└── ...                   # Other static assets
```

## Customization

### Colors and Branding
The design system uses CSS custom properties defined in `app/globals.css`. Update the color values to match your brand:

```css
:root {
  --primary: oklch(0.205 0 0);        /* Main brand color */
  --primary-foreground: oklch(0.985 0 0);
  /* ... other color variables */
}
```

### Content
- Update company information in `components/footer.tsx`
- Modify product data in each product page
- Update contact details in `app/contact/page.tsx`
- Replace placeholder images in the `public/` directory

### SEO
- Update the domain in `app/sitemap.ts` and `app/robots.ts`
- Modify metadata in `app/layout.tsx`
- Add your Google Analytics or other tracking codes

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting provider

## Contact Information

**Your Identity**
- Address: Kumaran Building, Old No. 40, New 37C, Rajendraprasad Road, Coimbatore - 641 012
- Phone: 8870007483 / 9894877483
- Email: urid2025@gmail.com

---

*"All You Need is Identity, We Make it Better"*