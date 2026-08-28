#!/bin/bash

# GovNexa AI - Setup Script for Linux/Mac

echo "🚀 GovNexa AI - Setup Script"
echo "================================"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not installed"
    echo "Install from: https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js found: $(node --version)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm not installed"
    exit 1
fi
echo "✅ npm found: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create .env file
echo ""
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created. Please edit it with your MongoDB URI"
else
    echo "ℹ️  .env file already exists"
fi

# Ask about seeding
echo ""
read -p "Do you want to seed the database? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌱 Seeding database..."
    node seed.js
fi

echo ""
echo "✅ Setup complete!"
echo "🚀 Start the server with: npm run dev"
echo "🌐 Open browser: http://localhost:5000"
