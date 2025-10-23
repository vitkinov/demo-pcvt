# PCVT - Programmers Club Veliko Tarnovo

A modern, static website for the Programmers Club Veliko Tarnovo built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Static Site Generation**: Fully static site that can be deployed anywhere
- **Markdown Content**: News posts and documents written in Markdown
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and structured data
- **TypeScript**: Full type safety throughout the application

## Project Structure

```
pcvt/
├── content/                 # Markdown content
│   ├── posts/              # News/blog posts
│   └── documents/          # Important club documents
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── documents/     # Documents listing and individual pages
│   │   ├── news/         # News listing and individual pages
│   │   └── layout.tsx    # Root layout
│   ├── components/        # Reusable components
│   │   ├── Header.tsx    # Site header with navigation
│   │   └── Footer.tsx    # Site footer
│   └── lib/              # Utility functions
│       └── markdown.ts   # Markdown processing utilities
├── public/               # Static assets
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pcvt
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory and can be deployed to any static hosting service.

## Content Management

### Adding News Posts

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description of the post"
author: "Author Name"
tags: ["tag1", "tag2"]
---

# Your Post Content

Write your post content here using Markdown...
```

### Adding Documents

1. Create a new `.md` file in `content/documents/`
2. Add frontmatter with required fields:

```markdown
---
title: "Document Title"
date: "2024-01-15"
description: "Brief description of the document"
category: "Policy"
---

# Document Content

Write your document content here using Markdown...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This site is configured for static export and can be deployed to:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Upload the `out/` folder contents
- **Any static hosting service**

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Gray Matter** - Frontmatter parsing
- **Remark** - Markdown processing
- **Remark HTML** - Convert Markdown to HTML
- **Remark GFM** - GitHub Flavored Markdown support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact the PCVT team at info@pcvt.bg