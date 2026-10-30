import projectBlockchainImg from '../assets/images/project_blockchain.jpg';

export const PERSONAL_INFO = {
  name: 'Gudala Raghavi',
  shortName: 'Raghavi',
  logoText: 'GR.',
  title: 'Python Full Stack Developer',
  badge: 'Python Full Stack Developer',
  greeting: "Hi, I'm Gudala Raghavi.",
  headline: 'Python Full Stack Developer',
  bio: 'A motivated Python Full Stack Developer and Computer Science student passionate about web engineering, data analytics, and solving real-world challenges through technology.',
  aboutText: "I'm Gudala Raghavi, a motivated B.Tech Computer Science student with an interest in software development, automation, and practical technology solutions. I enjoy learning new technologies, building projects, and developing my technical and problem-solving skills.",
  location: 'Warangal, Telangana, India',
  email: 'raghavigudala@gmail.com',
  phone: '+91 73964 86322',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  highlights: [
    {
      title: 'Software Development',
      description: 'Strengthening programming foundations in Java and Python with a strong focus on algorithmic logic, data structures, and maintainable code architecture.',
      icon: 'Code2',
    },
    {
      title: 'Web Development',
      description: 'Crafting responsive, clean, and interactive user interfaces using modern web technologies like React.js, JavaScript, HTML5, and CSS3.',
      icon: 'Layout',
    },
    {
      title: 'Continuous Learning',
      description: 'Continuously expanding knowledge in Data Science concepts, cloud workflows, and modern software development practices.',
      icon: 'Sparkles',
    },
  ],
};

export const SKILLS_DATA = [
  {
    category: 'Programming Languages',
    description: 'Core logic, object-oriented concepts, and computational problem solving.',
    skills: [
      { name: 'Java', icon: 'Coffee', tag: 'Core Language', note: 'Object-Oriented Programming & Problem Solving' },
      { name: 'Python', icon: 'Terminal', tag: 'Core Language', note: 'Scripting, Automation & Data Science Foundations' },
    ],
  },
  {
    category: 'Web Development',
    description: 'Frontend and full-stack building blocks for responsive web applications.',
    skills: [
      { name: 'HTML5', icon: 'FileCode2', tag: 'Markup', note: 'Semantic structure & accessibility standards' },
      { name: 'CSS3', icon: 'Palette', tag: 'Styling', note: 'Responsive design, flexbox, grid & modern animations' },
      { name: 'JavaScript', icon: 'Braces', tag: 'Language', note: 'ES6+, DOM manipulation & asynchronous logic' },
      { name: 'React.js', icon: 'Atom', tag: 'Frontend Library', note: 'Component-driven architectures & state management' },
      { name: 'Express.js', icon: 'Server', tag: 'Backend Framework', note: 'Lightweight RESTful API routing and middleware' },
      { name: 'MongoDB', icon: 'Database', tag: 'NoSQL Database', note: 'Document-oriented data storage & collections' },
    ],
  },
  {
    category: 'Developer Tools',
    description: 'Productivity environments and version control tools used daily.',
    skills: [
      { name: 'GitHub', icon: 'GitBranch', tag: 'Version Control', note: 'Repository hosting, branch management & collaboration' },
      { name: 'Jupyter Notebook', icon: 'BookOpen', tag: 'Data Environment', note: 'Interactive experimentation, analysis & documentation' },
      { name: 'MS Excel', icon: 'Table', tag: 'Data Tool', note: 'Tabular analysis, formulas, charts & data summaries' },
    ],
  },
];

export const FEATURED_PROJECT = {
  title: 'Blockchain-Enabled Ramp Secret-Sharing Framework for Balanced, Tamper-Proof Deduplicated Decentralized Cloud Storage',
  shortTitle: 'Blockchain-Enabled Deduplicated Cloud Storage Framework',
  badge: 'Featured Academic Research Project',
  image: projectBlockchainImg,
  description: 'This project proposes a blockchain-enabled ramp secret-sharing framework for secure decentralized cloud storage. It aims to protect data confidentiality and integrity, improve fault tolerance, and reduce redundant storage through deduplication. Blockchain immutability and secret-sharing techniques support tamper resistance and reliable data recovery across distributed environments.',
  keyPillars: [
    {
      title: 'Ramp Secret-Sharing (RSS)',
      description: 'Splits secret data into threshold-controlled shares, achieving an optimal trade-off between cryptographic security and communication/storage efficiency.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Blockchain Immutability',
      description: 'Distributed ledger recording share metadata, cryptographic hashes, and verification proofs to guarantee tamper resistance across multi-node environments.',
      icon: 'Blocks',
    },
    {
      title: 'Smart Deduplication',
      description: 'Eliminates duplicate encrypted data chunks before distribution, substantially reducing decentralized cloud storage overhead while preserving zero-knowledge privacy.',
      icon: 'Layers',
    },
    {
      title: 'Decentralized Fault Tolerance',
      description: 'Ensures robust data reconstruction even if several storage nodes fail or go offline, eliminating single points of failure.',
      icon: 'Network',
    },
  ],
  verifiedTags: [
    'Blockchain Immutability',
    'Ramp Secret-Sharing (RSS)',
    'Data Deduplication',
    'Decentralized Cloud Storage',
    'Tamper-Proof Verification',
    'Cryptographic Integrity',
    'Distributed Fault Tolerance',
  ],
  techDistinction: {
    verifiedCore: 'Ramp Secret-Sharing, Blockchain Ledger Verification, Data Deduplication Algorithms',
    inferredArchitecture: 'Distributed Multi-Node Storage, Threshold Cryptography, Zero-Knowledge Hashing',
  },
  statusNote: 'Academic Framework & Research Architecture. Source code and live demo links are available upon request or verification.',
};

export const EXPERIENCE_DATA = [
  {
    organization: 'Cognifyz Technologies',
    role: 'Web Development Intern',
    duration: '15 August 2025 – 15 September 2025',
    type: 'Internship',
    badge: 'Hands-on Industry Experience',
    description: 'Gained hands-on experience in web development, enhanced technical skills, and worked on practical projects with professional guidance.',
    achievements: [
      'Developed responsive web interfaces adhering to modern UI/UX principles and mobile-first standards.',
      'Refined technical competencies across frontend fundamentals (HTML, CSS, JavaScript) and modular components.',
      'Completed practical web assignments and received structured mentor feedback under professional guidance.',
    ],
  },
];

export const EDUCATION_DATA = [
  {
    institution: 'Vaagdevi College of Engineering',
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Specializing in Data Science',
    duration: '2022 – 2026',
    score: '75%',
    scoreLabel: 'Aggregate Percentage',
    status: 'Currently Pursuing',
    badge: 'Undergraduate Degree',
    location: 'Warangal, Telangana',
    summary: 'Focusing on core computer science subjects, algorithms, database systems, software engineering, and data science methodologies.',
  },
  {
    institution: 'TSMS Junior College',
    degree: 'Intermediate (MPC)',
    specialization: 'Mathematics, Physics, Chemistry',
    duration: '2020 – 2022',
    score: '82%',
    scoreLabel: 'Final Percentage',
    status: 'Completed',
    badge: 'Higher Secondary',
    location: 'Telangana',
    summary: 'Built strong analytical, mathematical, and logical reasoning foundations preparing for engineering studies.',
  },
  {
    institution: 'ZPHS Vemulapally',
    degree: 'Secondary School Certificate (SSC)',
    specialization: 'State Board Curriculum',
    duration: '2019 – 2020',
    score: '95%',
    scoreLabel: 'Final Percentage',
    status: 'Completed with Distinction',
    badge: 'Secondary Education',
    location: 'Telangana',
    summary: 'Graduated with high distinction (95%), consistently excelling in academics, science, and mathematics.',
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Solution Architecture Job Simulation',
    issuer: 'AWS (Amazon Web Services)',
    category: 'Cloud & Architecture',
    icon: 'Cloud',
    description: 'Practical simulation on cloud solution design, scalable architecture fundamentals, and AWS cloud ecosystem best practices.',
  },
  {
    title: 'Digital Marketing Certificate',
    issuer: 'IBM SkillsBuild',
    category: 'Digital Strategy',
    icon: 'TrendingUp',
    description: 'Comprehensive study of digital engagement, online presence strategy, analytics, and content communication.',
  },
  {
    title: 'Participation Certificate',
    issuer: 'Grad Guru',
    category: 'Skill Enhancement',
    icon: 'GraduationCap',
    description: 'Active participation and successful completion of structured technical skill development programs.',
  },
  {
    title: 'Participation Certificate',
    issuer: 'Internshala',
    category: 'Career Training',
    icon: 'Award',
    description: 'Participation in career-readiness, hands-on training, and student professional development initiatives.',
  },
];

export const SOFT_SKILLS_DATA = [
  {
    title: 'Communication & Interpersonal Skills',
    description: 'Clear, empathetic communication and ability to articulate ideas effectively within collaborative team environments.',
    icon: 'MessagesSquare',
  },
  {
    title: 'Problem-Solving & Analytical Abilities',
    description: 'Structured analytical thinking to break down complex computing problems into practical, modular steps.',
    icon: 'Brain',
  },
  {
    title: 'Positive & Proactive Attitude',
    description: 'Approaching challenges with energy, initiative, enthusiasm, and a solution-oriented outlook.',
    icon: 'Smile',
  },
  {
    title: 'Self-Driven Mindset',
    description: 'Demonstrating internal motivation, discipline to meet personal goals, and strong independent initiative.',
    icon: 'Compass',
  },
];

export const INTERESTS_DATA = [
  {
    title: 'Building Meaningful Professional Relationships',
    description: 'Engaging with fellow engineers, mentors, and peers to foster supportive networks and collaborative growth.',
    icon: 'Users',
  },
  {
    title: 'Maintaining a Growth Mindset & Positive Outlook',
    description: 'Embracing constructive feedback, learning from every challenge, and viewing hurdles as opportunities to expand skills.',
    icon: 'Sparkle',
  },
];

export const LANGUAGES_DATA = [
  { name: 'English', tag: 'Professional Communication' },
  { name: 'Marathi', tag: 'Regional Language' },
  { name: 'Telugu', tag: 'Mother Tongue / Regional Language' },
];
