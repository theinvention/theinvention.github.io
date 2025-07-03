# NexusLearn - Premium Tech Education Platform

🚀 **Transform your career with world-class education from IIT alumni**

[![Deploy to GitHub Pages](https://github.com/yourusername/nexuslearn/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/nexuslearn/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://yourusername.github.io/nexuslearn)

## 🌟 About NexusLearn

NexusLearn is a premium educational platform offering comprehensive courses in:

- 🚀 **Startup Incubation Programs** (Pre & Post)
- 💻 **Programming** (Python, C, C++, DSA)
- 🤖 **Artificial Intelligence** (ML, Deep Learning, Generative AI)
- 📊 **Data Science & Analytics**
- 📐 **Mathematics & Statistics**

### ✨ Key Features

- **Expert Faculty**: Learn from experienced IIT alumni
- **Live Interactive Classes**: Real-time learning experience
- **Hands-on Projects**: Build real-world applications
- **Career Support**: Job placement assistance
- **Lifetime Access**: Access materials forever
- **Industry Partnerships**: Connect with 50+ companies

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nexuslearn.git

# Navigate to project directory
cd nexuslearn

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Fork this repository** to your GitHub account

2. **Update configuration**:
   - Edit `vite.config.ts`: Change `base: '/nexuslearn/'` to `base: '/your-repo-name/'`
   - Edit `package.json`: Update `homepage` URL
   - Edit `.github/workflows/deploy.yml`: Update CNAME if needed

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source

4. **Push changes** to main branch - deployment happens automatically!

### Manual Deployment

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
nexuslearn/
├── public/
│   ├── vite.svg
│   └── CNAME
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # TypeScript definitions
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
├── package.json
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🎨 Design Features

- **Dark Theme**: Sophisticated dark color scheme
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional interface
- **Smooth Animations**: Engaging micro-interactions
- **Accessibility**: WCAG compliant design

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial page load
- **SEO Optimized**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

If you find this project helpful, please give it a ⭐ on GitHub!

## 📞 Contact

- **Website**: [https://yourusername.github.io/nexuslearn](https://yourusername.github.io/nexuslearn)
- **Email**: info@nexuslearn.com
- **Phone**: +91 98765 43210

---

**Built with ❤️ for learners worldwide**