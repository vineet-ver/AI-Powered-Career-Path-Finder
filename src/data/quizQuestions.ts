export interface QuizQuestion {
  id: string;
  text: string;
  domain: string;
  options: {
    id: string;
    text: string;
    impacts: {
      science: number;
      technology: number;
      engineering: number;
      arts: number;
      mathematics: number;
      social: number;
      business: number;
      healthcare: number;
    };
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    text: "Which activity do you find most engaging and exciting?",
    domain: "interests",
    options: [
      {
        id: "q1a",
        text: "Solving complex mathematical problems and equations",
        impacts: { science: 4, technology: 3, engineering: 4, arts: 0, mathematics: 5, social: 1, business: 2, healthcare: 2 }
      },
      {
        id: "q1b", 
        text: "Writing creative stories, poems, or designing artwork",
        impacts: { science: 1, technology: 2, engineering: 1, arts: 5, mathematics: 1, social: 3, business: 2, healthcare: 1 }
      },
      {
        id: "q1c",
        text: "Building or fixing things with your hands",
        impacts: { science: 2, technology: 4, engineering: 5, arts: 2, mathematics: 3, social: 1, business: 2, healthcare: 2 }
      },
      {
        id: "q1d",
        text: "Helping others solve their personal problems",
        impacts: { science: 1, technology: 1, engineering: 1, arts: 2, mathematics: 1, social: 5, business: 3, healthcare: 4 }
      }
    ]
  },
  {
    id: "q2",
    text: "In a group project, what role do you naturally take?",
    domain: "leadership",
    options: [
      {
        id: "q2a",
        text: "Lead the team and coordinate everyone's tasks",
        impacts: { science: 2, technology: 3, engineering: 3, arts: 2, mathematics: 2, social: 4, business: 5, healthcare: 3 }
      },
      {
        id: "q2b",
        text: "Research and analyze data to support decisions",
        impacts: { science: 5, technology: 4, engineering: 3, arts: 1, mathematics: 4, social: 2, business: 3, healthcare: 3 }
      },
      {
        id: "q2c",
        text: "Design and create visual materials or presentations",
        impacts: { science: 1, technology: 3, engineering: 2, arts: 5, mathematics: 1, social: 2, business: 3, healthcare: 1 }
      },
      {
        id: "q2d",
        text: "Ensure everyone feels included and heard",
        impacts: { science: 1, technology: 1, engineering: 1, arts: 3, mathematics: 1, social: 5, business: 3, healthcare: 4 }
      }
    ]
  },
  {
    id: "q3",
    text: "What type of work environment appeals to you most?",
    domain: "environment",
    options: [
      {
        id: "q3a",
        text: "A quiet laboratory or research facility",
        impacts: { science: 5, technology: 3, engineering: 3, arts: 1, mathematics: 4, social: 1, business: 1, healthcare: 3 }
      },
      {
        id: "q3b",
        text: "A dynamic creative studio with collaborative spaces",
        impacts: { science: 1, technology: 3, engineering: 2, arts: 5, mathematics: 1, social: 3, business: 3, healthcare: 1 }
      },
      {
        id: "q3c",
        text: "A fast-paced business office with meetings and deadlines",
        impacts: { science: 2, technology: 3, engineering: 2, arts: 2, mathematics: 2, social: 3, business: 5, healthcare: 2 }
      },
      {
        id: "q3d",
        text: "A hospital, clinic, or community service center",
        impacts: { science: 2, technology: 1, engineering: 1, arts: 1, mathematics: 1, social: 4, business: 2, healthcare: 5 }
      }
    ]
  },
  {
    id: "q4",
    text: "Which subject did you enjoy most in school?",
    domain: "academics",
    options: [
      {
        id: "q4a",
        text: "Physics, Chemistry, or Biology",
        impacts: { science: 5, technology: 3, engineering: 4, arts: 0, mathematics: 3, social: 1, business: 1, healthcare: 4 }
      },
      {
        id: "q4b",
        text: "Literature, History, or Languages",
        impacts: { science: 1, technology: 1, engineering: 1, arts: 5, mathematics: 1, social: 4, business: 3, healthcare: 2 }
      },
      {
        id: "q4c",
        text: "Mathematics or Computer Science",
        impacts: { science: 4, technology: 5, engineering: 4, arts: 1, mathematics: 5, social: 1, business: 3, healthcare: 2 }
      },
      {
        id: "q4d",
        text: "Psychology, Sociology, or Social Studies",
        impacts: { science: 2, technology: 1, engineering: 1, arts: 3, mathematics: 1, social: 5, business: 4, healthcare: 4 }
      }
    ]
  },
  {
    id: "q5",
    text: "How do you prefer to solve problems?",
    domain: "problem_solving",
    options: [
      {
        id: "q5a",
        text: "Through systematic analysis and logical reasoning",
        impacts: { science: 5, technology: 4, engineering: 4, arts: 1, mathematics: 5, social: 2, business: 3, healthcare: 3 }
      },
      {
        id: "q5b",
        text: "Through creative brainstorming and innovative thinking",
        impacts: { science: 2, technology: 4, engineering: 3, arts: 5, mathematics: 2, social: 3, business: 4, healthcare: 2 }
      },
      {
        id: "q5c",
        text: "Through collaboration and team discussions",
        impacts: { science: 2, technology: 2, engineering: 2, arts: 3, mathematics: 2, social: 5, business: 4, healthcare: 4 }
      },
      {
        id: "q5d",
        text: "Through hands-on experimentation and trial",
        impacts: { science: 4, technology: 4, engineering: 5, arts: 3, mathematics: 3, social: 2, business: 2, healthcare: 3 }
      }
    ]
  },
  {
    id: "q6",
    text: "What motivates you most in your work?",
    domain: "motivation",
    options: [
      {
        id: "q6a",
        text: "Discovering new knowledge and understanding",
        impacts: { science: 5, technology: 3, engineering: 3, arts: 2, mathematics: 4, social: 2, business: 2, healthcare: 3 }
      },
      {
        id: "q6b",
        text: "Creating something beautiful or meaningful",
        impacts: { science: 1, technology: 2, engineering: 2, arts: 5, mathematics: 1, social: 3, business: 2, healthcare: 3 }
      },
      {
        id: "q6c",
        text: "Achieving financial success and recognition",
        impacts: { science: 2, technology: 3, engineering: 3, arts: 2, mathematics: 2, social: 2, business: 5, healthcare: 2 }
      },
      {
        id: "q6d",
        text: "Making a positive impact on people's lives",
        impacts: { science: 2, technology: 2, engineering: 2, arts: 3, mathematics: 1, social: 5, business: 3, healthcare: 5 }
      }
    ]
  },
  {
    id: "q7",
    text: "Which activity would you choose for a weekend hobby?",
    domain: "hobbies",
    options: [
      {
        id: "q7a",
        text: "Reading scientific journals or documentaries",
        impacts: { science: 5, technology: 3, engineering: 2, arts: 1, mathematics: 3, social: 1, business: 1, healthcare: 3 }
      },
      {
        id: "q7b",
        text: "Painting, photography, or music composition",
        impacts: { science: 1, technology: 2, engineering: 1, arts: 5, mathematics: 1, social: 2, business: 1, healthcare: 1 }
      },
      {
        id: "q7c",
        text: "Building model airplanes or coding personal projects",
        impacts: { science: 3, technology: 5, engineering: 5, arts: 2, mathematics: 4, social: 1, business: 2, healthcare: 1 }
      },
      {
        id: "q7d",
        text: "Volunteering at local community organizations",
        impacts: { science: 1, technology: 1, engineering: 1, arts: 2, mathematics: 1, social: 5, business: 2, healthcare: 5 }
      }
    ]
  },
  {
    id: "q8",
    text: "How do you handle stress and pressure?",
    domain: "stress_management",
    options: [
      {
        id: "q8a",
        text: "Break down problems into smaller, manageable parts",
        impacts: { science: 4, technology: 4, engineering: 4, arts: 2, mathematics: 4, social: 3, business: 4, healthcare: 3 }
      },
      {
        id: "q8b",
        text: "Take creative breaks and find inspiration elsewhere",
        impacts: { science: 2, technology: 2, engineering: 2, arts: 5, mathematics: 1, social: 3, business: 2, healthcare: 2 }
      },
      {
        id: "q8c",
        text: "Talk through issues with friends or colleagues",
        impacts: { science: 2, technology: 2, engineering: 2, arts: 3, mathematics: 2, social: 5, business: 4, healthcare: 4 }
      },
      {
        id: "q8d",
        text: "Focus on the positive impact of my work",
        impacts: { science: 3, technology: 2, engineering: 2, arts: 3, mathematics: 2, social: 4, business: 3, healthcare: 5 }
      }
    ]
  },
  {
    id: "q9",
    text: "What type of communication do you prefer?",
    domain: "communication",
    options: [
      {
        id: "q9a",
        text: "Written reports with detailed data and analysis",
        impacts: { science: 5, technology: 3, engineering: 3, arts: 2, mathematics: 4, social: 2, business: 3, healthcare: 3 }
      },
      {
        id: "q9b",
        text: "Visual presentations with images and storytelling",
        impacts: { science: 1, technology: 3, engineering: 2, arts: 5, mathematics: 1, social: 3, business: 4, healthcare: 2 }
      },
      {
        id: "q9c",
        text: "Face-to-face meetings and discussions",
        impacts: { science: 2, technology: 2, engineering: 2, arts: 3, mathematics: 2, social: 5, business: 5, healthcare: 4 }
      },
      {
        id: "q9d",
        text: "One-on-one conversations to understand individual needs",
        impacts: { science: 2, technology: 1, engineering: 1, arts: 3, mathematics: 1, social: 5, business: 3, healthcare: 5 }
      }
    ]
  },
  {
    id: "q10",
    text: "Which achievement would make you most proud?",
    domain: "achievements",
    options: [
      {
        id: "q10a",
        text: "Publishing groundbreaking research that advances human knowledge",
        impacts: { science: 5, technology: 3, engineering: 3, arts: 1, mathematics: 4, social: 2, business: 2, healthcare: 3 }
      },
      {
        id: "q10b",
        text: "Creating an artistic work that inspires and moves people",
        impacts: { science: 1, technology: 2, engineering: 1, arts: 5, mathematics: 1, social: 4, business: 2, healthcare: 2 }
      },
      {
        id: "q10c",
        text: "Building a successful company that creates jobs",
        impacts: { science: 2, technology: 4, engineering: 3, arts: 2, mathematics: 3, social: 3, business: 5, healthcare: 2 }
      },
      {
        id: "q10d",
        text: "Saving someone's life or significantly improving their health",
        impacts: { science: 3, technology: 2, engineering: 2, arts: 2, mathematics: 2, social: 4, business: 2, healthcare: 5 }
      }
    ]
  },
  {
    id: "q11",
    text: "How do you prefer to learn new skills?",
    domain: "learning_style",
    options: [
      {
        id: "q11a",
        text: "Reading textbooks and academic papers thoroughly",
        impacts: { science: 5, technology: 3, engineering: 3, arts: 2, mathematics: 4, social: 2, business: 2, healthcare: 3 }
      },
      {
        id: "q11b",
        text: "Watching videos and visual demonstrations",
        impacts: { science: 2, technology: 4, engineering: 3, arts: 4, mathematics: 2, social: 3, business: 3, healthcare: 3 }
      },
      {
        id: "q11c",
        text: "Hands-on practice and learning by doing",
        impacts: { science: 3, technology: 4, engineering: 5, arts: 3, mathematics: 3, social: 3, business: 4, healthcare: 4 }
      },
      {
        id: "q11d",
        text: "Group discussions and collaborative learning",
        impacts: { science: 2, technology: 2, engineering: 2, arts: 3, mathematics: 2, social: 5, business: 4, healthcare: 4 }
      }
    ]
  },
  {
    id: "q12",
    text: "What kind of impact do you want to have on the world?",
    domain: "impact",
    options: [
      {
        id: "q12a",
        text: "Advance scientific understanding and technological progress",
        impacts: { science: 5, technology: 5, engineering: 4, arts: 1, mathematics: 4, social: 2, business: 3, healthcare: 3 }
      },
      {
        id: "q12b",
        text: "Inspire and enrich people's lives through creative expression",
        impacts: { science: 1, technology: 2, engineering: 1, arts: 5, mathematics: 1, social: 4, business: 2, healthcare: 2 }
      },
      {
        id: "q12c",
        text: "Create economic opportunities and drive innovation",
        impacts: { science: 2, technology: 4, engineering: 3, arts: 2, mathematics: 3, social: 3, business: 5, healthcare: 2 }
      },
      {
        id: "q12d",
        text: "Improve health outcomes and social justice",
        impacts: { science: 2, technology: 2, engineering: 2, arts: 3, mathematics: 1, social: 5, business: 3, healthcare: 5 }
      }
    ]
  },
  {
    id: "q13",
    text: "Which work schedule appeals to you most?",
    domain: "work_style",
    options: [
      {
        id: "q13a",
        text: "Flexible hours to pursue deep research and analysis",
        impacts: { science: 5, technology: 3, engineering: 2, arts: 3, mathematics: 4, social: 2, business: 2, healthcare: 2 }
      },
      {
        id: "q13b",
        text: "Project-based work with creative bursts and downtime",
        impacts: { science: 2, technology: 3, engineering: 2, arts: 5, mathematics: 1, social: 2, business: 3, healthcare: 1 }
      },
      {
        id: "q13c",
        text: "Regular business hours with structured meetings",
        impacts: { science: 2, technology: 3, engineering: 3, arts: 2, mathematics: 2, social: 3, business: 5, healthcare: 3 }
      },
      {
        id: "q13d",
        text: "Varied shifts to help people when they need it most",
        impacts: { science: 1, technology: 1, engineering: 1, arts: 2, mathematics: 1, social: 4, business: 2, healthcare: 5 }
      }
    ]
  },
  {
    id: "q14",
    text: "What size organization would you prefer to work for?",
    domain: "organization_size",
    options: [
      {
        id: "q14a",
        text: "A small research lab or startup with close collaboration",
        impacts: { science: 4, technology: 5, engineering: 4, arts: 4, mathematics: 3, social: 3, business: 4, healthcare: 3 }
      },
      {
        id: "q14b",
        text: "A medium-sized company with room for creativity",
        impacts: { science: 3, technology: 4, engineering: 3, arts: 4, mathematics: 3, social: 3, business: 4, healthcare: 3 }
      },
      {
        id: "q14c",
        text: "A large corporation with extensive resources",
        impacts: { science: 3, technology: 3, engineering: 4, arts: 2, mathematics: 3, social: 2, business: 5, healthcare: 4 }
      },
      {
        id: "q14d",
        text: "A non-profit or government organization serving the public",
        impacts: { science: 3, technology: 2, engineering: 2, arts: 3, mathematics: 2, social: 5, business: 2, healthcare: 5 }
      }
    ]
  },
  {
    id: "q15",
    text: "Which technology trend excites you most?",
    domain: "technology_interest",
    options: [
      {
        id: "q15a",
        text: "Artificial Intelligence and Machine Learning",
        impacts: { science: 4, technology: 5, engineering: 4, arts: 2, mathematics: 5, social: 2, business: 4, healthcare: 3 }
      },
      {
        id: "q15b",
        text: "Virtual and Augmented Reality for immersive experiences",
        impacts: { science: 2, technology: 5, engineering: 4, arts: 5, mathematics: 3, social: 3, business: 4, healthcare: 2 }
      },
      {
        id: "q15c",
        text: "Blockchain and Cryptocurrency for financial innovation",
        impacts: { science: 3, technology: 4, engineering: 3, arts: 1, mathematics: 4, social: 2, business: 5, healthcare: 1 }
      },
      {
        id: "q15d",
        text: "Biotechnology and Medical Devices for health improvements",
        impacts: { science: 5, technology: 4, engineering: 4, arts: 1, mathematics: 3, social: 3, business: 3, healthcare: 5 }
      }
    ]
  }
];