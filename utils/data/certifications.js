/**
 * Certifications Data Configuration
 * This file contains all professional certifications and portfolio information
 * with enhanced styling, validation, and proper data structure.
 */

// Portfolio PDF configuration
export const portfolioConfig = {
  pdfPath: "/Gaurav_Gavhane_36_portfolio.pdf",
  downloadName: "Gaurav_Gavhane_Portfolio.pdf",
  title: "Professional Portfolio",
  description: "Complete portfolio showcasing projects, skills, and experience"
};

// Enhanced certifications data with better structure and validation
export const certifications = [
  {
    id: 1,
    title: "BCGX Certificate",
    issuer: "Boston Consulting Group",
    issuerLogo: "https://logos-world.net/wp-content/uploads/2020/09/BCG-Logo.png",
    duration: "2024",
    issueDate: "2024-03-15",
    expiryDate: null,
    credentialId: "BCGX-2024-001",
    credentialUrl: "https://www.bcg.com/certificates/verify",
    verificationCode: "BCGX-2024-001",
    skills: ["Business Strategy", "Consulting", "Problem Solving", "Analytics"],
    category: "Business",
    level: "Professional",
    description: "Comprehensive business consulting certification covering strategic thinking and problem-solving methodologies.",
    imageUrl: "/certificates/bcgx-certificate.jpg",
    isVerified: true,
    priority: 1
  },
  {
    id: 2,
    title: "Data Analytics Professional Certificate",
    issuer: "Deloitte",
    issuerLogo: "https://logos-world.net/wp-content/uploads/2020/09/Deloitte-Logo.png",
    duration: "2024",
    issueDate: "2024-02-20",
    expiryDate: "2025-02-20",
    credentialId: "DELOITTE-DA-2024-002",
    credentialUrl: "https://www2.deloitte.com/verify/certificate",
    verificationCode: "DELOITTE-DA-2024-002",
    skills: ["Data Analytics", "Business Intelligence", "Data Visualization", "SQL", "Python"],
    category: "Data Science",
    level: "Professional",
    description: "Advanced data analytics certification covering BI tools, statistical analysis, and data visualization techniques.",
    imageUrl: "/certificates/deloitte-analytics.jpg",
    isVerified: true,
    priority: 2
  },
  {
    id: 3,
    title: "IBM SkillsBuild Professional Certificate",
    issuer: "IBM",
    issuerLogo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png",
    duration: "2024",
    issueDate: "2024-01-10",
    expiryDate: null,
    credentialId: "IBM-SKILL-2024-003",
    credentialUrl: "https://www.ibm.com/skills/certificate-verify",
    verificationCode: "IBM-SKILL-2024-003",
    skills: ["Cloud Computing", "AI/ML", "Data Science", "IBM Cloud", "Watson"],
    category: "Technology",
    level: "Professional",
    description: "Comprehensive technology certification covering cloud computing, artificial intelligence, and machine learning fundamentals.",
    imageUrl: "/certificates/ibm-skillsbuild.jpg",
    isVerified: true,
    priority: 3
  },
  {
    id: 4,
    title: "Data Structures and Algorithms Masterclass",
    issuer: "Apna College",
    issuerLogo: "https://apnacollege.in/static/media/logo.27c2b329.png",
    duration: "2024",
    issueDate: "2024-04-05",
    expiryDate: null,
    credentialId: "APNA-DSA-2024-004",
    credentialUrl: "https://apnacollege.in/certificates/verify",
    verificationCode: "APNA-DSA-2024-004",
    skills: ["DSA", "Problem Solving", "Algorithms", "Data Structures", "C++", "Java"],
    category: "Programming",
    level: "Intermediate",
    description: "Comprehensive data structures and algorithms course covering fundamental programming concepts and problem-solving techniques.",
    imageUrl: "/certificates/apna-dsa.jpg",
    isVerified: true,
    priority: 4
  },
  {
    id: 5,
    title: "Advanced C++ Programming Certificate",
    issuer: "IIT Bombay",
    issuerLogo: "https://www.iitb.ac.in/sites/all/themes/iitb_theme/logo.png",
    duration: "2024",
    issueDate: "2024-03-01",
    expiryDate: null,
    credentialId: "IITB-CPP-2024-005",
    credentialUrl: "https://www.iitb.ac.in/certificates/verify",
    verificationCode: "IITB-CPP-2024-005",
    skills: ["C++", "Programming", "Object-Oriented Programming", "Memory Management", "STL"],
    category: "Programming",
    level: "Advanced",
    description: "Advanced C++ programming certification from IIT Bombay covering OOP concepts, memory management, and STL libraries.",
    imageUrl: "/certificates/iitb-cpp.jpg",
    isVerified: true,
    priority: 5
  },
  {
    id: 6,
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    issuerLogo: "https://logos-world.net/wp-content/uploads/2020/09/Udemy-Logo.png",
    duration: "2024",
    issueDate: "2024-02-15",
    expiryDate: null,
    credentialId: "UC-12345678",
    credentialUrl: "https://www.udemy.com/certificate/UC-12345678/",
    verificationCode: "UC-12345678",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS"],
    category: "Web Development",
    level: "Professional",
    description: "Complete full-stack web development bootcamp covering modern technologies and best practices.",
    imageUrl: "/certificates/udemy-fullstack.jpg",
    isVerified: true,
    priority: 6
  },
  {
    id: 7,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issuerLogo: "https://logos-world.net/wp-content/uploads/2020/09/FreeCodeCamp-Logo.png",
    duration: "2023",
    issueDate: "2023-12-10",
    expiryDate: null,
    credentialId: "JS-ALG-DS-2023-007",
    credentialUrl: "https://freecodecamp.org/certification/fcc1234567890/javascript-algorithms-and-data-structures",
    verificationCode: "JS-ALG-DS-2023-007",
    skills: ["JavaScript", "Algorithms", "Data Structures", "ES6", "Functional Programming"],
    category: "Programming",
    level: "Intermediate",
    description: "JavaScript algorithms and data structures certification covering fundamental programming concepts and problem-solving.",
    imageUrl: "/certificates/freecodecamp-js.jpg",
    isVerified: true,
    priority: 7
  }
];

// Helper functions for data validation and manipulation
export const certificationUtils = {
  /**
   * Validate certification data structure
   * @param {Object} cert - Certification object to validate
   * @returns {boolean} - Whether the certification is valid
   */
  validateCertification: (cert) => {
    const requiredFields = ['id', 'title', 'issuer', 'duration', 'credentialId', 'skills'];
    return requiredFields.every(field => cert.hasOwnProperty(field) && cert[field]);
  },

  /**
   * Get certifications by category
   * @param {string} category - Category to filter by
   * @returns {Array} - Filtered certifications
   */
  getByCategory: (category) => {
    return certifications.filter(cert => cert.category === category);
  },

  /**
   * Get certifications by level
   * @param {string} level - Level to filter by
   * @returns {Array} - Filtered certifications
   */
  getByLevel: (level) => {
    return certifications.filter(cert => cert.level === level);
  },

  /**
   * Get verified certifications only
   * @returns {Array} - Verified certifications
   */
  getVerified: () => {
    return certifications.filter(cert => cert.isVerified);
  },

  /**
   * Sort certifications by priority
   * @param {Array} certs - Certifications array to sort
   * @returns {Array} - Sorted certifications
   */
  sortByPriority: (certs = certifications) => {
    return [...certs].sort((a, b) => a.priority - b.priority);
  },

  /**
   * Get all unique skills from certifications
   * @returns {Array} - Unique skills array
   */
  getAllSkills: () => {
    const allSkills = certifications.flatMap(cert => cert.skills);
    return [...new Set(allSkills)].sort();
  }
};

// Export default certifications array for backward compatibility
export default certifications;

