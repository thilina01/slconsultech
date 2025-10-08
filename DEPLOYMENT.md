# Deployment Guide for Streamline Consultech Website

## 🚀 Quick Deployment Steps

### 1. Initialize Git Repository
```bash
cd /home/thilina/dev/projects/slconsultech
git init
git add .
git commit -m "Initial commit: Professional website for Streamline Consultech"
```

### 2. Connect to GitHub Repository
```bash
git remote add origin https://github.com/thilina01/slconsultech.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository: https://github.com/thilina01/slconsultech
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### 4. Configure Custom Domain
1. In GitHub Pages settings, add your custom domain: `www.slconsultech.com`
2. Update your DNS settings with your domain provider:
   - Add a CNAME record: `www` → `thilina01.github.io`
   - Or add an A record pointing to GitHub Pages IP addresses

### 5. Verify Deployment
- Website will be available at: https://www.slconsultech.com
- GitHub Pages URL: https://thilina01.github.io/slconsultech

## 📋 Pre-Deployment Checklist

- [x] Domain updated to `www.slconsultech.com`
- [x] Repository URL updated to `https://github.com/thilina01/slconsultech.git`
- [x] GitHub Actions workflow configured
- [x] CNAME file created with correct domain
- [x] Build process tested and working
- [x] SEO and structured data configured
- [x] Contact information ready

## 🔧 Configuration Files Updated

### Domain Configuration
- `src/data/site.json` - Updated domain to `www.slconsultech.com`
- `CNAME` - Set to `www.slconsultech.com`
- `index.html` - Updated structured data URLs
- `.github/workflows/deploy.yml` - Updated CNAME setting

### Repository Information
- `package.json` - Added repository and homepage URLs
- `README.md` - Updated clone instructions and website links

## 🌐 Post-Deployment Steps

1. **Test the Website**: Visit https://www.slconsultech.com
2. **Check All Pages**: Navigate through all sections
3. **Test Contact Form**: Verify form submission works
4. **Mobile Testing**: Test responsive design on mobile devices
5. **SEO Verification**: Use Google Search Console to verify the site

## 📊 Analytics Setup

To enable Google Analytics:
1. Create a Google Analytics account
2. Get your GA4 Measurement ID
3. Update `src/data/site.json`:
   ```json
   "analytics": {
     "googleAnalytics": "G-XXXXXXXXXX"
   }
   ```

## 🔄 Future Updates

To update the website:
1. Make changes to the code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update: [description of changes]"
   git push origin main
   ```
3. GitHub Actions will automatically deploy the changes

## 📞 Support

If you encounter any issues:
- Check GitHub Actions logs in the repository
- Verify DNS settings with your domain provider
- Ensure GitHub Pages is enabled in repository settings

---

**Website is ready for deployment! 🎉**
