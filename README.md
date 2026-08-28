# 🎯 GovNexa AI - Government Exam Intelligence Platform

An advanced web application providing comprehensive A-Z details about all Indian government exams with AI-powered insights. Features simple email/password authentication with an intelligent, user-friendly interface.

**GovNexa AI** - Your One-Stop Solution for All Government Exam Information!

## 🌟 Key Features

### 🔐 Authentication
- **Simple Email/Password Login** - Quick and secure registration
- **JWT Token Security** - Secure API communication
- **Password Hashing** - bcryptjs encryption for safety
- **Persistent Sessions** - Remember login across sessions

### 📚 Comprehensive Exam Database
- **100+ Government Exams** - UPSC, SSC, Railway, Banking, Defence, Medical, PSU, and more
- **A-Z Details** - Complete information for each exam
- **Real-time Search** - Find exams instantly
- **Smart Filtering** - Filter by 13+ categories

### 🎓 Exam Categories
- **UPSC** - Civil Services, Forest Service, Engineering, Defence, Medical, Economic, Statistical Services
- **SSC** - CGL, CHSL, MTS, JE, CPO, Selection Post, Stenographer, Translator, etc.
- **Railway (RRB)** - NTPC, Group D, ALP, Technician, JE, SSE, Paramedical, Clerical, etc.
- **Banking** - IBPS PO, Specialist Officer, RRB Officer, SBI PO, SBI Associate, etc.
- **Insurance** - LIC AAO, LIC Assistant, NIACL AO, GIC, United India, Oriental Insurance
- **Defence** - AFCAT, Agniveer (Army/Navy/Air Force), Coast Guard, CISF, etc.
- **Security & Police** - CRPF, BSF, CISF, ITBP, SSB, Assam Rifles, IB, NIA, CBI
- **Medical** - AIIMS, JIPMER, ESIC, PGI, CGHS, Nursing Officer positions
- **Education & Science** - UGC NET, CSIR NET, CTET, KVS, NVS, DSSSB, ISRO, DRDO, BARC, CSIR
- **Postal & Central Depts** - India Post, EPFO, FCI, CWC, NHAI, Customs, Tax, etc.
- **PSU/Government Companies** - ONGC, NTPC, BHEL, HAL, BEL, GAIL, IOCL, HPCL, Coal India, Power Grid, etc.

### 📋 Detailed Information
Each exam includes:
- ✅ Eligibility criteria and qualifications
- ✅ Complete exam pattern and stages
- ✅ Syllabus overview
- ✅ Application deadlines
- ✅ Exam dates and result dates
- ✅ Salary and perks
- ✅ Number of positions/posts
- ✅ Difficulty level (Easy/Medium/Hard/Very Hard)
- ✅ Official website links

### 🎨 User Interface
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Beautiful Dashboard** - Modern gradient UI with smooth animations
- **Intuitive Navigation** - Easy-to-use search and filters
- **Modal Details** - Quick view exam details in popup
- **Pagination** - Browse 100+ exams easily
- **Loading States** - Visual feedback during data fetch

## 🛠️ Technology Stack

### Backend Architecture
| Component | Technology |
|-----------|-----------|
| Runtime | Node.js v14+ |
| Framework | Express.js 4.18+ |
| Database | MongoDB (Local/Cloud) |
| ODM | Mongoose 7.0+ |
| Authentication | JWT (JSON Web Tokens) |
| Password Security | bcryptjs |
| Input Validation | express-validator |
| API Protocol | REST |

### Frontend Technology
| Component | Technology |
|-----------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, Animations) |
| Logic | Vanilla JavaScript (ES6+) |
| HTTP Client | Fetch API |
| State Management | Browser LocalStorage |

## 📋 Prerequisites

### System Requirements
- Node.js v14.0.0 or higher
- npm v6.0.0 or higher
- MongoDB (v4.4+ locally or MongoDB Atlas cloud)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git for version control

### Installation Check
```bash
node --version    # Should show v14+
npm --version     # Should show v6+
```

## 🚀 Installation & Setup Guide

### Step 1️⃣: Clone the Repository
```bash
git clone https://github.com/dhakshatech-4/govnexa-ai.git
cd govnexa-ai
```

### Step 2️⃣: Install Dependencies
```bash
npm install
```

This installs:
- express, mongoose, bcryptjs, jsonwebtoken
- express-validator, dotenv, cors
- nodemon (for development)

### Step 3️⃣: Configure Environment

Create `.env` file:
```bash
cp .env.example .env
```

**Edit `.env` with your settings:**

**Option A: Local MongoDB**
```
MONGODB_URI=mongodb://localhost:27017/govnexa-ai
JWT_SECRET=your-super-secret-key-change-this
PORT=5000
NODE_ENV=development
```

**Option B: MongoDB Atlas Cloud** (Recommended)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/govnexa-ai
JWT_SECRET=your-super-secret-key-change-this
PORT=5000
NODE_ENV=development
```

[Get MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Step 4️⃣: Setup MongoDB

**If using local MongoDB:**
```bash
# Make sure MongoDB service is running
# On Windows: services.msc → find MongoDB
# On Mac: brew services start mongodb-community
# On Linux: sudo systemctl start mongod
```

**If using MongoDB Atlas:**
1. Create free account at mongodb.com/cloud/atlas
2. Create a cluster
3. Create database user
4. Get connection string
5. Replace in `.env`

### Step 5️⃣: Populate Database
```bash
node seed.js
```

Output should show:
```
MongoDB connected
Database seeded successfully with exam data
```

### Step 6️⃣: Start the Application

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

Expected output:
```
MongoDB connected
Server running on port 5000
```

### Step 7️⃣: Access the Application

Open your browser:
```
http://localhost:5000
```

## 📁 Project Structure

```
govnexa-ai/
│
├── 📄 server.js                    # Express app configuration
├── 📄 seed.js                      # Database initialization script
├── 📄 package.json                 # Project dependencies
├── 📄 .env.example                 # Environment template
├── 📄 README.md                    # Documentation
├── 📄 .gitignore                   # Git ignore rules
│
├── 📂 models/
│   ├── User.js                     # User schema (authentication)
│   └── Exam.js                     # Exam schema (100+ exams data)
│
├── 📂 routes/
│   ├── auth.js                     # POST /api/auth/register, /api/auth/login
│   └── exams.js                    # GET /api/exams, /api/exams/:id, /api/exams/category/:category
│
├── 📂 middleware/
│   └── auth.js                     # JWT verification middleware
│
└── 📂 public/
    └── index.html                  # Complete frontend (all-in-one file)
```

## 🔌 API Endpoints

### Authentication Routes

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Exam Routes

#### Get All Exams
```
GET /api/exams?page=1&limit=10&search=UPSC&category=UPSC

Response: {
  "exams": [
    {
      "_id": "...",
      "id": 1,
      "name": "UPSC Civil Services Examination",
      "category": "UPSC",
      "description": "...",
      "difficultyLevel": "Very Hard",
      "posts": 1000
    }
  ],
  "totalPages": 10,
  "currentPage": 1,
  "total": 100
}
```

#### Get Single Exam
```
GET /api/exams/:id

Response: {
  "_id": "...",
  "id": 1,
  "name": "UPSC Civil Services Examination",
  "category": "UPSC",
  "description": "...",
  "eligibility": "...",
  "examPattern": "...",
  ...
}
```

#### Get Exams by Category
```
GET /api/exams/category/SSC?page=1&limit=10

Response: {
  "exams": [...],
  "totalPages": 5,
  "currentPage": 1,
  "total": 50,
  "category": "SSC"
}
```

#### Health Check
```
GET /api/health

Response: {
  "status": "Server is running"
}
```

## 👤 Sample Test Credentials

### Option 1: Create Your Own Account
1. Go to http://localhost:5000
2. Click "Register here"
3. Fill in details:
   - Name: Your Name
   - Email: your-email@example.com
   - Password: (minimum 6 characters)

### Option 2: Test Account (After Seeding)
Create one manually after login with any email/password combination.

## 🎯 User Guide

### Getting Started
1. **Open Application** → http://localhost:5000
2. **Register Account** → Click "Register here"
3. **Fill Details** → Name, Email, Password (6+ characters)
4. **Login** → Use registered credentials

### Searching Exams
1. **Search by Name** → Type exam name in search box
2. **Filter by Category** → Select from dropdown (UPSC, SSC, etc.)
3. **Click Search** → View results
4. **Pagination** → Navigate through pages

### Viewing Exam Details
1. **Click on Exam Card** → Opens detailed view
2. **View Information** → Eligibility, Pattern, Dates, Salary
3. **Official Link** → Get official website URL
4. **Close Modal** → Click X button or outside modal

### Logout
- Click **Logout** button in top-right corner
- Redirects to login page

## 📊 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,           // Unique, case-insensitive
  password: String,        // Hashed with bcryptjs
  createdAt: Date,         // Auto-generated
  updatedAt: Date          // Auto-generated
}
```

### Exam Collection
```javascript
{
  _id: ObjectId,
  id: Number,              // Unique sequence number (1-500+)
  name: String,            // Exam name
  category: String,        // UPSC, SSC, Railway, etc.
  description: String,     // Brief description
  eligibility: String,     // Eligibility criteria
  examPattern: String,     // Paper structure
  syllabus: String,        // Subjects covered
  applicationDeadline: String,  // Deadline date
  examDate: String,        // Exam schedule
  resultDate: String,      // Result announcement
  salary: String,          // Expected salary
  posts: Number,           // Number of positions
  officialWebsite: String, // Exam conducting body URL
  difficultyLevel: String, // Easy, Medium, Hard, Very Hard
  createdAt: Date,         // Auto-generated
  updatedAt: Date          // Auto-generated
}
```

## 🔒 Security Implementation

### Password Security
- Passwords hashed with bcryptjs (10 salt rounds)
- Never stored in plain text
- Verified using secure comparison

### Authentication
- JWT tokens with 7-day expiration
- Tokens required for protected routes
- Secure token storage in localStorage

### Data Validation
- Frontend validation on all inputs
- Backend validation using express-validator
- Email format verification
- Password strength requirements (6+ characters)

### API Security
- CORS enabled for safe cross-origin requests
- Input sanitization
- Error messages don't expose sensitive info

## 🐛 Troubleshooting

### MongoDB Connection Issues
```
Error: connect ECONNREFUSED 127.0.0.1:27017

Solutions:
1. Start MongoDB service:
   - Windows: services.msc → MongoDB → Start
   - Mac: brew services start mongodb-community
   - Linux: sudo systemctl start mongod

2. Check MongoDB URI in .env file

3. If using MongoDB Atlas:
   - Verify connection string format
   - Check IP whitelist in Atlas
   - Verify username/password
```

### Port Already in Use
```
Error: listen EADDRINUSE :::5000

Solutions:
1. Change PORT in .env:
   PORT=3000

2. Or kill process on port 5000:
   - Windows: netstat -ano | findstr :5000
   - Mac/Linux: lsof -i :5000 | kill -9 <PID>
```

### Frontend Not Connecting
```
Error: Failed to load exams / Network error

Solutions:
1. Verify backend is running: npm run dev
2. Check browser console (F12) for errors
3. Verify API_URL in index.html matches backend URL
4. Check CORS configuration in server.js
```

### Login Issues
```
Error: Invalid credentials

Solutions:
1. Verify email exists in database
2. Check password is correct (case-sensitive)
3. Clear browser cache and localStorage
4. Check JWT_SECRET in .env is configured
```

### Token Expired
```
Error: No token provided / Invalid token

Solutions:
1. Logout and login again
2. Clear localStorage: localStorage.clear()
3. Refresh page and re-authenticate
```

## 📈 Future Enhancements

- **AI-Powered Recommendations** - Suggest exams based on qualification
- **Study Material Integration** - Links to free study resources
- **Mock Tests** - Practice tests for each exam
- **User Dashboard** - Track saved exams and progress
- **Notifications** - Email alerts for exam deadlines
- **Admin Panel** - Manage exam database
- **Analytics** - Popular exams, trending searches
- **Mobile App** - React Native / Flutter version
- **Multi-language Support** - Hindi, Tamil, Telugu, Kannada, etc.
- **Video Tutorials** - Exam preparation videos
- **Success Stories** - Student testimonials
- **Counseling Chat** - Career guidance chatbot

## 🤝 Contributing

Contributions welcome! Follow these steps:

1. **Fork Repository** - Click "Fork" on GitHub
2. **Clone Your Fork** - `git clone https://github.com/YOUR_USERNAME/govnexa-ai.git`
3. **Create Feature Branch** - `git checkout -b feature/AmazingFeature`
4. **Commit Changes** - `git commit -m "Add AmazingFeature"`
5. **Push to Branch** - `git push origin feature/AmazingFeature`
6. **Open Pull Request** - Submit on GitHub

## 📄 License

This project is licensed under the **ISC License** - Free to use for personal and educational purposes.

## 👨‍💻 Author

**Created with ❤️ by dhakshatech-4**

## 📞 Support

For issues or questions:
- Open GitHub Issues
- Check Troubleshooting section
- Review documentation

## 🔗 Important Links

- [UPSC](https://www.upsc.gov.in/)
- [SSC](https://www.ssc.nic.in/)
- [RRB](https://rrbonlinebookingportal.com/)
- [IBPS](https://www.ibps.in/)
- [SBI](https://www.sbi.co.in/)

---

**GovNexa AI - Making Government Exam Information Accessible! 🚀**
