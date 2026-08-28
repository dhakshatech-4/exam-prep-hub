const mongoose = require('mongoose');
const Exam = require('../models/Exam');

const examsData = [
  // UPSC (1-15)
  { id: 1, name: 'UPSC Civil Services Examination', category: 'UPSC', description: 'Premier exam for IAS, IFS, IPS officers', difficultyLevel: 'Very Hard', posts: 1000, officialWebsite: 'www.upsc.gov.in' },
  { id: 2, name: 'UPSC Indian Forest Service Examination', category: 'UPSC', description: 'For Indian Forest Service officers', difficultyLevel: 'Very Hard', posts: 150, officialWebsite: 'www.upsc.gov.in' },
  { id: 3, name: 'UPSC Engineering Services Examination', category: 'UPSC', description: 'For engineering services', difficultyLevel: 'Hard', posts: 250, officialWebsite: 'www.upsc.gov.in' },
  { id: 4, name: 'UPSC Combined Defence Services Examination', category: 'UPSC', description: 'For defence services commission', difficultyLevel: 'Hard', posts: 400, officialWebsite: 'www.upsc.gov.in' },
  { id: 5, name: 'UPSC National Defence Academy and Naval Academy Examination', category: 'UPSC', description: 'For defence academy entry', difficultyLevel: 'Hard', posts: 600, officialWebsite: 'www.upsc.gov.in' },
  { id: 6, name: 'UPSC Combined Medical Services Examination', category: 'UPSC', description: 'For medical services', difficultyLevel: 'Very Hard', posts: 200, officialWebsite: 'www.upsc.gov.in' },
  { id: 7, name: 'UPSC Central Armed Police Forces Examination', category: 'UPSC', description: 'For armed police forces', difficultyLevel: 'Hard', posts: 500, officialWebsite: 'www.upsc.gov.in' },
  { id: 8, name: 'UPSC Combined Geo-Scientist Examination', category: 'UPSC', description: 'For geological sciences', difficultyLevel: 'Hard', posts: 100, officialWebsite: 'www.upsc.gov.in' },
  { id: 9, name: 'UPSC Indian Economic Service Examination', category: 'UPSC', description: 'For economics services', difficultyLevel: 'Very Hard', posts: 50, officialWebsite: 'www.upsc.gov.in' },
  { id: 10, name: 'UPSC Indian Statistical Service Examination', category: 'UPSC', description: 'For statistical services', difficultyLevel: 'Very Hard', posts: 40, officialWebsite: 'www.upsc.gov.in' },

  // SSC (16-50)
  { id: 16, name: 'SSC Combined Graduate Level Examination', category: 'SSC', description: 'Graduate level competitive exam', difficultyLevel: 'Medium', posts: 5000, officialWebsite: 'www.ssc.nic.in' },
  { id: 17, name: 'SSC Combined Higher Secondary Level Examination', category: 'SSC', description: 'Higher secondary level exam', difficultyLevel: 'Medium', posts: 10000, officialWebsite: 'www.ssc.nic.in' },
  { id: 18, name: 'SSC Multi-Tasking Staff Examination', category: 'SSC', description: 'Multi-tasking support staff', difficultyLevel: 'Easy', posts: 8000, officialWebsite: 'www.ssc.nic.in' },
  { id: 19, name: 'SSC Junior Engineer Examination', category: 'SSC', description: 'Junior engineer positions', difficultyLevel: 'Hard', posts: 1000, officialWebsite: 'www.ssc.nic.in' },
  { id: 20, name: 'SSC Central Police Organisation Examination', category: 'SSC', description: 'Central police recruitment', difficultyLevel: 'Medium', posts: 2000, officialWebsite: 'www.ssc.nic.in' },

  // Railway (51-80)
  { id: 51, name: 'RRB NTPC Graduate Examination', category: 'Railway', description: 'Non-technical graduate posts', difficultyLevel: 'Medium', posts: 35000, officialWebsite: 'www.rrbonlinebookingportal.com' },
  { id: 52, name: 'RRB NTPC Undergraduate Examination', category: 'Railway', description: 'Non-technical undergraduate posts', difficultyLevel: 'Medium', posts: 25000, officialWebsite: 'www.rrbonlinebookingportal.com' },
  { id: 53, name: 'RRB Group D Examination', category: 'Railway', description: 'Group D positions', difficultyLevel: 'Easy', posts: 40000, officialWebsite: 'www.rrbonlinebookingportal.com' },
  { id: 54, name: 'RRB Assistant Loco Pilot Examination', category: 'Railway', description: 'Locomotive pilot roles', difficultyLevel: 'Medium', posts: 5000, officialWebsite: 'www.rrbonlinebookingportal.com' },
  { id: 55, name: 'RRB Technician Examination', category: 'Railway', description: 'Technical positions', difficultyLevel: 'Hard', posts: 3000, officialWebsite: 'www.rrbonlinebookingportal.com' },

  // Banking (101-120)
  { id: 101, name: 'IBPS Probationary Officer Examination', category: 'Banking', description: 'Bank officer recruitment', difficultyLevel: 'Medium', posts: 5000, officialWebsite: 'www.ibps.in' },
  { id: 102, name: 'IBPS Specialist Officer Examination', category: 'Banking', description: 'Specialist banking roles', difficultyLevel: 'Hard', posts: 2000, officialWebsite: 'www.ibps.in' },
  { id: 103, name: 'IBPS RRB Officer Scale I Examination', category: 'Banking', description: 'Regional rural bank officers', difficultyLevel: 'Medium', posts: 3000, officialWebsite: 'www.ibps.in' },
  { id: 104, name: 'SBI Probationary Officer Examination', category: 'Banking', description: 'SBI bank officer recruitment', difficultyLevel: 'Medium', posts: 2000, officialWebsite: 'www.sbi.co.in' },
  { id: 105, name: 'SBI Junior Associate Examination', category: 'Banking', description: 'SBI junior associate roles', difficultyLevel: 'Easy', posts: 5000, officialWebsite: 'www.sbi.co.in' },

  // Insurance (121-130)
  { id: 121, name: 'LIC Assistant Administrative Officer Examination', category: 'Insurance', description: 'LIC officer recruitment', difficultyLevel: 'Hard', posts: 1000, officialWebsite: 'www.licindia.in' },
  { id: 122, name: 'LIC Assistant Examination', category: 'Insurance', description: 'LIC assistant positions', difficultyLevel: 'Medium', posts: 2000, officialWebsite: 'www.licindia.in' },
  { id: 123, name: 'NIACL Administrative Officer Examination', category: 'Insurance', description: 'New India Assurance admin roles', difficultyLevel: 'Hard', posts: 500, officialWebsite: 'www.niacl.in' },
  { id: 124, name: 'NIACL Assistant Examination', category: 'Insurance', description: 'NIACL assistant positions', difficultyLevel: 'Medium', posts: 1000, officialWebsite: 'www.niacl.in' },

  // Defence (201-250)
  { id: 201, name: 'AFCAT Examination', category: 'Defence', description: 'Air Force officer recruitment', difficultyLevel: 'Hard', posts: 500, officialWebsite: 'www.afcat.cdac.in' },
  { id: 202, name: 'Indian Army Agniveer Recruitment Examination', category: 'Defence', description: 'Army Agniveer recruitment', difficultyLevel: 'Medium', posts: 50000, officialWebsite: 'joinindianarmy.nic.in' },
  { id: 203, name: 'Indian Navy Agniveer SSR Examination', category: 'Defence', description: 'Navy Agniveer sailor recruitment', difficultyLevel: 'Medium', posts: 3000, officialWebsite: 'www.joinindiannavy.gov.in' },
  { id: 204, name: 'Indian Air Force Agniveervayu Examination', category: 'Defence', description: 'Air Force Agniveer recruitment', difficultyLevel: 'Medium', posts: 5000, officialWebsite: 'www.indianairforce.nic.in' },
  { id: 205, name: 'Indian Coast Guard Navik Examination', category: 'Defence', description: 'Coast guard sailor recruitment', difficultyLevel: 'Easy', posts: 2000, officialWebsite: 'www.joinindiancoastguard.gov.in' },

  // Medical (301-320)
  { id: 301, name: 'AIIMS NORCET Examination', category: 'Medical', description: 'AIIMS nursing officer recruitment', difficultyLevel: 'Hard', posts: 500, officialWebsite: 'www.aiimsexams.ac.in' },
  { id: 302, name: 'JIPMER Recruitment Examination', category: 'Medical', description: 'JIPMER medical recruitment', difficultyLevel: 'Hard', posts: 300, officialWebsite: 'www.jipmer.edu.in' },
  { id: 303, name: 'ESIC Nursing Officer Examination', category: 'Medical', description: 'ESIC nursing positions', difficultyLevel: 'Hard', posts: 400, officialWebsite: 'www.esic.nic.in' },

  // PSU (401-450)
  { id: 401, name: 'ONGC Graduate Trainee Recruitment Examination', category: 'PSU', description: 'Oil and gas company recruitment', difficultyLevel: 'Hard', posts: 1000, officialWebsite: 'www.ongcindia.com' },
  { id: 402, name: 'NTPC Engineering Executive Trainee Examination', category: 'PSU', description: 'Power company engineer recruitment', difficultyLevel: 'Hard', posts: 500, officialWebsite: 'www.ntpccareers.net' },
  { id: 403, name: 'BHEL Engineer Trainee Examination', category: 'PSU', description: 'BHEL engineer recruitment', difficultyLevel: 'Hard', posts: 400, officialWebsite: 'www.bhel.in' },
  { id: 404, name: 'HAL Management Trainee Examination', category: 'PSU', description: 'Hindustan Aeronautics recruitment', difficultyLevel: 'Hard', posts: 300, officialWebsite: 'www.halcareer.com' },
  { id: 405, name: 'SAIL Management Trainee Examination', category: 'PSU', description: 'Steel Authority recruitment', difficultyLevel: 'Hard', posts: 600, officialWebsite: 'www.sailcareers.com' },

  // Central Department - NIC (451-460)
  { id: 451, name: 'NIC Recruitment Examination', category: 'Central Department', description: 'National Informatics Centre IT and Administrative positions', difficultyLevel: 'Hard', posts: 250, officialWebsite: 'www.nic.in' },
  { id: 452, name: 'NIC Scientist/Engineer Examination', category: 'Central Department', description: 'NIC technical and engineering roles', difficultyLevel: 'Hard', posts: 150, officialWebsite: 'www.nic.in' },
  { id: 453, name: 'NIC Administrator Examination', category: 'Central Department', description: 'NIC administrative and support positions', difficultyLevel: 'Medium', posts: 200, officialWebsite: 'www.nic.in' }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/exam-prep-hub');
    
    // Clear existing data
    await Exam.deleteMany({});
    
    // Insert new data
    await Exam.insertMany(examsData);
    
    console.log('Database seeded successfully with exam data');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
