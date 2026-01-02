# Nexora Digital Solutions - Landing Page

A modern, interactive landing page built with Vite, React, and TypeScript for Nexora Digital Solutions.

## Features

- **Modern Design**: Sleek gradient backgrounds and smooth animations
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic transitions
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Services Showcase**: Display of core services with visual icons
- **Portfolio Section**: Showcase of completed projects with project details
- **Contact Form**: Functional contact form for client inquiries
- **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Navbar with mobile menu
│   ├── Hero.tsx           # Hero section with CTA
│   ├── Services.tsx       # Services showcase
│   ├── Portfolio.tsx      # Project portfolio
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer section
├── App.tsx                # Main app component
├── main.tsx              # React DOM entry point
└── index.css             # Global styles & Tailwind
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

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors
The site uses a cyan-blue color scheme. You can customize the colors in `tailwind.config.js`:

```javascript
extend: {
  colors: {
    nexora: {
      // Your custom colors here
    }
  }
}
```

### Content
Update the following components with your actual content:
- **Hero**: Update headline, description, and CTA text
- **Services**: Add/remove services and update descriptions
- **Portfolio**: Add your actual projects with images and links
- **Contact**: Update contact details and form handling

### Services
Edit the `services` array in `src/components/Services.tsx` to customize:
- Service titles
- Descriptions
- Icons
- Colors

### Portfolio
Edit the `projects` array in `src/components/Portfolio.tsx` to add:
- Project titles and descriptions
- Project images/emojis
- Technology tags
- Project links and GitHub repos

### Contact Information
Update contact details in `src/components/Contact.tsx`:
- Email address
- Phone number
- Physical address
- Social media links

## Performance Tips

- Images are served as emoji placeholders - consider using actual images in production
- Animations use CSS transforms for better performance
- Components are optimized with proper React hooks usage
- Tailwind CSS is properly configured for production optimization

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For support and questions, feel free to reach out:
- Email: hello@nexora.digital
- Website: nexora.digital

---

Happy coding! 🚀
