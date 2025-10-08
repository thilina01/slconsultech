# slconsultech-website

Professional website for Streamline Consultech Private Limited - A technology-driven organization specializing in AI-powered digital agents, enterprise cloud systems, and custom business automation platforms.

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive design optimized for all devices
- **AI & Automation Focus**: Showcase expertise in AI agents, cloud solutions, and automation
- **Project Portfolio**: Detailed case studies and project showcases
- **Contact Integration**: Professional contact forms and inquiry management
- **SEO Optimized**: Built with SEO best practices and performance optimization
- **GitHub Pages Deployment**: Automated CI/CD pipeline for seamless updates

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Performance**: Optimized build process and asset management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── ScrollToTop.jsx # Scroll behavior
├── layouts/            # Layout components
│   └── Layout.jsx      # Main layout wrapper
├── pages/              # Page components
│   ├── HomePage.jsx    # Homepage
│   ├── AboutPage.jsx   # About us page
│   ├── ServicesPage.jsx # Services page
│   ├── ProjectsPage.jsx # Projects portfolio
│   └── ContactPage.jsx # Contact page
├── data/               # Static data and content
│   ├── site.json       # Site configuration
│   ├── services.json   # Services data
│   ├── projects.json   # Projects data
│   ├── team.json       # Team information
│   └── industries.json # Industries served
└── main.jsx           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thilina01/slconsultech.git
cd slconsultech
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with the production build.

## 🌐 Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment process:

1. Builds the React application
2. Optimizes assets for production
3. Deploys to GitHub Pages
4. Sets up custom domain (slconsultech.github.io)

## 📝 Content Management

### Adding New Projects

1. Add project data to `src/data/projects.json`
2. Include project details, technologies, and outcomes
3. The project will automatically appear on the Projects page

### Updating Services

1. Modify `src/data/services.json`
2. Update service descriptions, features, and benefits
3. Changes will reflect across the website

### Team Information

1. Update `src/data/team.json` with team member information
2. Include roles, bios, and social links
3. Team section will automatically update

## 🎨 Customization

### Colors and Branding

The website uses a professional color scheme defined in `tailwind.config.js`:

- **Primary**: Blue tones for trust and technology
- **Secondary**: Gray tones for professionalism
- **Accent**: Complementary colors for highlights

### Typography

The website uses Inter font family for modern, readable typography.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Structured data and meta tags for search engines
- **Accessibility**: WCAG 2.1 compliant design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Streamline Consultech Private Limited**

- Email: info@slconsultech.com
- Phone: +94 72 466 6666
- Website: [www.slconsultech.com](https://www.slconsultech.com)

---

Built with ❤️ by the Streamline Consultech team