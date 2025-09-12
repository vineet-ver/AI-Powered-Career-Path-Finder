export interface CareerPath {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  domains: string[];
  requiredSkills: string[];
  educationPath: string[];
  salaryRange: {
    entry: string;
    mid: string;
    senior: string;
  };
  growthOutlook: string;
  workEnvironment: string;
  typicalDay: string[];
  careerProgression: string[];
  topCompanies: string[];
  successStories: {
    name: string;
    position: string;
    story: string;
  }[];
}

export const careerPaths: CareerPath[] = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to help organizations make better decisions using statistical methods and machine learning.",
    longDescription: "Data Scientists combine domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data. They work with large datasets to identify trends, build predictive models, and provide actionable insights that drive business decisions.",
    domains: ["science", "technology", "mathematics"],
    requiredSkills: ["Python/R Programming", "Machine Learning", "Statistics", "SQL", "Data Visualization", "Critical Thinking"],
    educationPath: [
      "Bachelor's in Statistics, Computer Science, Mathematics, or related field",
      "Master's in Data Science or specialized courses",
      "Learn programming languages (Python, R, SQL)",
      "Build portfolio projects with real datasets",
      "Gain experience through internships or entry-level positions"
    ],
    salaryRange: {
      entry: "₹6-12 LPA",
      mid: "₹15-25 LPA", 
      senior: "₹30-50+ LPA"
    },
    growthOutlook: "22% growth expected by 2030",
    workEnvironment: "Office-based, remote-friendly, collaborative with technical teams",
    typicalDay: [
      "Collect and clean data from various sources",
      "Perform exploratory data analysis",
      "Build and test machine learning models",
      "Create visualizations and reports",
      "Present findings to stakeholders",
      "Collaborate with engineering teams"
    ],
    careerProgression: [
      "Junior Data Analyst",
      "Data Scientist",
      "Senior Data Scientist",
      "Lead Data Scientist",
      "Data Science Manager",
      "Chief Data Officer"
    ],
    topCompanies: ["Google", "Microsoft", "Amazon", "Netflix", "Flipkart", "Zomato", "PayTM", "Ola"],
    successStories: [
      {
        name: "Priya Sharma",
        position: "Principal Data Scientist at Microsoft",
        story: "Started as a software engineer, transitioned to data science through online courses and projects. Now leads ML initiatives for Microsoft's cloud services."
      }
    ]
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Design, develop, and maintain software applications and systems using various programming languages.",
    longDescription: "Software Engineers create solutions to real-world problems through code. They design software architecture, write clean and efficient code, test applications, and maintain existing systems. They work across various domains from web development to mobile apps to system software.",
    domains: ["technology", "engineering", "mathematics"],
    requiredSkills: ["Programming Languages", "Problem Solving", "System Design", "Testing", "Version Control", "Communication"],
    educationPath: [
      "Bachelor's in Computer Science, Software Engineering, or related field",
      "Learn multiple programming languages",
      "Build personal projects and contribute to open source",
      "Complete internships at tech companies",
      "Stay updated with latest technologies and frameworks"
    ],
    salaryRange: {
      entry: "₹4-10 LPA",
      mid: "₹12-25 LPA",
      senior: "₹25-60+ LPA"
    },
    growthOutlook: "25% growth expected by 2030",
    workEnvironment: "Tech companies, startups, remote work common",
    typicalDay: [
      "Write and review code",
      "Debug and fix software issues",
      "Participate in code reviews",
      "Collaborate with product managers and designers",
      "Plan and estimate project timelines",
      "Learn new technologies and tools"
    ],
    careerProgression: [
      "Junior Software Developer",
      "Software Engineer",
      "Senior Software Engineer",
      "Tech Lead",
      "Engineering Manager",
      "CTO/VP Engineering"
    ],
    topCompanies: ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Flipkart", "Swiggy", "BYJU'S"],
    successStories: [
      {
        name: "Rahul Agarwal",
        position: "Senior SDE at Amazon",
        story: "Self-taught programmer who started with small web projects, gradually built expertise in system design and now works on large-scale distributed systems."
      }
    ]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Design user-friendly interfaces and experiences for digital products, focusing on user needs and behaviors.",
    longDescription: "UX Designers research user needs, create wireframes and prototypes, and design intuitive interfaces that provide excellent user experiences. They bridge the gap between user needs and business goals, ensuring products are both usable and desirable.",
    domains: ["arts", "technology", "social"],
    requiredSkills: ["Design Thinking", "User Research", "Prototyping", "Wireframing", "Figma/Sketch", "Psychology"],
    educationPath: [
      "Bachelor's in Design, Psychology, HCI, or related field",
      "Learn UX design tools (Figma, Adobe XD, Sketch)",
      "Build a strong portfolio with case studies",
      "Take UX certification courses",
      "Gain experience through internships or freelance projects"
    ],
    salaryRange: {
      entry: "₹3-8 LPA",
      mid: "₹8-18 LPA",
      senior: "₹20-40+ LPA"
    },
    growthOutlook: "13% growth expected by 2030",
    workEnvironment: "Design studios, tech companies, agencies, remote-friendly",
    typicalDay: [
      "Conduct user research and interviews",
      "Create wireframes and prototypes",
      "Design user interfaces",
      "Collaborate with developers and product managers",
      "Test designs with users",
      "Iterate based on feedback"
    ],
    careerProgression: [
      "Junior UX Designer",
      "UX Designer",
      "Senior UX Designer",
      "Lead UX Designer",
      "UX Manager",
      "Head of Design"
    ],
    topCompanies: ["Google", "Meta", "Apple", "Netflix", "Airbnb", "Zomato", "Swiggy", "PhonePe"],
    successStories: [
      {
        name: "Anita Desai",
        position: "Lead UX Designer at Zomato",
        story: "Started in graphic design, transitioned to UX through bootcamps and self-learning. Now leads design for one of India's largest food delivery platforms."
      }
    ]
  },
  {
    id: "doctor",
    title: "Medical Doctor",
    description: "Diagnose, treat, and prevent illnesses and injuries to improve patient health and well-being.",
    longDescription: "Medical Doctors provide comprehensive healthcare services, from routine check-ups to complex surgical procedures. They combine scientific knowledge with compassionate care to diagnose conditions, develop treatment plans, and guide patients toward better health outcomes.",
    domains: ["healthcare", "science", "social"],
    requiredSkills: ["Medical Knowledge", "Diagnostic Skills", "Communication", "Empathy", "Critical Thinking", "Manual Dexterity"],
    educationPath: [
      "Complete 10+2 with Physics, Chemistry, Biology",
      "Clear NEET entrance exam",
      "Complete MBBS (5.5 years including internship)",
      "Optional: Pursue MD/MS specialization (3 years)",
      "Obtain medical license and registration",
      "Continuous medical education throughout career"
    ],
    salaryRange: {
      entry: "₹6-15 LPA",
      mid: "₹20-50 LPA",
      senior: "₹50-200+ LPA"
    },
    growthOutlook: "7% growth expected by 2030",
    workEnvironment: "Hospitals, clinics, private practice, research institutions",
    typicalDay: [
      "Examine and diagnose patients",
      "Review test results and medical histories",
      "Develop treatment plans",
      "Perform medical procedures",
      "Consult with other healthcare professionals",
      "Maintain detailed patient records"
    ],
    careerProgression: [
      "Medical Student",
      "Intern",
      "Resident",
      "General Practitioner/Specialist",
      "Senior Consultant",
      "Department Head/Medical Director"
    ],
    topCompanies: ["AIIMS", "Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Manipal Hospitals"],
    successStories: [
      {
        name: "Dr. Rajesh Kumar",
        position: "Cardiothoracic Surgeon at AIIMS",
        story: "From a small town in Bihar, overcame financial challenges to become one of India's leading heart surgeons, performing over 5000 successful surgeries."
      }
    ]
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    description: "Bridge the gap between business needs and technology solutions by analyzing processes and recommending improvements.",
    longDescription: "Business Analysts study business processes, identify inefficiencies, and recommend solutions to improve operations. They work closely with stakeholders to understand requirements and translate them into actionable plans for development teams.",
    domains: ["business", "technology", "social"],
    requiredSkills: ["Analytical Thinking", "Communication", "Project Management", "SQL", "Requirements Gathering", "Process Mapping"],
    educationPath: [
      "Bachelor's in Business, Economics, Engineering, or related field",
      "Learn business analysis methodologies",
      "Gain proficiency in tools like Excel, SQL, Tableau",
      "Pursue BA certification (CBAP, PMI-PBA)",
      "Build experience through internships or entry-level positions"
    ],
    salaryRange: {
      entry: "₹4-9 LPA",
      mid: "₹10-20 LPA",
      senior: "₹22-45 LPA"
    },
    growthOutlook: "11% growth expected by 2030",
    workEnvironment: "Corporate offices, consulting firms, remote-friendly",
    typicalDay: [
      "Gather and document business requirements",
      "Analyze current business processes",
      "Create process maps and flowcharts",
      "Facilitate meetings with stakeholders",
      "Write detailed specifications",
      "Test and validate solutions"
    ],
    careerProgression: [
      "Junior Business Analyst",
      "Business Analyst",
      "Senior Business Analyst",
      "Lead Business Analyst",
      "Business Analysis Manager",
      "VP of Business Operations"
    ],
    topCompanies: ["Accenture", "Deloitte", "McKinsey", "TCS", "Infosys", "Wipro", "Capgemini"],
    successStories: [
      {
        name: "Sneha Patel",
        position: "Senior BA at Deloitte",
        story: "Engineering graduate who discovered passion for business processes, now leads digital transformation projects for Fortune 500 companies."
      }
    ]
  },
  {
    id: "teacher",
    title: "Teacher/Educator",
    description: "Educate and inspire students by delivering curriculum, assessing progress, and fostering learning environments.",
    longDescription: "Teachers play a crucial role in shaping future generations by imparting knowledge, developing critical thinking skills, and nurturing personal growth. They create lesson plans, assess student performance, and adapt teaching methods to meet diverse learning needs.",
    domains: ["social", "arts", "science"],
    requiredSkills: ["Subject Expertise", "Communication", "Patience", "Classroom Management", "Curriculum Development", "Assessment"],
    educationPath: [
      "Bachelor's degree in subject area",
      "Complete Bachelor of Education (B.Ed)",
      "Clear Teacher Eligibility Test (TET)",
      "Gain experience through practice teaching",
      "Pursue specialized training or master's degree",
      "Continuous professional development"
    ],
    salaryRange: {
      entry: "₹2-6 LPA",
      mid: "₹5-12 LPA",
      senior: "₹10-25 LPA"
    },
    growthOutlook: "8% growth expected by 2030",
    workEnvironment: "Schools, colleges, universities, online platforms",
    typicalDay: [
      "Prepare and deliver lessons",
      "Assess student work and provide feedback",
      "Meet with parents and administrators",
      "Plan curriculum and activities",
      "Maintain classroom discipline",
      "Support struggling students"
    ],
    careerProgression: [
      "Student Teacher",
      "Teacher",
      "Senior Teacher",
      "Department Head",
      "Vice Principal",
      "Principal/Academic Director"
    ],
    topCompanies: ["Kendriya Vidyalaya", "DPS", "Ryan International", "BYJU'S", "Unacademy", "Vedantu"],
    successStories: [
      {
        name: "Meera Joshi",
        position: "Principal at DPS",
        story: "Started as a mathematics teacher, innovative teaching methods led to rapid promotion, now manages one of India's top schools with 2000+ students."
      }
    ]
  }
];

export const getAllCareerPaths = () => careerPaths;

export const getCareerPathById = (id: string) => {
  return careerPaths.find(career => career.id === id);
};

export const getCareerRecommendations = (domainScores: Record<string, number>): Array<{career: CareerPath, matchScore: number, reasoning: string[]}> => {
  const recommendations = careerPaths.map(career => {
    let totalScore = 0;
    let applicableDomains = 0;
    
    career.domains.forEach(domain => {
      if (domainScores[domain]) {
        totalScore += domainScores[domain];
        applicableDomains++;
      }
    });
    
    const matchScore = applicableDomains > 0 ? Math.round((totalScore / applicableDomains) * 2) : 0;
    
    const reasoning: string[] = [];
    
    // Generate reasoning based on top scoring domains
    const sortedDomains = Object.entries(domainScores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);
    
    sortedDomains.forEach(([domain, score]) => {
      if (career.domains.includes(domain) && score > 15) {
        switch(domain) {
          case 'science':
            reasoning.push('Strong scientific thinking and analytical skills');
            break;
          case 'technology':
            reasoning.push('Interest in technology and digital solutions');
            break;
          case 'engineering':
            reasoning.push('Problem-solving and building skills');
            break;
          case 'arts':
            reasoning.push('Creative expression and artistic abilities');
            break;
          case 'mathematics':
            reasoning.push('Strong mathematical and logical reasoning');
            break;
          case 'social':
            reasoning.push('People-oriented and communication skills');
            break;
          case 'business':
            reasoning.push('Leadership and business acumen');
            break;
          case 'healthcare':
            reasoning.push('Desire to help others and improve health');
            break;
        }
      }
    });
    
    if (reasoning.length === 0) {
      reasoning.push('General aptitude alignment with career requirements');
    }
    
    return {
      career,
      matchScore: Math.min(matchScore, 100),
      reasoning
    };
  });
  
  return recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);
};