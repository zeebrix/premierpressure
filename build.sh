#!/bin/bash

# Premier Pressure Solutions WA - Build Script
# This script builds your website for production

echo "🚀 Building Premier Pressure Solutions WA Website..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Run the build
echo "🔨 Building production bundle..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "📂 Your production files are in the 'dist' folder"
    echo ""
    echo "Next steps:"
    echo "1. Test locally: npm run preview"
    echo "2. Deploy to Netlify: Drag 'dist' folder to netlify.com"
    echo "3. Or upload 'dist' contents to your web host"
    echo ""
    echo "📖 See FINAL-EXPORT-GUIDE.md for detailed deployment instructions"
    echo ""
else
    echo ""
    echo "❌ Build failed! Please check the error messages above."
    echo ""
    echo "Try running:"
    echo "  rm -rf node_modules package-lock.json"
    echo "  npm install"
    echo "  npm run build"
    echo ""
fi
