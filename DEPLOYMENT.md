# GovNexa AI - Deployment Guide

## 🚀 Deployment Options

### Option 1: Deploy on Heroku (Easiest)

#### Prerequisites
- Heroku account (free at heroku.com)
- Heroku CLI installed
- Git installed
- MongoDB Atlas account (free cloud database)

#### Steps

1. **Create Heroku App**
```bash
heroku login
heroku create your-app-name
```

2. **Setup MongoDB Atlas**
- Go to mongodb.com/cloud/atlas
- Create free cluster
- Get connection string
- Add to Heroku config:
```bash
heroku config:set MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/govnexa-ai
heroku config:set JWT_SECRET=your-secret-key
heroku config:set NODE_ENV=production
```

3. **Deploy**
```bash
git push heroku main
```

4. **Seed Database**
```bash
heroku run node seed.js
```

5. **Open App**
```bash
heroku open
```

### Option 2: Deploy on Vercel (Frontend) + Render (Backend)

#### Vercel (Frontend)
```bash
npm install -g vercel
vercel
```

#### Render (Backend)
1. Push code to GitHub
2. Connect GitHub to Render
3. Create Web Service
4. Add environment variables
5. Deploy

### Option 3: Deploy on Railway.app

1. Go to railway.app
2. Connect GitHub
3. Create new project
4. Select repository
5. Add environment variables
6. Deploy

### Option 4: Self-Hosted (VPS/Dedicated Server)

#### On Ubuntu/Debian Server

```bash
# 1. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Install MongoDB
sudo apt-get install -y mongodb

# 3. Clone and setup
git clone https://github.com/dhakshatech-4/exam-prep-hub.git
cd exam-prep-hub
npm install

# 4. Configure .env
cp .env.example .env
nano .env  # Edit with your settings

# 5. Seed database
node seed.js

# 6. Start with PM2
npm install -g pm2
pm2 start server.js --name "govnexa-ai"
pm2 startup
pm2 save

# 7. Setup Nginx reverse proxy
sudo apt-get install nginx
# Configure /etc/nginx/sites-available/default
# Point to localhost:5000
```

## 📊 Deployment Checklist

- [ ] Set NODE_ENV=production
- [ ] Change JWT_SECRET to random string
- [ ] Configure MONGODB_URI
- [ ] Set appropriate PORT
- [ ] Enable CORS for your domain
- [ ] Add SSL certificate
- [ ] Setup domain name
- [ ] Test all authentication flows
- [ ] Verify API endpoints
- [ ] Check error handling
- [ ] Setup monitoring
- [ ] Configure backups

## 🔒 Production Security

1. **HTTPS Only** - Use SSL certificates
2. **Environment Variables** - Never commit secrets
3. **Database Backups** - Regular MongoDB backups
4. **Rate Limiting** - Prevent abuse
5. **Input Validation** - Sanitize all inputs
6. **CORS Configuration** - Allow only trusted origins
7. **Monitoring** - Setup error tracking
8. **Logging** - Log important events

## 📈 Monitoring

- Setup error tracking (Sentry, Rollbar)
- Monitor database performance
- Track API response times
- Monitor server resources
- Setup alerts for issues

## 💰 Estimated Costs (Monthly)

- Heroku Free: $0 (limited)
- MongoDB Atlas Free: $0
- Vercel Free: $0
- Render Starter: $7
- Railway Basic: $10
- VPS: $5-50 depending on specs

## 🎯 Performance Tips

1. Enable gzip compression
2. Implement caching headers
3. Optimize database queries
4. Use CDN for static files
5. Monitor and optimize slow endpoints
