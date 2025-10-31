/**
 * Certifications Data Configuration
 * This file contains all professional certifications and portfolio information
 * with enhanced styling, validation, and proper data structure.
 */

// Portfolio PDF configuration
// export const portfolioConfig = {
//   pdfPath: "/Gaurav_Gavhane_36_portfolio.pdf",
//   downloadName: "Gaurav_Gavhane_Portfolio.pdf",
//   title: "Professional Portfolio",
//   description: "Complete portfolio showcasing projects, skills, and experience"
// };

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
    credentialUrl: "https://drive.google.com/drive/folders/1R5cpASH1puLbenSAg-5McTK_cxP4p_Jl",
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
    title: "Deloitte Professional Certificate",
    issuer: "Deloitte",
    issuerLogo: "https://logos-world.net/wp-content/uploads/2020/09/Deloitte-Logo.png",
    duration: "2024",
    issueDate: "2024-02-20",
    expiryDate: "2025-02-20",
    credentialId: "DELOITTE-2024-002",
    credentialUrl: "https://www.linkedin.com/in/gaurav-gavhane-87274b279/details/certifications/1750503114915/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEPrdxYBUuvkyluwLqmx3tAaVA80dQrmU9s",
    verificationCode: "DELOITTE-2024-002",
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
    credentialUrl: "https://skills.yourlearning.ibm.com/credential/CREDLY-29bdaec3-af04-458e-a70e-2e6fa78c5dd5",
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
    credentialUrl: "https://www.linkedin.com/in/gaurav-gavhane-87274b279",
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
    credentialUrl: "https://www.linkedin.com/in/gaurav-gavhane-87274b279",
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
    title: "Application Development in Java",
    issuer: "Red Hat",
    issuerLogo: "https://1000logos.net/wp-content/uploads/2021/11/Red-Hat-logo.png",
    duration: "2023",
    issueDate: "2023-11-15",
    expiryDate: null,
    credentialId: "a4514253-859e-46f3-9ec2-54b69e4f7774",
    credentialUrl: "https://www.credly.com/badges/a4514253-859e-46f3-9ec2-54b69e4f7774/linked_in_profile",
    verificationCode: "a4514253-859e-46f3-9ec2-54b69e4f7774",
    skills: ["Java", "Java EE", "Application Development", "Red Hat"],
    category: "Programming",
    level: "Professional",
    description: "Certification in enterprise Java application development using Red Hat technologies.",
    imageUrl: "/certificates/redhat-java.jpg",
    isVerified: true,
    priority: 6
  },
  {
    id: 7,
    title: "Adobe India Women-in-Tech Hackathon",
    issuer: "Adobe",
    issuerLogo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-logo-500x281.png",
    duration: "2023",
    issueDate: "2023-09-20",
    expiryDate: null,
    credentialId: "7281833b-0400-464c-b4b4-a32bd44700eb",
    credentialUrl: "https://unstop.com/certificate-preview/7281833b-0400-464c-b4b4-a32bd44700eb",
    verificationCode: "7281833b-0400-464c-b4b4-a32bd44700eb",
    skills: ["Hackathon", "Problem Solving", "Teamwork", "Innovation"],
    category: "Competition",
    level: "Intermediate",
    description: "Participation and achievement in the Adobe India Women-in-Technology Scholarship Hackathon.",
    imageUrl: "/certificates/adobe-hackathon.jpg",
    isVerified: true,
    priority: 7
  },
  {
    id: 8,
    title: "Introduction to C++",
    issuer: "CodeChef",
    issuerLogo: "https://cdn.codechef.com/images/cc-logo.svg",
    duration: "2023",
    issueDate: "2023-08-10",
    expiryDate: null,
    credentialId: "CODECHEF-CPP-2023-008",
    credentialUrl: "https://www.linkedin.com/in/gaurav-gavhane-87274b279",
    verificationCode: "CODECHEF-CPP-2023-008",
    skills: ["C++", "Programming", "Problem Solving", "Competitive Programming"],
    category: "Programming",
    level: "Beginner",
    description: "Foundational course on C++ programming concepts provided by CodeChef learning platform.",
    imageUrl: "/certificates/codechef-cpp.jpg",
    isVerified: true,
    priority: 8
  },
  {
    id: 9,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issuerLogo: "https://1000logos.net/wp-content/uploads/2021/04/Cisco-logo.png",
    duration: "2023",
    issueDate: "2023-07-05",
    expiryDate: null,
    credentialId: "CISCO-CYBER-2023-009",
    credentialUrl: "https://www.linkedin.com/in/gaurav-gavhane-87274b279",
    verificationCode: "CISCO-CYBER-2023-009",
    skills: ["Cybersecurity", "Networking", "Security Principles", "Threats"],
    category: "Security",
    level: "Intermediate",
    description: "Introductory course on cybersecurity concepts, threats, and best practices from Cisco Networking Academy.",
    imageUrl: "/certificates/cisco-cybersecurity.jpg",
    isVerified: true,
    priority: 9
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
    return requiredFields.every(field => Object.prototype.hasOwnProperty.call(cert, field) && cert[field]);
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
