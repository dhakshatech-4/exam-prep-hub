const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['UPSC', 'SSC', 'Railway', 'Banking', 'Insurance', 'Defence', 'Security', 'Medical', 'Education', 'Science', 'Postal', 'PSU', 'Central Department'],
    required: true
  },
  description: String,
  eligibility: String,
  examPattern: String,
  syllabus: String,
  applicationDeadline: String,
  examDate: String,
  resultDate: String,
  salary: String,
  posts: Number,
  officialWebsite: String,
  difficultyLevel: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard', 'Very Hard']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Exam', examSchema);
