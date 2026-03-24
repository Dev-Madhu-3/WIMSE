import {
  FaBuildingColumns,
  FaGraduationCap,
  FaMicroscope,
  FaDna,
  FaFileLines,
  FaDollarSign,
  FaClipboardList,
  FaUserGraduate,
  FaPenToSquare,
  FaFileSignature,
  FaScroll,
  FaFileCircleCheck,
  FaGears,
  FaUsers,
  FaBookOpen,
  FaComputer,
  FaChalkboardUser,
  FaScaleBalanced,
  FaHouseMedical,
  FaBook,
} from "react-icons/fa6";

export const courses = [
  {
    course: "Master of Arts (M.A)",
    icon: "M.A",
    imageURL:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    specializations: [
      {
        name: "Master of Arts in English",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Explore advanced literary analysis, linguistics, and critical theory while studying global literature across historical periods and genres.",
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Hindi",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Dive into classical and modern Hindi literature, folklore, and sociolinguistics while developing advanced creative writing and translation skills.",
        image:
          "https://images.unsplash.com/photo-1588482364533-317a39d8c9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Telugu",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Analyze Telugu literary heritage, from ancient inscriptions to contemporary works, with emphasis on cultural context and linguistic evolution.",
        image:
          "https://images.unsplash.com/photo-1596495577876-7a6e3af3a0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Sanskrit",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Study Vedic texts, classical Sanskrit poetry, and philosophical treatises while mastering grammatical structures and historical linguistic developments.",
        image:
          "https://images.unsplash.com/photo-1596495578071-9160b6619270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Economics",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Investigate macroeconomic policies, econometric modeling, and developmental economics with practical applications in real-world financial systems.",
        image:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in History",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Examine global historical narratives, archival research methods, and historiography across ancient, medieval, and modern civilizations.",
        image:
          "https://images.unsplash.com/photo-1533689033436-5ad2e3d0ba8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Political Science",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Analyze comparative governance, political ideologies, and international diplomacy through case studies and policy simulations.",
        image:
          "https://images.unsplash.com/photo-1507676184212-d03ab07a8929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Sociology",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Investigate social stratification, urbanization trends, and cultural anthropology using qualitative and quantitative research methodologies.",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Journalism and Mass Communication (JMC)",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Develop multimedia storytelling skills, ethical reporting practices, and strategic communication strategies for digital and traditional media platforms.",
        image:
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Master of Arts in Human Resource Management (HRM)",
        category: "M.A",
        duration: 2,
        semester: 4,
        description:
          "Master organizational behavior, talent acquisition strategies, and labor law compliance for effective workforce development and management.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    course: "Master of Science (M.Sc)",
    icon: "M.Sc",
    imageURL:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    specializations: [
      {
        name: "M.Sc Botany",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Investigate plant physiology, genetic engineering, and ecological conservation through laboratory experiments and field research projects.",
        image:
          "https://images.unsplash.com/photo-1494597564530-871a3e0d6c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Zoology",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Explore animal biodiversity, evolutionary biology, and wildlife conservation techniques using advanced microscopy and genomic tools.",
        image:
          "https://images.unsplash.com/photo-1544635902-8cbbf5d3349c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Microbiology",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Study pathogenic mechanisms, industrial fermentation processes, and antimicrobial resistance through hands-on laboratory experimentation.",
        image:
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Physics",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Delve into quantum field theory, condensed matter physics, and astrophysics with computational modeling and experimental verification.",
        image:
          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Chemistry",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Master spectroscopic analysis, nanomaterial synthesis, and reaction mechanisms in organic/inorganic chemistry laboratories.",
        image:
          "https://images.unsplash.com/photo-1532187853781-51cdbb32c3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Mathematics",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Solve complex problems in differential equations, topology, and mathematical modeling for engineering and scientific applications.",
        image:
          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Statistics",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Apply Bayesian inference, machine learning algorithms, and multivariate analysis to solve real-world data challenges.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Food & Nutrition Science",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Research food chemistry, clinical nutrition, and sustainable diet planning for health promotion and disease prevention.",
        image:
          "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Computer Science",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Develop expertise in cloud computing, neural networks, and cybersecurity through programming labs and capstone projects.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "M.Sc Psychology",
        category: "M.Sc",
        duration: 2,
        semester: 4,
        description:
          "Investigate cognitive neuroscience, psychometric testing, and therapeutic interventions through clinical observations and research studies.",
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    course: "Master of Business Administration (MBA)",
    icon: "MBA",
    imageURL:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    specializations: [
      {
        name: "MBA in Information Technology Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Integrate business strategy with IT infrastructure management, cybersecurity, digital transformation, and cloud solutions.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Data Science",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Bridge business analytics with AI-driven decision-making using Python, R, and big data tools.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Petroleum & Natural Gas Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Optimize energy sector operations through hydrocarbon economics, sustainable policies, and supply chain management.",
        image:
          "https://images.unsplash.com/photo-1549388604-817d515a8f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Systems and Operations Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Enhance business efficiency by optimizing logistics, supply chains, production systems, and process automation.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Healthcare Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Learn hospital administration, health policies, medical operations, and financial management for healthcare businesses.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Entrepreneurship and Leadership",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Develop startup strategies, leadership skills, business innovation, risk management, and venture capital knowledge.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in IT & FinTech",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Combine financial technology, blockchain, digital banking, cybersecurity, and AI-driven financial strategies.",
        image:
          "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Artificial Intelligence & Machine Learning",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Master AI applications, deep learning, automation strategies, and intelligent business decision-making techniques.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Agri-Business Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Learn agricultural economics, rural marketing, sustainable farming strategies, and agribusiness management policies.",
        image:
          "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in International Business Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Understand global trade, cross-border marketing, foreign policies, and multinational business expansion strategies.",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Power Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Focus on energy efficiency, power generation, renewable energy, grid management, and policy-making strategies.",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Crude Oil and Gas Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Specialize in oil exploration, refining, supply chain logistics, sustainability, and petroleum industry management.",
        image:
          "https://images.unsplash.com/photo-1549388604-817d515a8f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in Infrastructure Management",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Plan and manage urban development, real estate, smart city projects, and large-scale infrastructure projects.",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MBA in BFSI (Banking, Financial Services, and Insurance)",
        category: "MBA",
        duration: 2,
        semester: 4,
        description:
          "Master banking regulations, risk analysis, financial markets, insurance management, and investment banking strategies.",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    course: "Master of Computer Applications (MCA)",
    icon: "MCA",
    imageURL:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    specializations: [
      {
        name: "MCA General",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Focuses on advanced computer science, programming, and application development. Graduates can pursue careers in software development, database management, and system analysis.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Computer Science & IT",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Focuses on software development, database management, and IT system design for real-world applications.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Cyber Security",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Covers network security, encryption, ethical hacking, and digital forensics to protect systems from cyber threats.",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Data Analytics",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Emphasizes data visualization, predictive modeling, and analytical tools for informed decision-making.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Data Science",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Focuses on machine learning, big data technologies, and data-driven insights for business and research.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Artificial Intelligence",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Explores neural networks, natural language processing, and AI-driven automation systems.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Cloud Technology & Information Security",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Combines cloud platform management with cybersecurity protocols for secure data handling.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Artificial Intelligence & Machine Learning",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Specializes in AI algorithms, data modeling, and developing intelligent systems.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "MCA in Cloud Computing and DevOps",
        category: "MCA",
        duration: 2,
        semester: 4,
        description:
          "Focuses on cloud architecture, automation tools, and continuous development strategies for efficient software delivery.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    course: "Bachelor Degree",
    icon: "B.D",
    imageURL:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    specializations: [
      {
        name: "Bachelor of Computer Applications (BCA)",
        category: "B.D",
        duration: 3,
        semester: 6,
        description:
          "Master programming languages like Java/Python while learning database management, web development, and software engineering principles.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "B.Com (Hons.)",
        category: "B.D",
        duration: 3,
        semester: 6,
        description:
          "Gain expertise in corporate accounting, financial markets, and e-commerce strategies with practical auditing experience.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Bachelor of Business Administration (BBA)",
        category: "B.D",
        duration: 3,
        semester: 6,
        description:
          "Develop leadership skills in operations management, digital marketing, and entrepreneurial ventures through case-based learning.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Bachelor of Arts (B.A.)",
        category: "B.D",
        duration: 3,
        semester: 6,
        description:
          "Engage with interdisciplinary studies in philosophy, performing arts, and global political systems through electives.",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Bachelor of Commerce (B.Com)",
        category: "B.D",
        duration: 3,
        semester: 6,
        description:
          "Study taxation laws, business ethics, and financial accounting systems for corporate and entrepreneurial careers.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    course: "Advanced Diploma Programs",
    icon: "ADCP",
    imageURL:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1760883721/Advance_Diploma_Courses_xnwmji.png",
    specializations: [
      {
        name: "Advanced Diploma in Dietetics and Therapeutic Nutrition (ADDTN)",
        category: "ADCP",
        duration: 1.5,
        semester: 0,
        description:
          "Focuses on clinical nutrition and diet planning for therapeutic health outcomes. Ideal for careers in hospitals, wellness centers, and nutrition consultancy.",
        image:
          "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Advanced Diploma in Drug Regulatory Affairs (ADDRA)",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Covers global drug approval processes, compliance, and regulatory policies. Prepares professionals for pharma regulatory roles across international markets.",
        image:
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Online Advanced Diploma in Medical Record Techniques (ADMRT)",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Trains in health information management, coding, and electronic medical records. Designed for roles in hospitals, clinics, and healthcare administration.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "General Management",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Develops leadership, strategic planning, and organizational skills. Suitable for aspirants seeking versatile management roles across industries.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Human Resource Management",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Teaches HR planning, recruitment, labor law, and performance management. Prepares professionals for effective people management in businesses.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Marketing Management",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Covers branding, advertising, consumer behavior, and market strategy. Equips learners to lead marketing efforts in competitive markets.",
        image:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Finance Management",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Focuses on investment, budgeting, and financial analysis. Trains professionals for key roles in corporate finance and banking.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Retail Management",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Teaches store operations, visual merchandising, and customer service. Prepares learners for careers in the retail and FMCG sectors.",
        image:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Operations Management",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Covers logistics, supply chain, and production planning. Ideal for managing processes in manufacturing and service industries.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Banking & Finance Management",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Provides knowledge of banking operations, risk management, and financial instruments. Designed for careers in banking and finance sectors.",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Information Technology",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Covers foundational IT skills, networks, databases, and systems. Suitable for beginners entering the tech industry.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Human Resource Management – Advanced",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Explores advanced HR analytics, strategic HRM, and organizational development. Ideal for senior HR roles and consultants.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Marketing Management – Advanced",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Delves into digital strategy, market analytics, and global marketing. Prepares professionals for leadership in marketing departments.",
        image:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Finance Management – Advanced",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Covers financial modeling, risk assessment, and global finance. Suited for CFO-track professionals and finance leaders.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Retail Management – Advanced",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Offers deeper insight into retail analytics, supply chain integration, and retail marketing strategy. Best for managerial roles in retail.",
        image:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Operations Management – Advanced",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Emphasizes lean management, Six Sigma, and enterprise operations. Tailored for professionals managing complex operational systems.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Banking & Finance Management – Advanced",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Focuses on advanced financial regulations, investment banking, and credit analysis. Ideal for strategic finance professionals.",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Information Technology – Advanced",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Provides advanced training in cloud computing, cybersecurity, and enterprise IT systems. Prepares candidates for senior IT roles.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Cyber Security Program",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Covers network security, ethical hacking, and data protection. Equips learners to secure IT systems against cyber threats.",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Application Development",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Teaches programming, software lifecycle, and user-centric app creation. Prepares learners for software development roles.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Internet of Things (IoT)",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Focuses on connected devices, sensors, and smart systems. Equips learners for careers in smart tech and automation.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Artificial Intelligence",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Covers machine learning, neural networks, and intelligent systems. Prepares professionals for AI-driven industry applications.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Computer Applications",
        category: "ADCP",
        duration: 0.5,
        semester: 0,
        description:
          "Introduces key software tools for office productivity and data management. Useful for administrative and support roles.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "French Language (Online)",
        category: "ADCP",
        duration: 0.5,
        semester: 0,
        description:
          "Builds reading, writing, and speaking skills in French. Suitable for academic, travel, or international business use.",
        image:
          "https://images.unsplash.com/photo-1506220926022-cc5c12bdb1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Naturopathy & Yoga Science",
        category: "ADCP",
        duration: 1,
        semester: 0,
        description:
          "Teaches natural healing, yoga techniques, and holistic wellness. Ideal for careers in alternative medicine and lifestyle coaching.",
        image:
          "https://images.unsplash.com/photo-1506629904605-7f3b0f4e3d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Foreign Language – Japanese",
        category: "ADCP",
        duration: 0.5,
        semester: 0,
        description:
          "Introduces basic grammar, vocabulary, and communication in Japanese. Useful for tourism, trade, and cultural exchange.",
        image:
          "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    course: "Certificate Courses",
    icon: "C&D",
    imageURL:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1760883721/Certificate_Cources_vlaxnh.png",
    specializations: [
      {
        name: "Certificate in Modern Persian Language (CMPL)",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "This course builds proficiency in reading, writing, and speaking Modern Persian. It enhances cultural understanding and communication skills for academic or professional use.",
        image:
          "https://images.unsplash.com/photo-1588482364533-9160b6619270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Diploma in Professional Arabic (DPA)",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "A comprehensive program in spoken and written Arabic, designed for professional and academic applications. It emphasizes grammar, vocabulary, and real-world usage.",
        image:
          "https://images.unsplash.com/photo-1506220926022-cc5c12bdb1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Diploma in Bakery and Confectionery Technology (DBCT)",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "Covers theoretical and practical aspects of baking and confectionery. Prepares students for careers in commercial kitchens, bakeries, and food industries.",
        image:
          "https://images.unsplash.com/photo-1506220926022-cc5c12bdb1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Computerized Accounting",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "Focuses on modern accounting software tools like Tally and QuickBooks. Equips learners to manage financial records and reports digitally with precision and efficiency.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Advanced Digital Marketing",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "Teaches SEO, SEM, social media marketing, analytics, and content strategy. Ideal for those looking to excel in online branding and digital business growth.",
        image:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Android App Development",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "Hands-on course covering Java/Kotlin, UI/UX, and Android Studio. Enables learners to design, develop, and deploy functional mobile applications on the Android platform.",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Certificate Course in GST",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "Offers practical knowledge of Goods and Services Tax law and procedures. Equips learners with skills in tax computation, filing returns, and GST compliance.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Business and Finance Professional",
        category: "C&D",
        duration: null,
        semester: null,
        description:
          "The Business and Finance Professional certificate course provides foundational knowledge in accounting, financial planning, and business strategy. It equips learners with essential skills to make informed financial decisions and manage business operations effectively.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

// export const courses = [
//     {
//         course: "Master of Arts (M.A)",
//         icon: "M.A",
//         imageURL: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
//         specializations: [
//             {
//                 name: 'Master of Arts in English',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Explore advanced literary analysis, linguistics, and critical theory while studying global literature across historical periods and genres. This program delves into postcolonial literature, feminist criticism, and digital humanities to provide a comprehensive understanding of textual interpretation. Students will engage with diverse theoretical frameworks including structuralism, post-structuralism, and cultural studies to develop sophisticated analytical skills. The curriculum includes intensive research seminars, archival work, and opportunities for creative writing that foster both critical and imaginative thinking. Graduates will emerge with the ability to conduct independent scholarly research and contribute meaningfully to academic discourse. This program prepares students for careers in academia, publishing, journalism, and cultural institutions where advanced literacy and communication skills are essential.',
//                 image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Hindi',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Dive into classical and modern Hindi literature, folklore, and sociolinguistics while developing advanced creative writing and translation skills. This program offers an in-depth exploration of Hindi literary traditions from the Bhakti movement to contemporary Dalit literature, examining their socio-political contexts. Students will analyze linguistic evolution, dialectal variations, and the impact of globalization on Hindi language usage in media and technology. The curriculum includes specialized workshops in literary translation, scriptwriting, and digital content creation that bridge traditional knowledge with modern applications. Through fieldwork and community engagement, learners will document oral traditions and contribute to language preservation efforts. Graduates will be equipped for careers in education, media, translation services, and cultural administration where Hindi language expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1588482364533-317a39d8c9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Telugu',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Analyze Telugu literary heritage, from ancient inscriptions to contemporary works, with emphasis on cultural context and linguistic evolution. This program traces the development of Telugu literature through major periods including the Puranic age, Prabandha period, and modern movements, examining their aesthetic and philosophical foundations. Students will study the influence of socio-political changes on literary expression and the role of Telugu in regional identity formation. The curriculum includes paleography training for reading ancient manuscripts, comparative literature studies, and digital archiving techniques for preserving rare texts. Through collaborative projects with cultural institutions, learners will contribute to the documentation and revitalization of Telugu literary traditions. Graduates will be prepared for careers in academia, cultural preservation, media, and education where deep knowledge of Telugu language and literature is essential.',
//                 image: 'https://images.unsplash.com/photo-1596495577876-7a6e3af3a0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Sanskrit',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Study Vedic texts, classical Sanskrit poetry, and philosophical treatises while mastering grammatical structures and historical linguistic developments. This program provides comprehensive training in reading and interpreting primary sources including the Vedas, Upanishads, epics, and classical dramas in their original language. Students will explore the evolution of Sanskrit from its Vedic origins to its role as a scholarly lingua franca across Asia, examining its influence on various linguistic traditions. The curriculum includes specialized courses in poetic metrics, philosophical systems, and manuscriptology that develop both linguistic proficiency and cultural understanding. Through research projects and internships, learners will engage with contemporary applications of Sanskrit knowledge in fields like Ayurveda, yoga, and cognitive science. Graduates will be equipped for careers in academia, translation, cultural preservation, and interdisciplinary research where Sanskrit expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1596495578071-9160b6619270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Economics',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Investigate macroeconomic policies, econometric modeling, and developmental economics with practical applications in real-world financial systems. This program offers advanced training in economic theory, quantitative methods, and policy analysis to understand complex economic phenomena at local and global levels. Students will master econometric software and statistical techniques to analyze economic data, test hypotheses, and forecast trends in various sectors. The curriculum includes specialized courses in behavioral economics, environmental economics, and international trade that address contemporary challenges. Through case studies and internships with financial institutions, learners will apply theoretical knowledge to practical problems in policy formulation and market analysis. Graduates will be prepared for careers in economic research, financial analysis, policy advising, and international development organizations where advanced economic expertise is essential.',
//                 image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in History',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Examine global historical narratives, archival research methods, and historiography across ancient, medieval, and modern civilizations. This program provides comprehensive training in historical methodology, critical analysis of primary sources, and diverse interpretive frameworks to understand complex historical processes. Students will explore specialized topics including social history, cultural history, and public history while developing advanced research skills in archival work and digital humanities. The curriculum includes seminars on historiographical debates, memory studies, and historical representation in media that foster critical thinking about how history is constructed and transmitted. Through fieldwork and internships with museums and historical societies, learners will gain practical experience in preserving and interpreting historical materials. Graduates will be prepared for careers in education, archival management, museum curation, cultural resource management, and public policy where historical expertise is increasingly valued.',
//                 image: 'https://images.unsplash.com/photo-1533689033436-5ad2e3d0ba8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Political Science',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Analyze comparative governance, political ideologies, and international diplomacy through case studies and policy simulations. This program offers advanced training in political theory, institutional analysis, and international relations to understand complex political dynamics at local, national, and global levels. Students will examine diverse political systems, ideological frameworks, and policy processes while developing skills in political analysis and research methodology. The curriculum includes specialized courses in security studies, human rights, and environmental politics that address contemporary global challenges. Through model UN simulations, policy briefs, and internships with governmental and non-governmental organizations, learners will apply theoretical knowledge to practical political problems. Graduates will be prepared for careers in diplomacy, policy analysis, international development, political consulting, and academia where advanced political expertise is essential.',
//                 image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a8929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Sociology',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Investigate social stratification, urbanization trends, and cultural anthropology using qualitative and quantitative research methodologies. This program provides comprehensive training in sociological theory, research methods, and data analysis to understand complex social structures and processes in contemporary societies. Students will examine specialized topics including gender studies, race and ethnicity, social movements, and globalization while developing skills in survey design, ethnographic fieldwork, and statistical analysis. The curriculum includes seminars on classical and contemporary sociological thought, research ethics, and public sociology that foster critical thinking about social issues and their solutions. Through community-based research projects and internships with social organizations, learners will apply sociological knowledge to address real-world problems. Graduates will be prepared for careers in social research, policy analysis, community development, human services, and academia where advanced sociological expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Journalism and Mass Communication (JMC)',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Develop multimedia storytelling skills, ethical reporting practices, and strategic communication strategies for digital and traditional media platforms. This program offers comprehensive training in journalistic writing, visual communication, and media production to prepare students for the rapidly evolving media landscape. Students will master specialized skills including investigative reporting, data journalism, documentary production, and social media management while developing a critical understanding of media ethics and law. The curriculum includes hands-on workshops in multimedia production, newsroom simulation, and crisis communication that simulate real-world media environments. Through internships with media organizations and production of professional-quality portfolio pieces, learners will gain practical experience in diverse media settings. Graduates will be prepared for careers in news reporting, editing, content creation, public relations, and media management where advanced communication skills and ethical standards are essential.',
//                 image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Master of Arts in Human Resource Management (HRM)',
//                 category: 'M.A',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Master organizational behavior, talent acquisition strategies, and labor law compliance for effective workforce development and management. This program provides advanced training in HR theory, strategic planning, and evidence-based practices to prepare students for leadership roles in human resource management. Students will explore specialized topics including compensation and benefits, employee relations, diversity and inclusion, and organizational development while developing skills in HR analytics and strategic workforce planning. The curriculum includes case studies, simulations, and projects that address real-world HR challenges in diverse organizational contexts. Through internships with HR departments and professional development workshops, learners will gain practical experience in talent management and organizational leadership. Graduates will be prepared for careers as HR managers, talent development specialists, compensation analysts, and organizational consultants where advanced HR expertise is increasingly essential in competitive business environments.',
//                 image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             }
//         ]
//     },
//     {
//         course: "Master of Science (M.Sc)",
//         icon: "M.Sc",
//         imageURL: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
//         specializations: [
//             {
//                 name: 'M.Sc Botany',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Investigate plant physiology, genetic engineering, and ecological conservation through laboratory experiments and field research projects. This program provides comprehensive training in plant biology from molecular to ecosystem levels, emphasizing both fundamental principles and cutting-edge research techniques. Students will master specialized skills including plant tissue culture, molecular markers analysis, and ecological assessment methods while developing expertise in plant taxonomy and systematics. The curriculum includes advanced courses in plant biochemistry, biotechnology, and environmental physiology that address current challenges in agriculture and conservation. Through field expeditions to diverse ecosystems and laboratory research projects, learners will gain hands-on experience in plant science research. Graduates will be prepared for careers in botanical research, agricultural biotechnology, environmental consulting, conservation management, and academia where advanced plant science expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1494597564530-871a3e0d6c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Zoology',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Explore animal biodiversity, evolutionary biology, and wildlife conservation techniques using advanced microscopy and genomic tools. This program offers comprehensive training in animal biology from molecular mechanisms to ecosystem dynamics, emphasizing both theoretical knowledge and practical research skills. Students will master specialized techniques including DNA sequencing, electron microscopy, behavioral observation, and population modeling while developing expertise in animal taxonomy and phylogenetics. The curriculum includes advanced courses in comparative physiology, animal behavior, and conservation biology that address current challenges in wildlife protection and ecosystem management. Through field research in diverse habitats and laboratory projects, learners will gain hands-on experience in zoological research and conservation practices. Graduates will be prepared for careers in wildlife research, conservation management, zoo administration, environmental education, and academia where advanced zoological expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1544635902-8cbbf5d3349c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Microbiology',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Study pathogenic mechanisms, industrial fermentation processes, and antimicrobial resistance through hands-on laboratory experimentation. This program provides comprehensive training in microbial biology from molecular mechanisms to ecosystem interactions, emphasizing both fundamental principles and applied research techniques. Students will master specialized skills including microbial culture techniques, molecular diagnostics, antibiotic susceptibility testing, and bioprocess engineering while developing expertise in microbial taxonomy and genomics. The curriculum includes advanced courses in immunology, virology, and environmental microbiology that address current challenges in healthcare and biotechnology. Through research projects in clinical, industrial, and environmental microbiology, learners will gain practical experience in microbial research and applications. Graduates will be prepared for careers in pharmaceutical research, clinical microbiology, quality control, biotechnology, and academia where advanced microbiological expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Physics',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Delve into quantum field theory, condensed matter physics, and astrophysics with computational modeling and experimental verification. This program offers comprehensive training in theoretical and experimental physics, emphasizing both fundamental principles and cutting-edge research methodologies. Students will master advanced mathematical techniques, computational physics methods, and experimental instrumentation while developing expertise in quantum mechanics, statistical physics, and electromagnetism. The curriculum includes specialized courses in particle physics, cosmology, and materials science that address current challenges in understanding the universe and developing new technologies. Through research projects using advanced laboratory equipment and computational simulations, learners will gain hands-on experience in physics research. Graduates will be prepared for careers in scientific research, engineering, technology development, data science, and academia where advanced physics expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Chemistry',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Master spectroscopic analysis, nanomaterial synthesis, and reaction mechanisms in organic/inorganic chemistry laboratories. This program provides comprehensive training in chemical principles from molecular structure to material properties, emphasizing both theoretical knowledge and practical laboratory skills. Students will master advanced analytical techniques including NMR, mass spectrometry, X-ray crystallography, and chromatography while developing expertise in synthetic methodologies and chemical kinetics. The curriculum includes specialized courses in bioinorganic chemistry, polymer science, and computational chemistry that address current challenges in materials science and pharmaceutical development. Through research projects in synthetic, analytical, and physical chemistry, learners will gain hands-on experience in chemical research and applications. Graduates will be prepared for careers in pharmaceutical research, materials science, quality control, environmental chemistry, and academia where advanced chemical expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1532187853781-51cdbb32c3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Mathematics',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Solve complex problems in differential equations, topology, and mathematical modeling for engineering and scientific applications. This program offers comprehensive training in pure and applied mathematics, emphasizing both theoretical foundations and practical problem-solving techniques. Students will master advanced mathematical concepts including real analysis, abstract algebra, and numerical methods while developing expertise in mathematical reasoning and proof construction. The curriculum includes specialized courses in optimization theory, dynamical systems, and mathematical biology that address current challenges in science and engineering. Through research projects and computational assignments, learners will gain experience in applying mathematical techniques to real-world problems. Graduates will be prepared for careers in scientific research, data analysis, financial modeling, cryptography, and academia where advanced mathematical expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Statistics',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Apply Bayesian inference, machine learning algorithms, and multivariate analysis to solve real-world data challenges. This program provides comprehensive training in statistical theory and methodology, emphasizing both mathematical foundations and practical data analysis skills. Students will master advanced statistical techniques including experimental design, time series analysis, stochastic processes, and computational statistics while developing expertise in statistical modeling and inference. The curriculum includes specialized courses in biostatistics, financial statistics, and data mining that address current challenges in extracting meaningful insights from complex datasets. Through research projects and industry collaborations, learners will gain hands-on experience in applying statistical methods to solve real-world problems. Graduates will be prepared for careers in data science, market research, clinical research, risk analysis, and academia where advanced statistical expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Food & Nutrition Science',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Research food chemistry, clinical nutrition, and sustainable diet planning for health promotion and disease prevention. This program offers comprehensive training in food science and human nutrition, emphasizing both biochemical principles and practical applications in health and food systems. Students will master advanced techniques in nutritional assessment, food analysis, dietary intervention design, and sensory evaluation while developing expertise in nutritional biochemistry and metabolism. The curriculum includes specialized courses in functional foods, nutrigenomics, community nutrition, and food safety that address current challenges in public health and sustainable food production. Through laboratory research, clinical practicums, and community projects, learners will gain hands-on experience in nutrition science and food technology. Graduates will be prepared for careers in clinical nutrition, food product development, public health nutrition, quality assurance, and academia where advanced nutrition expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Computer Science',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Develop expertise in cloud computing, neural networks, and cybersecurity through programming labs and capstone projects. This program provides comprehensive training in computer science principles and technologies, emphasizing both theoretical foundations and practical implementation skills. Students will master advanced programming techniques, algorithm design, software architecture, and system administration while developing expertise in emerging technologies like artificial intelligence and distributed systems. The curriculum includes specialized courses in database systems, computer networks, human-computer interaction, and software engineering that address current challenges in technology development and deployment. Through programming labs, research projects, and industry internships, learners will gain hands-on experience in computer science applications. Graduates will be prepared for careers in software development, system administration, cybersecurity, data science, and academia where advanced computer science expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'M.Sc Psychology',
//                 category: 'M.Sc',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Investigate cognitive neuroscience, psychometric testing, and therapeutic interventions through clinical observations and research studies. This program offers comprehensive training in psychological science, emphasizing both theoretical understanding and research methodology in understanding human behavior and mental processes. Students will master advanced techniques in psychological assessment, experimental design, neuroimaging, and statistical analysis while developing expertise in cognitive, social, and developmental psychology. The curriculum includes specialized courses in neuropsychology, psychopathology, counseling techniques, and psychological assessment that address current challenges in mental health and human behavior. Through research projects, clinical practicums, and laboratory work, learners will gain hands-on experience in psychological science and practice. Graduates will be prepared for careers in clinical psychology, counseling, human resources, research, and academia where advanced psychological expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             }
//         ]
//     },
//     {
//         course: "Master of Business Administration (MBA)",
//         icon: "MBA",
//         imageURL: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
//         specializations: [
//             {
//                 name: 'MBA in Information Technology Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Integrate business strategy with IT infrastructure management, cybersecurity, digital transformation, and cloud solutions. This program provides comprehensive training at the intersection of business administration and information technology, emphasizing strategic alignment of IT with organizational goals. Students will master IT governance frameworks, enterprise architecture, project management methodologies, and emerging technology trends while developing expertise in managing complex IT systems and digital initiatives. The curriculum includes specialized courses in IT service management, data analytics, cybersecurity governance, and digital innovation that address current challenges in technology-driven business environments. Through case studies, simulations, and industry projects, learners will gain practical experience in leading IT transformation and managing technology investments. Graduates will be prepared for leadership roles as IT directors, chief information officers, technology consultants, and digital transformation leaders where advanced IT management expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Data Science',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Bridge business analytics with AI-driven decision-making using Python, R, and big data tools. This program offers comprehensive training in data science methodologies and business applications, emphasizing the integration of analytical techniques with strategic business decision-making. Students will master advanced statistical analysis, machine learning algorithms, data visualization techniques, and big data processing frameworks while developing expertise in translating data insights into business value. The curriculum includes specialized courses in predictive modeling, data mining, business intelligence, and AI ethics that address current challenges in leveraging data for competitive advantage. Through real-world analytics projects and industry collaborations, learners will gain hands-on experience in solving complex business problems with data-driven approaches. Graduates will be prepared for leadership roles as data scientists, business analysts, analytics managers, and chief data officers where advanced data science expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Petroleum & Natural Gas Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Optimize energy sector operations through hydrocarbon economics, sustainable policies, and supply chain management. This program provides comprehensive training in the unique business aspects of the petroleum and natural gas industry, emphasizing both technical understanding and strategic management principles. Students will master energy economics, reservoir management, refining processes, and distribution logistics while developing expertise in navigating regulatory frameworks and environmental considerations. The curriculum includes specialized courses in energy trading, risk management, sustainable energy practices, and geopolitical factors affecting energy markets that address current challenges in the global energy landscape. Through industry projects, simulations, and internships with energy companies, learners will gain practical experience in managing complex energy operations. Graduates will be prepared for leadership roles in upstream, midstream, and downstream operations, energy trading, and policy development where advanced energy management expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1549388604-817d515a8f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Systems and Operations Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Enhance business efficiency by optimizing logistics, supply chains, production systems, and process automation. This program offers comprehensive training in operations management principles and systems optimization, emphasizing the integration of people, processes, and technology to improve organizational performance. Students will master supply chain design, quality management systems, lean manufacturing techniques, and operations research methods while developing expertise in managing complex operational networks. The curriculum includes specialized courses in service operations, project management, inventory control, and business process reengineering that address current challenges in global operations management. Through case studies, simulations, and industry projects, learners will gain practical experience in designing and optimizing efficient business systems. Graduates will be prepared for leadership roles as operations managers, supply chain directors, process improvement consultants, and chief operating officers where advanced operations management expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Healthcare Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Learn hospital administration, health policies, medical operations, and financial management for healthcare businesses. This program provides comprehensive training in the unique business aspects of healthcare delivery, emphasizing both operational excellence and strategic leadership in complex healthcare environments. Students will master healthcare finance, quality improvement methodologies, health information systems, and regulatory compliance while developing expertise in managing diverse healthcare organizations and systems. The curriculum includes specialized courses in healthcare marketing, strategic planning for healthcare organizations, health economics, and population health management that address current challenges in healthcare delivery and policy. Through case studies, simulations, and internships with healthcare organizations, learners will gain practical experience in healthcare management. Graduates will be prepared for leadership roles as hospital administrators, healthcare consultants, practice managers, and executives in healthcare organizations where advanced healthcare management expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Entrepreneurship and Leadership',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Develop startup strategies, leadership skills, business innovation, risk management, and venture capital knowledge. This program offers comprehensive training in entrepreneurial processes and leadership principles, emphasizing the development of innovative ventures and effective organizational leadership. Students will master opportunity recognition, business model development, entrepreneurial finance, and growth strategies while developing expertise in leading teams and organizations through change and innovation. The curriculum includes specialized courses in social entrepreneurship, corporate innovation, family business management, and leadership development that address current challenges in creating and sustaining successful ventures. Through business plan development, startup simulations, and mentorship from entrepreneurs, learners will gain practical experience in entrepreneurial leadership. Graduates will be prepared for leadership roles as startup founders, corporate innovation managers, venture capitalists, and organizational leaders where advanced entrepreneurial and leadership expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1521791136064-7a6e3af3a0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in IT & FinTech',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Combine financial technology, blockchain, digital banking, cybersecurity, and AI-driven financial strategies. This program provides comprehensive training at the intersection of information technology and financial services, emphasizing the transformation of financial systems through technological innovation. Students will master financial software development, payment systems, cryptocurrency technologies, regulatory technology, and algorithmic trading while developing expertise in managing digital financial services and platforms. The curriculum includes specialized courses in blockchain applications, open banking, insurtech, and digital transformation in financial services that address current challenges in the rapidly evolving FinTech landscape. Through industry projects, case studies, and internships with financial technology companies, learners will gain practical experience in developing and managing innovative financial solutions. Graduates will be prepared for leadership roles in FinTech startups, digital banking, cryptocurrency ventures, and traditional financial institutions undergoing digital transformation where advanced IT and FinTech expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Artificial Intelligence & Machine Learning',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Master AI applications, deep learning, automation strategies, and intelligent business decision-making techniques. This program offers comprehensive training in artificial intelligence technologies and their business applications, emphasizing the strategic implementation of AI to drive organizational performance and innovation. Students will master neural network architectures, natural language processing, computer vision, and AI ethics while developing expertise in managing AI projects and integrating AI solutions into business processes. The curriculum includes specialized courses in AI strategy, intelligent automation, predictive analytics, and cognitive computing that address current challenges in leveraging AI for competitive advantage. Through AI development projects, case studies, and industry collaborations, learners will gain practical experience in designing and implementing AI solutions. Graduates will be prepared for leadership roles as AI strategists, machine learning project managers, AI product managers, and technology consultants where advanced AI and machine learning expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Agri-Business Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Learn agricultural economics, rural marketing, sustainable farming strategies, and agribusiness management policies. This program provides comprehensive training in the unique business aspects of agriculture and food systems, emphasizing both economic principles and sustainable practices in agribusiness. Students will master supply chain management for agricultural products, commodity trading, food safety regulations, and agricultural finance while developing expertise in managing diverse agribusiness operations. The curriculum includes specialized courses in precision agriculture, organic farming systems, food retailing, and international agricultural trade that address current challenges in global food security and sustainability. Through field projects, case studies, and internships with agricultural companies, learners will gain practical experience in agribusiness management. Graduates will be prepared for leadership roles in agricultural production, food processing, rural development organizations, agricultural marketing, and policy development where advanced agribusiness management expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in International Business Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Understand global trade, cross-border marketing, foreign policies, and multinational business expansion strategies. This program offers comprehensive training in international business operations and strategy, emphasizing the complexities of managing organizations in the global marketplace. Students will master international trade regulations, global supply chain management, cross-cultural management, and foreign exchange risk management while developing expertise in navigating diverse international business environments. The curriculum includes specialized courses in global marketing strategies, international finance, emerging markets, and global strategic management that address current challenges in international business operations. Through international consulting projects, case studies, and study abroad opportunities, learners will gain practical experience in global business management. Graduates will be prepared for leadership roles in multinational corporations, international trade organizations, global marketing, and cross-border business development where advanced international business expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Power Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Focus on energy efficiency, power generation, renewable energy, grid management, and policy-making strategies. This program provides comprehensive training in the business aspects of power generation and distribution, emphasizing both technical understanding and strategic management in the energy sector. Students will master energy economics, power market operations, renewable energy technologies, and energy policy while developing expertise in managing power utilities and energy projects. The curriculum includes specialized courses in smart grid technologies, energy conservation, carbon trading, and energy project finance that address current challenges in transitioning to sustainable energy systems. Through industry projects, simulations, and internships with power companies, learners will gain practical experience in power management. Graduates will be prepared for leadership roles in power generation companies, utilities, renewable energy firms, energy consulting, and policy development where advanced power management expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Crude Oil and Gas Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Specialize in oil exploration, refining, supply chain logistics, sustainability, and petroleum industry management. This program offers comprehensive training in the business aspects of the petroleum industry, emphasizing both upstream and downstream operations in the global oil and gas sector. Students will master reservoir management, drilling operations, refining processes, and petroleum economics while developing expertise in navigating regulatory frameworks and environmental considerations. The curriculum includes specialized courses in oil trading, risk management in petroleum operations, sustainable extraction practices, and geopolitical factors affecting oil markets that address current challenges in the global petroleum industry. Through industry projects, simulations, and internships with oil companies, learners will gain practical experience in petroleum management. Graduates will be prepared for leadership roles in exploration and production companies, refining operations, oil trading, and petroleum consulting where advanced crude oil and gas management expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1549388604-817d515a8f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in Infrastructure Management',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Plan and manage urban development, real estate, smart city projects, and large-scale infrastructure projects. This program provides comprehensive training in the business aspects of infrastructure development, emphasizing both project management and strategic planning in the built environment. Students will master infrastructure finance, project appraisal, construction management, and public-private partnerships while developing expertise in managing complex infrastructure projects throughout their lifecycle. The curriculum includes specialized courses in sustainable infrastructure, urban planning, real estate development, and infrastructure policy that address current challenges in developing and maintaining critical infrastructure. Through case studies, simulations, and industry projects, learners will gain practical experience in infrastructure management. Graduates will be prepared for leadership roles in construction companies, real estate development firms, urban planning organizations, infrastructure consulting, and government agencies where advanced infrastructure management expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'MBA in BFSI (Banking, Financial Services, and Insurance)',
//                 category: 'MBA',
//                 duration: 2,
//                 semester: 4,
//                 description: 'Master banking regulations, risk analysis, financial markets, insurance management, and investment banking strategies. This program offers comprehensive training in the diverse sectors of banking, financial services, and insurance, emphasizing both operational excellence and strategic leadership in financial institutions. Students will master financial regulations, risk management frameworks, insurance underwriting, and capital markets operations while developing expertise in managing financial institutions in a complex regulatory environment. The curriculum includes specialized courses in retail banking, corporate finance, insurance products, wealth management, and financial technology that address current challenges in the BFSI sector. Through case studies, simulations, and internships with financial institutions, learners will gain practical experience in BFSI management. Graduates will be prepared for leadership roles in banks, insurance companies, investment firms, financial consulting, and regulatory agencies where advanced BFSI expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             }
//         ]
//     },
//     {
//         course: "Master of Computer Applications (MCA)",
//         icon: "MCA",
//         imageURL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
//         specializations: [
//             {
//                 name: "MCA General",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Focuses on advanced computer science, programming, and application development. Graduates can pursue careers in software development, database management, and system analysis. This program provides comprehensive training in computer science fundamentals and practical application development, emphasizing both theoretical knowledge and hands-on programming skills. Students will master multiple programming languages, software design patterns, database systems, and web technologies while developing expertise in creating efficient and scalable software solutions. The curriculum includes specialized courses in operating systems, computer networks, software engineering, and data structures that form the foundation of modern computing systems. Through programming projects, lab work, and industry internships, learners will gain practical experience in developing real-world software applications. Graduates will be prepared for careers as software developers, system analysts, database administrators, and IT consultants where advanced computer application expertise is increasingly valuable.",
//                 image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Computer Science & IT",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Focuses on software development, database management, and IT system design for real-world applications. This program offers comprehensive training in computer science principles and information technology practices, emphasizing the development of robust and efficient computing solutions. Students will master advanced programming techniques, database design and administration, system architecture, and network management while developing expertise in designing and implementing IT systems for diverse organizational needs. The curriculum includes specialized courses in software project management, IT infrastructure, enterprise systems, and information security that address current challenges in technology implementation and management. Through software development projects, case studies, and industry collaborations, learners will gain practical experience in creating and managing IT solutions. Graduates will be prepared for careers as software architects, IT managers, systems analysts, and technology consultants where advanced computer science and IT expertise is increasingly essential.",
//                 image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Cyber Security",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Covers network security, encryption, ethical hacking, and digital forensics to protect systems from cyber threats. This program provides comprehensive training in cybersecurity principles and practices, emphasizing both defensive strategies and offensive techniques to protect digital assets and infrastructure. Students will master security protocols, vulnerability assessment, intrusion detection, and incident response while developing expertise in implementing robust security measures for organizations. The curriculum includes specialized courses in cryptography, secure software development, compliance frameworks, and cyber threat intelligence that address current challenges in the evolving cybersecurity landscape. Through security labs, penetration testing exercises, and industry certifications, learners will gain hands-on experience in cybersecurity operations. Graduates will be prepared for careers as cybersecurity analysts, information security officers, penetration testers, and security consultants where advanced cybersecurity expertise is increasingly valuable.",
//                 image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Data Analytics",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Emphasizes data visualization, predictive modeling, and analytical tools for informed decision-making. This program offers comprehensive training in data analysis techniques and methodologies, emphasizing the extraction of meaningful insights from complex datasets to support organizational decision-making. Students will master statistical analysis, data mining techniques, machine learning algorithms, and data visualization tools while developing expertise in transforming raw data into actionable intelligence. The curriculum includes specialized courses in big data technologies, business intelligence, data warehousing, and predictive analytics that address current challenges in managing and analyzing large volumes of data. Through analytics projects, case studies, and industry collaborations, learners will gain practical experience in applying data analytics to solve real-world problems. Graduates will be prepared for careers as data analysts, business intelligence specialists, data scientists, and analytics consultants where advanced data analytics expertise is increasingly essential.",
//                 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Data Science",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Focuses on machine learning, big data technologies, and data-driven insights for business and research. This program provides comprehensive training in data science principles and methodologies, emphasizing the application of computational techniques to extract knowledge and insights from structured and unstructured data. Students will master advanced machine learning algorithms, statistical modeling, data engineering, and big data processing frameworks while developing expertise in solving complex data science problems. The curriculum includes specialized courses in deep learning, natural language processing, data visualization, and cloud computing for data science that address current challenges in extracting value from large and diverse datasets. Through research projects, industry collaborations, and capstone projects, learners will gain hands-on experience in applying data science techniques. Graduates will be prepared for careers as data scientists, machine learning engineers, research scientists, and AI specialists where advanced data science expertise is increasingly valuable.",
//                 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Artificial Intelligence",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Explores neural networks, natural language processing, and AI-driven automation systems. This program offers comprehensive training in artificial intelligence technologies and applications, emphasizing both theoretical foundations and practical implementation of AI systems. Students will master machine learning algorithms, deep learning architectures, knowledge representation, and AI ethics while developing expertise in designing intelligent systems that can perceive, reason, and act. The curriculum includes specialized courses in computer vision, robotics, expert systems, and cognitive computing that address current challenges in developing and deploying AI solutions. Through AI development projects, research activities, and industry internships, learners will gain hands-on experience in creating AI applications. Graduates will be prepared for careers as AI engineers, machine learning specialists, research scientists, and AI product managers where advanced artificial intelligence expertise is increasingly essential.",
//                 image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Cloud Technology & Information Security",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Combines cloud platform management with cybersecurity protocols for secure data handling. This program provides comprehensive training in cloud computing technologies and information security practices, emphasizing the design and management of secure cloud-based systems and services. Students will master cloud architecture, virtualization technologies, identity and access management, and security compliance while developing expertise in implementing robust security measures for cloud environments. The curriculum includes specialized courses in cloud service models, hybrid cloud infrastructure, data protection in the cloud, and security auditing that address current challenges in cloud security and governance. Through cloud labs, security simulations, and industry certifications, learners will gain practical experience in managing secure cloud systems. Graduates will be prepared for careers as cloud security architects, cloud engineers, information security analysts, and IT security consultants where advanced cloud and security expertise is increasingly valuable.",
//                 image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Artificial Intelligence & Machine Learning",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Specializes in AI algorithms, data modeling, and developing intelligent systems. This program offers comprehensive training in artificial intelligence and machine learning technologies, emphasizing both theoretical understanding and practical implementation of intelligent systems. Students will master advanced machine learning techniques, neural network architectures, natural language processing, and computer vision while developing expertise in creating AI solutions for complex problems. The curriculum includes specialized courses in deep learning, reinforcement learning, AI ethics, and big data analytics that address current challenges in developing and deploying AI applications. Through research projects, AI development labs, and industry collaborations, learners will gain hands-on experience in building intelligent systems. Graduates will be prepared for careers as AI specialists, machine learning engineers, data scientists, and AI researchers where advanced AI and machine learning expertise is increasingly essential.",
//                 image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             },
//             {
//                 name: "MCA in Cloud Computing and DevOps",
//                 category: "MCA",
//                 duration: 2,
//                 semester: 4,
//                 description: "Focuses on cloud architecture, automation tools, and continuous development strategies for efficient software delivery. This program provides comprehensive training in cloud computing technologies and DevOps practices, emphasizing the design, deployment, and maintenance of scalable cloud-based applications and infrastructure. Students will master cloud service models, containerization technologies, infrastructure as code, and continuous integration/continuous deployment pipelines while developing expertise in optimizing software development and operations processes. The curriculum includes specialized courses in microservices architecture, cloud security, monitoring and logging, and DevOps culture that address current challenges in modern software delivery. Through cloud labs, DevOps projects, and industry certifications, learners will gain practical experience in implementing cloud and DevOps solutions. Graduates will be prepared for careers as cloud architects, DevOps engineers, site reliability engineers, and cloud consultants where advanced cloud and DevOps expertise is increasingly valuable.",
//                 image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
//             }
//         ]
//     },
//     {
//         course: "Bachelor Degree",
//         icon: "B.D",
//         imageURL: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
//         specializations: [
//             {
//                 name: 'Bachelor of Computer Applications (BCA)',
//                 category: 'B.D',
//                 duration: 3,
//                 semester: 6,
//                 description: 'Master programming languages like Java/Python while learning database management, web development, and software engineering principles. This program provides comprehensive training in computer applications and software development, emphasizing both theoretical foundations and practical programming skills. Students will master multiple programming paradigms, database design and administration, web technologies, and software development methodologies while developing expertise in creating efficient and user-friendly software solutions. The curriculum includes specialized courses in operating systems, computer networks, data structures, and software project management that form the foundation of modern application development. Through programming projects, lab work, and industry internships, learners will gain hands-on experience in developing real-world software applications. Graduates will be prepared for careers as software developers, web designers, system analysts, and IT support specialists where foundational computer application expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'B.Com (Hons.)',
//                 category: 'B.D',
//                 duration: 3,
//                 semester: 6,
//                 description: 'Gain expertise in corporate accounting, financial markets, and e-commerce strategies with practical auditing experience. This program offers comprehensive training in advanced commerce principles and practices, emphasizing both theoretical understanding and practical application in modern business environments. Students will master financial accounting, cost accounting, taxation laws, and financial management while developing expertise in analyzing complex business transactions and financial statements. The curriculum includes specialized courses in corporate law, business statistics, e-commerce, and auditing practices that address current challenges in the dynamic business landscape. Through case studies, accounting simulations, and industry internships, learners will gain practical experience in applying commerce concepts to real-world business scenarios. Graduates will be prepared for careers as chartered accountants, financial analysts, tax consultants, and corporate finance professionals where advanced commerce expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Bachelor of Business Administration (BBA)',
//                 category: 'B.D',
//                 duration: 3,
//                 semester: 6,
//                 description: 'Develop leadership skills in operations management, digital marketing, and entrepreneurial ventures through case-based learning. This program provides comprehensive training in business administration principles and practices, emphasizing both theoretical foundations and practical applications in modern organizational settings. Students will master management concepts, marketing strategies, financial analysis, and business communication while developing expertise in making informed business decisions and leading teams effectively. The curriculum includes specialized courses in organizational behavior, business law, supply chain management, and entrepreneurship that address current challenges in the dynamic business environment. Through case studies, business simulations, and industry internships, learners will gain practical experience in applying business concepts to real-world scenarios. Graduates will be prepared for careers as business analysts, marketing executives, operations managers, and entrepreneurs where foundational business administration expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Bachelor of Arts (B.A.)',
//                 category: 'B.D',
//                 duration: 3,
//                 semester: 6,
//                 description: 'Engage with interdisciplinary studies in philosophy, performing arts, and global political systems through electives. This program offers comprehensive training in liberal arts and humanities, emphasizing critical thinking, cultural understanding, and effective communication across diverse disciplines. Students will master analytical reasoning, research methodologies, creative expression, and cross-cultural perspectives while developing expertise in examining complex human experiences and societal structures. The curriculum includes specialized courses in literature, history, psychology, sociology, and fine arts that foster a broad understanding of human culture and intellectual traditions. Through research projects, creative performances, and community engagement, learners will gain practical experience in applying arts and humanities knowledge to contemporary issues. Graduates will be prepared for careers in education, journalism, cultural management, public service, and creative industries where foundational arts and humanities expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Bachelor of Commerce (B.Com)',
//                 category: 'B.D',
//                 duration: 3,
//                 semester: 6,
//                 description: 'Study taxation laws, business ethics, and financial accounting systems for corporate and entrepreneurial careers. This program provides comprehensive training in commerce principles and practices, emphasizing both theoretical understanding and practical application in business and financial contexts. Students will master financial accounting, business mathematics, economic principles, and commercial law while developing expertise in analyzing business operations and financial transactions. The curriculum includes specialized courses in cost accounting, business statistics, income tax, and corporate governance that address current challenges in the modern business environment. Through case studies, accounting projects, and industry internships, learners will gain practical experience in applying commerce concepts to real-world business scenarios. Graduates will be prepared for careers as accountants, financial advisors, tax consultants, and business analysts where foundational commerce expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             }
//         ]
//     },
//     {
//         course: "Advanced Diploma Programs",
//         icon: "ADCP",
//         imageURL: 'https://images.unsplash.com/photo-1521791136064-7a6e3af3a0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
//         specializations: [
//             {
//                 name: 'Advanced Diploma in Dietetics and Therapeutic Nutrition (ADDTN)',
//                 category: 'ADCP',
//                 duration: 1.5,
//                 semester: 0,
//                 description: 'Focuses on clinical nutrition and diet planning for therapeutic health outcomes. Ideal for careers in hospitals, wellness centers, and nutrition consultancy. This program provides comprehensive training in nutritional science and therapeutic dietetics, emphasizing both theoretical knowledge and practical application in clinical and community settings. Students will master nutritional assessment techniques, medical nutrition therapy, diet planning methodologies, and health promotion strategies while developing expertise in addressing various health conditions through dietary interventions. The curriculum includes specialized courses in clinical biochemistry, advanced nutrition, therapeutic diets, and nutrition counseling that address current challenges in managing health through nutrition. Through clinical practicums, case studies, and community projects, learners will gain hands-on experience in applying therapeutic nutrition principles. Graduates will be prepared for careers as clinical dietitians, nutrition consultants, wellness program coordinators, and public health nutritionists where advanced dietetics expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Advanced Diploma in Drug Regulatory Affairs (ADDRA)',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Covers global drug approval processes, compliance, and regulatory policies. Prepares professionals for pharma regulatory roles across international markets. This program offers comprehensive training in pharmaceutical regulatory frameworks and compliance requirements, emphasizing both theoretical understanding and practical application in the global pharmaceutical industry. Students will master drug development pathways, regulatory submission processes, quality assurance standards, and pharmacovigilance requirements while developing expertise in navigating complex regulatory environments across different regions. The curriculum includes specialized courses in clinical trial regulations, intellectual property rights, good manufacturing practices, and international regulatory harmonization that address current challenges in pharmaceutical development and commercialization. Through case studies, regulatory documentation projects, and industry internships, learners will gain practical experience in drug regulatory affairs. Graduates will be prepared for careers as regulatory affairs specialists, compliance officers, quality assurance managers, and regulatory consultants where advanced pharmaceutical regulatory expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Online Advanced Diploma in Medical Record Techniques (ADMRT)',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Trains in health information management, coding, and electronic medical records. Designed for roles in hospitals, clinics, and healthcare administration. This program provides comprehensive training in health information management systems and medical documentation practices, emphasizing both theoretical knowledge and practical application in healthcare settings. Students will master medical coding systems, health data standards, electronic health record management, and healthcare privacy regulations while developing expertise in maintaining accurate and secure health information. The curriculum includes specialized courses in medical terminology, health information technology, data analytics, and healthcare reimbursement systems that address current challenges in managing health information effectively. Through virtual lab exercises, case studies, and online simulations, learners will gain hands-on experience in medical record management. Graduates will be prepared for careers as health information technicians, medical coders, clinical documentation specialists, and health information managers where advanced medical record expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'General Management',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Develops leadership, strategic planning, and organizational skills. Suitable for aspirants seeking versatile management roles across industries. This program offers comprehensive training in management principles and practices, emphasizing both theoretical understanding and practical application in diverse organizational contexts. Students will master leadership theories, strategic management concepts, organizational behavior principles, and decision-making techniques while developing expertise in managing resources and driving organizational performance. The curriculum includes specialized courses in operations management, business communication, project management, and change management that address current challenges in dynamic business environments. Through case studies, management simulations, and industry projects, learners will gain practical experience in applying management concepts to real-world scenarios. Graduates will be prepared for careers as management trainees, operations coordinators, team leaders, and junior managers where foundational management expertise is increasingly valuable across industries.',
//                 image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Human Resource Management',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Teaches HR planning, recruitment, labor law, and performance management. Prepares professionals for effective people management in businesses. This program provides comprehensive training in human resource management principles and practices, emphasizing both theoretical understanding and practical application in organizational settings. Students will master talent acquisition strategies, employee development methodologies, compensation and benefits administration, and employee relations management while developing expertise in aligning HR practices with organizational goals. The curriculum includes specialized courses in training and development, HR analytics, diversity management, and workplace ethics that address current challenges in managing human capital effectively. Through case studies, HR simulations, and industry projects, learners will gain practical experience in applying HR concepts to real-world workplace scenarios. Graduates will be prepared for careers as HR assistants, recruitment coordinators, training specialists, and HR generalists where foundational HR expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Marketing Management',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Covers branding, advertising, consumer behavior, and market strategy. Equips learners to lead marketing efforts in competitive markets. This program offers comprehensive training in marketing principles and practices, emphasizing both theoretical understanding and practical application in dynamic market environments. Students will master market research techniques, brand management strategies, digital marketing tools, and promotional campaign development while developing expertise in creating effective marketing plans for diverse products and services. The curriculum includes specialized courses in consumer behavior, marketing analytics, social media marketing, and services marketing that address current challenges in reaching and engaging target audiences. Through marketing simulations, case studies, and industry projects, learners will gain practical experience in applying marketing concepts to real-world business scenarios. Graduates will be prepared for careers as marketing coordinators, brand assistants, digital marketing specialists, and sales executives where foundational marketing expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Finance Management',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Focuses on investment, budgeting, and financial analysis. Trains professionals for key roles in corporate finance and banking. This program provides comprehensive training in financial management principles and practices, emphasizing both theoretical understanding and practical application in business and financial contexts. Students will master financial analysis techniques, investment strategies, budgeting methodologies, and risk management approaches while developing expertise in making sound financial decisions for organizations. The curriculum includes specialized courses in financial markets, working capital management, corporate finance, and financial planning that address current challenges in managing financial resources effectively. Through financial modeling exercises, case studies, and industry projects, learners will gain practical experience in applying financial concepts to real-world business scenarios. Graduates will be prepared for careers as financial analysts, finance assistants, investment associates, and banking officers where foundational finance expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Retail Management',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Teaches store operations, visual merchandising, and customer service. Prepares learners for careers in the retail and FMCG sectors. This program offers comprehensive training in retail management principles and practices, emphasizing both theoretical understanding and practical application in diverse retail environments. Students will master inventory management techniques, merchandising strategies, customer relationship management, and retail operations while developing expertise in creating engaging shopping experiences and driving sales performance. The curriculum includes specialized courses in retail marketing, supply chain management, retail analytics, and e-commerce that address current challenges in the rapidly evolving retail landscape. Through retail simulations, case studies, and industry projects, learners will gain practical experience in applying retail concepts to real-world scenarios. Graduates will be prepared for careers as store managers, retail buyers, merchandising coordinators, and customer service managers where foundational retail expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Operations Management',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Covers logistics, supply chain, and production planning. Ideal for managing processes in manufacturing and service industries. This program provides comprehensive training in operations management principles and practices, emphasizing both theoretical understanding and practical application in optimizing organizational processes. Students will master supply chain management techniques, quality control methodologies, production planning strategies, and process improvement approaches while developing expertise in enhancing operational efficiency and effectiveness. The curriculum includes specialized courses in inventory management, service operations, project management, and operations research that address current challenges in managing complex operational systems. Through operations simulations, case studies, and industry projects, learners will gain practical experience in applying operations concepts to real-world scenarios. Graduates will be prepared for careers as operations coordinators, supply chain assistants, quality control technicians, and production planners where foundational operations expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Banking & Finance Management',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Provides knowledge of banking operations, risk management, and financial instruments. Designed for careers in banking and finance sectors. This program offers comprehensive training in banking and financial management principles, emphasizing both theoretical understanding and practical application in financial institutions. Students will master banking operations, financial services, risk assessment techniques, and investment products while developing expertise in navigating the complex banking and financial landscape. The curriculum includes specialized courses in retail banking, corporate banking, financial regulations, and wealth management that address current challenges in the dynamic financial sector. Through banking simulations, case studies, and industry projects, learners will gain practical experience in applying banking and finance concepts to real-world scenarios. Graduates will be prepared for careers as banking officers, financial advisors, credit analysts, and operations associates in financial institutions where foundational banking and finance expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Information Technology',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Covers foundational IT skills, networks, databases, and systems. Suitable for beginners entering the tech industry. This program provides comprehensive training in information technology fundamentals and practices, emphasizing both theoretical understanding and practical application in technology environments. Students will master computer hardware concepts, networking principles, database management, and basic programming while developing expertise in troubleshooting common IT issues and supporting technology infrastructure. The curriculum includes specialized courses in operating systems, web technologies, IT security fundamentals, and help desk support that address current challenges in managing technology resources effectively. Through lab exercises, simulations, and practical projects, learners will gain hands-on experience in applying IT concepts to real-world technology scenarios. Graduates will be prepared for careers as IT support specialists, help desk technicians, junior network administrators, and database assistants where foundational IT expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Human Resource Management – Advanced',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Explores advanced HR analytics, strategic HRM, and organizational development. Ideal for senior HR roles and consultants. This program offers comprehensive training in advanced human resource management concepts and strategic applications, emphasizing both theoretical understanding and practical implementation in complex organizational environments. Students will master HR analytics techniques, strategic workforce planning, talent management strategies, and organizational development methodologies while developing expertise in aligning HR practices with long-term business objectives. The curriculum includes specialized courses in leadership development, change management, compensation strategy, and global HR management that address current challenges in managing human capital strategically. Through advanced case studies, HR strategy projects, and industry collaborations, learners will gain practical experience in applying advanced HR concepts to complex organizational scenarios. Graduates will be prepared for senior HR roles including HR managers, HR business partners, organizational development specialists, and HR consultants where advanced strategic HR expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Marketing Management – Advanced',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Delves into digital strategy, market analytics, and global marketing. Prepares professionals for leadership in marketing departments. This program provides comprehensive training in advanced marketing strategies and analytical approaches, emphasizing both theoretical understanding and practical application in complex market environments. Students will master digital marketing ecosystems, marketing analytics platforms, global market entry strategies, and integrated marketing communications while developing expertise in creating data-driven marketing strategies for diverse markets. The curriculum includes specialized courses in marketing automation, customer experience management, marketing ROI analysis, and strategic brand management that address current challenges in the rapidly evolving marketing landscape. Through advanced marketing simulations, strategic marketing projects, and industry collaborations, learners will gain practical experience in applying advanced marketing concepts to complex business scenarios. Graduates will be prepared for senior marketing roles including marketing managers, brand managers, digital marketing directors, and marketing strategists where advanced marketing expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Finance Management – Advanced',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Covers financial modeling, risk assessment, and global finance. Suited for CFO-track professionals and finance leaders. This program offers comprehensive training in advanced financial management concepts and strategic applications, emphasizing both theoretical understanding and practical implementation in complex financial environments. Students will master advanced financial modeling techniques, enterprise risk management frameworks, international finance principles, and strategic investment analysis while developing expertise in making high-level financial decisions for organizations. The curriculum includes specialized courses in mergers and acquisitions, treasury management, financial strategy, and global financial markets that address current challenges in the dynamic financial landscape. Through advanced financial case studies, strategic finance projects, and industry collaborations, learners will gain practical experience in applying advanced finance concepts to complex business scenarios. Graduates will be prepared for senior finance roles including finance managers, financial controllers, treasury managers, and financial analysts where advanced strategic finance expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Retail Management – Advanced',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Offers deeper insight into retail analytics, supply chain integration, and retail marketing strategy. Best for managerial roles in retail. This program provides comprehensive training in advanced retail management concepts and strategic applications, emphasizing both theoretical understanding and practical implementation in complex retail environments. Students will master retail analytics techniques, omnichannel retailing strategies, supply chain optimization, and advanced merchandising approaches while developing expertise in creating seamless customer experiences across multiple touchpoints. The curriculum includes specialized courses in retail technology innovation, customer experience management, retail operations strategy, and international retailing that address current challenges in the rapidly evolving retail landscape. Through advanced retail simulations, strategic retail projects, and industry collaborations, learners will gain practical experience in applying advanced retail concepts to complex business scenarios. Graduates will be prepared for senior retail roles including retail managers, category managers, retail operations directors, and merchandising managers where advanced retail expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Operations Management – Advanced',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Emphasizes lean management, Six Sigma, and enterprise operations. Tailored for professionals managing complex operational systems. This program offers comprehensive training in advanced operations management concepts and strategic applications, emphasizing both theoretical understanding and practical implementation in complex operational environments. Students will master lean manufacturing principles, Six Sigma methodologies, supply chain optimization strategies, and enterprise resource planning while developing expertise in designing and managing efficient operational systems. The curriculum includes specialized courses in quality management systems, service operations excellence, operations strategy, and global operations management that address current challenges in optimizing complex operational processes. Through advanced operations simulations, strategic operations projects, and industry collaborations, learners will gain practical experience in applying advanced operations concepts to complex business scenarios. Graduates will be prepared for senior operations roles including operations managers, supply chain managers, quality directors, and process improvement specialists where advanced operations expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Banking & Finance Management – Advanced',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Focuses on advanced financial regulations, investment banking, and credit analysis. Ideal for strategic finance professionals. This program provides comprehensive training in advanced banking and finance concepts and strategic applications, emphasizing both theoretical understanding and practical implementation in complex financial environments. Students will master advanced financial regulations, investment banking operations, credit risk assessment techniques, and strategic financial planning while developing expertise in navigating the sophisticated global financial landscape. The curriculum includes specialized courses in corporate finance, treasury management, financial derivatives, and international banking that address current challenges in the dynamic financial sector. Through advanced financial case studies, strategic finance projects, and industry collaborations, learners will gain practical experience in applying advanced banking and finance concepts to complex business scenarios. Graduates will be prepared for senior finance roles including relationship managers, investment bankers, credit analysts, and financial strategists where advanced strategic banking and finance expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Information Technology – Advanced',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Provides advanced training in cloud computing, cybersecurity, and enterprise IT systems. Prepares candidates for senior IT roles. This program offers comprehensive training in advanced information technology concepts and strategic applications, emphasizing both theoretical understanding and practical implementation in complex technology environments. Students will master cloud architecture design, cybersecurity frameworks, enterprise systems integration, and IT governance while developing expertise in managing and securing sophisticated technology infrastructures. The curriculum includes specialized courses in DevOps practices, IT service management, data center management, and emerging technologies that address current challenges in the rapidly evolving technology landscape. Through advanced IT simulations, strategic IT projects, and industry collaborations, learners will gain practical experience in applying advanced IT concepts to complex technology scenarios. Graduates will be prepared for senior IT roles including IT managers, systems administrators, cybersecurity analysts, and cloud architects where advanced strategic IT expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Cyber Security Program',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Covers network security, ethical hacking, and data protection. Equips learners to secure IT systems against cyber threats. This program provides comprehensive training in cybersecurity principles and practices, emphasizing both theoretical understanding and practical application in protecting digital assets and infrastructure. Students will master network security protocols, vulnerability assessment techniques, penetration testing methodologies, and incident response procedures while developing expertise in implementing robust security measures for organizations. The curriculum includes specialized courses in cryptography, secure application development, compliance frameworks, and cyber threat intelligence that address current challenges in the evolving cybersecurity landscape. Through security labs, penetration testing exercises, and industry certifications, learners will gain hands-on experience in cybersecurity operations. Graduates will be prepared for careers as cybersecurity analysts, information security officers, penetration testers, and security consultants where foundational cybersecurity expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Application Development',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Teaches programming, software lifecycle, and user-centric app creation. Prepares learners for software development roles. This program offers comprehensive training in application development principles and practices, emphasizing both theoretical understanding and practical implementation in creating software solutions. Students will master multiple programming languages, software design patterns, development methodologies, and user experience principles while developing expertise in creating efficient and user-friendly applications. The curriculum includes specialized courses in mobile app development, web application frameworks, database integration, and software testing that address current challenges in the dynamic software development landscape. Through programming projects, lab work, and industry collaborations, learners will gain hands-on experience in developing real-world applications. Graduates will be prepared for careers as application developers, software engineers, mobile app developers, and web developers where foundational application development expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Internet of Things (IoT)',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Focuses on connected devices, sensors, and smart systems. Equips learners for careers in smart tech and automation. This program provides comprehensive training in Internet of Things technologies and applications, emphasizing both theoretical understanding and practical implementation in creating connected systems. Students will master sensor technologies, communication protocols, data analytics for IoT, and embedded systems while developing expertise in designing and implementing IoT solutions for various domains. The curriculum includes specialized courses in IoT security, cloud platforms for IoT, edge computing, and IoT application development that address current challenges in the rapidly evolving IoT landscape. Through IoT projects, lab work, and industry collaborations, learners will gain hands-on experience in developing IoT solutions. Graduates will be prepared for careers as IoT developers, embedded systems engineers, IoT solution architects, and automation specialists where foundational IoT expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Artificial Intelligence',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Covers machine learning, neural networks, and intelligent systems. Prepares professionals for AI-driven industry applications. This program offers comprehensive training in artificial intelligence technologies and applications, emphasizing both theoretical understanding and practical implementation in creating intelligent systems. Students will master machine learning algorithms, deep learning architectures, natural language processing, and computer vision while developing expertise in designing AI solutions for various domains. The curriculum includes specialized courses in AI ethics, intelligent automation, AI deployment strategies, and emerging AI technologies that address current challenges in the rapidly evolving AI landscape. Through AI projects, lab work, and industry collaborations, learners will gain hands-on experience in developing AI applications. Graduates will be prepared for careers as AI developers, machine learning engineers, AI specialists, and intelligent automation specialists where foundational AI expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Computer Applications',
//                 category: 'ADCP',
//                 duration: 0.5,
//                 semester: 0,
//                 description: 'Introduces key software tools for office productivity and data management. Useful for administrative and support roles. This program provides foundational training in essential computer applications and productivity tools, emphasizing practical skills for workplace efficiency. Students will master office software suites, spreadsheet applications, presentation tools, and basic database management while developing expertise in creating professional documents, analyzing data, and managing information effectively. The curriculum includes specialized courses in word processing, spreadsheet analysis, presentation design, and collaborative tools that address current challenges in modern office environments. Through practical exercises, case studies, and hands-on projects, learners will gain experience in applying computer applications to real workplace scenarios. Graduates will be prepared for administrative roles, office support positions, data entry jobs, and customer service roles where foundational computer application skills are increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'French Language (Online)',
//                 category: 'ADCP',
//                 duration: 0.5,
//                 semester: 0,
//                 description: 'Builds reading, writing, and speaking skills in French. Suitable for academic, travel, or international business use. This program offers comprehensive training in French language skills, emphasizing both linguistic proficiency and cultural understanding for effective communication. Students will master French grammar, vocabulary, pronunciation, and conversational techniques while developing expertise in comprehending and expressing ideas in various contexts. The curriculum includes specialized courses in French for business, French for travel, French literature, and Francophone cultures that address current challenges in communicating effectively in French-speaking environments. Through interactive online exercises, virtual conversations, and cultural immersion activities, learners will gain practical experience in using French in real-world situations. Graduates will be prepared for careers requiring French language skills including international business, tourism, translation services, and diplomatic roles where foundational French language expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1506220926022-cc5c12bdb1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Naturopathy & Yoga Science',
//                 category: 'ADCP',
//                 duration: 1,
//                 semester: 0,
//                 description: 'Teaches natural healing, yoga techniques, and holistic wellness. Ideal for careers in alternative medicine and lifestyle coaching. This program provides comprehensive training in naturopathic principles and yoga practices, emphasizing both theoretical understanding and practical application in promoting holistic health and wellness. Students will master naturopathic diagnostic methods, therapeutic nutrition, herbal medicine, and various yoga techniques while developing expertise in creating personalized wellness plans for diverse individuals. The curriculum includes specialized courses in yoga therapy, stress management, detoxification therapies, and lifestyle counseling that address current challenges in maintaining health and preventing disease naturally. Through practical workshops, yoga sessions, and clinical observations, learners will gain hands-on experience in applying naturopathic and yoga principles. Graduates will be prepared for careers as naturopathic practitioners, yoga therapists, wellness consultants, and lifestyle coaches where foundational naturopathy and yoga expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1506629904605-7f3b0f4e3d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Foreign Language – Japanese',
//                 category: 'ADCP',
//                 duration: 0.5,
//                 semester: 0,
//                 description: 'Introduces basic grammar, vocabulary, and communication in Japanese. Useful for tourism, trade, and cultural exchange. This program offers foundational training in Japanese language skills, emphasizing both linguistic elements and cultural context for effective communication. Students will master Japanese writing systems including Hiragana, Katakana, and basic Kanji, essential vocabulary, grammatical structures, and conversational phrases while developing expertise in everyday communication scenarios. The curriculum includes specialized courses in Japanese for business, Japanese culture, travel Japanese, and basic translation that address current challenges in communicating effectively in Japanese-speaking environments. Through interactive exercises, language labs, and cultural activities, learners will gain practical experience in using Japanese in real-world situations. Graduates will be prepared for careers requiring basic Japanese language skills including tourism, international trade, customer service, and cultural exchange roles where foundational Japanese language expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             }
//         ]
//     },
//     {
//         course: "Certificate Courses",
//         icon: "C&D",
//         imageURL: 'https://images.unsplash.com/photo-1521791136064-7a6e3af3a0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
//         specializations: [
//             {
//                 name: 'Certificate in Modern Persian Language (CMPL)',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'This course builds proficiency in reading, writing, and speaking Modern Persian. It enhances cultural understanding and communication skills for academic or professional use. The program provides comprehensive training in Persian language fundamentals, emphasizing both linguistic accuracy and cultural context for effective communication. Students will master Persian script, essential vocabulary, grammatical structures, and conversational techniques while developing expertise in comprehending and expressing ideas in various contexts. The curriculum includes specialized courses in Persian for academic purposes, Persian literature, business Persian, and Iranian culture that address current challenges in communicating effectively in Persian-speaking environments. Through interactive exercises, language labs, and cultural immersion activities, learners will gain practical experience in using Persian in real-world situations. Graduates will be prepared for careers requiring Persian language skills including diplomacy, international business, translation services, and academic research where foundational Persian language expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1588482364533-9160b6619270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Diploma in Professional Arabic (DPA)',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'A comprehensive program in spoken and written Arabic, designed for professional and academic applications. It emphasizes grammar, vocabulary, and real-world usage. This program offers extensive training in Arabic language skills, emphasizing both linguistic proficiency and cultural understanding for effective communication in professional contexts. Students will master Modern Standard Arabic, essential vocabulary, grammatical structures, and professional terminology while developing expertise in comprehending and expressing ideas in business, diplomatic, and academic settings. The curriculum includes specialized courses in business Arabic, Arabic for media, Arabic correspondence, and Arab culture that address current challenges in communicating effectively in Arabic-speaking environments. Through interactive exercises, language labs, and cultural activities, learners will gain practical experience in using Arabic in real-world professional situations. Graduates will be prepared for careers requiring Arabic language skills including international business, diplomacy, translation services, and journalism where professional Arabic language expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1506220926022-cc5c12bdb1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Diploma in Bakery and Confectionery Technology (DBCT)',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'Covers theoretical and practical aspects of baking and confectionery. Prepares students for careers in commercial kitchens, bakeries, and food industries. This program provides comprehensive training in bakery and confectionery arts and sciences, emphasizing both theoretical knowledge and practical skills in creating high-quality baked goods and confections. Students will master baking principles, ingredient functionality, pastry techniques, and confectionery methods while developing expertise in producing a wide variety of baked products and sweets. The curriculum includes specialized courses in artisan bread baking, cake decoration, chocolate work, and food safety that address current challenges in the bakery and confectionery industry. Through hands-on baking sessions, kitchen simulations, and industry internships, learners will gain practical experience in professional baking environments. Graduates will be prepared for careers as pastry chefs, bakers, confectioners, and bakery managers where foundational bakery and confectionery expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1506220926022-cc5c12bdb1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Computerized Accounting',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'Focuses on modern accounting software tools like Tally and QuickBooks. Equips learners to manage financial records and reports digitally with precision and efficiency. This program provides comprehensive training in computerized accounting systems, emphasizing both theoretical understanding and practical application in managing financial information digitally. Students will master accounting software interfaces, digital bookkeeping techniques, financial report generation, and data management while developing expertise in maintaining accurate and organized financial records using technology. The curriculum includes specialized courses in Tally ERP, QuickBooks, GST taxation, and financial analysis that address current challenges in modern accounting practices. Through software simulations, practical exercises, and case studies, learners will gain hands-on experience in using accounting software for real-world financial scenarios. Graduates will be prepared for careers as accountants, bookkeepers, accounting assistants, and financial clerks where computerized accounting expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Advanced Digital Marketing',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'Teaches SEO, SEM, social media marketing, analytics, and content strategy. Ideal for those looking to excel in online branding and digital business growth. This program offers comprehensive training in digital marketing strategies and techniques, emphasizing both theoretical understanding and practical application in promoting products and services online. Students will master search engine optimization, pay-per-click advertising, social media marketing, email marketing, and web analytics while developing expertise in creating integrated digital marketing campaigns. The curriculum includes specialized courses in mobile marketing, content marketing, conversion optimization, and digital marketing strategy that address current challenges in the rapidly evolving digital landscape. Through digital marketing simulations, campaign projects, and industry certifications, learners will gain hands-on experience in implementing digital marketing tactics. Graduates will be prepared for careers as digital marketing specialists, social media managers, SEO analysts, and content strategists where advanced digital marketing expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Android App Development',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'Hands-on course covering Java/Kotlin, UI/UX, and Android Studio. Enables learners to design, develop, and deploy functional mobile applications on the Android platform. This program provides comprehensive training in Android application development, emphasizing both theoretical understanding and practical implementation in creating mobile solutions. Students will master Java/Kotlin programming languages, Android SDK components, user interface design principles, and mobile app architecture while developing expertise in building responsive and user-friendly Android applications. The curriculum includes specialized courses in Android fundamentals, advanced Android features, mobile app testing, and app deployment that address current challenges in the dynamic mobile development landscape. Through coding projects, lab work, and app development exercises, learners will gain hands-on experience in creating real-world Android applications. Graduates will be prepared for careers as Android developers, mobile app developers, software engineers, and app designers where foundational Android development expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Certificate Course in GST',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'Offers practical knowledge of Goods and Services Tax law and procedures. Equips learners with skills in tax computation, filing returns, and GST compliance. This program provides comprehensive training in GST regulations and implementation, emphasizing both theoretical understanding and practical application in managing taxation under the GST system. Students will master GST law provisions, tax calculation methods, return filing procedures, and compliance requirements while developing expertise in handling GST-related transactions and documentation. The curriculum includes specialized courses in GST registration, invoicing rules, input tax credit, and GST audits that address current challenges in the GST taxation framework. Through practical exercises, case studies, and software simulations, learners will gain hands-on experience in applying GST principles to real-world business scenarios. Graduates will be prepared for careers as GST practitioners, tax consultants, accountants, and compliance officers where GST expertise is increasingly essential.',
//                 image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             },
//             {
//                 name: 'Business and Finance Professional',
//                 category: 'C&D',
//                 duration: null,
//                 semester: null,
//                 description: 'The Business and Finance Professional certificate course provides foundational knowledge in accounting, financial planning, and business strategy. It equips learners with essential skills to make informed financial decisions and manage business operations effectively. This program offers comprehensive training in business and finance principles, emphasizing both theoretical understanding and practical application in organizational settings. Students will master financial accounting fundamentals, business mathematics, economic principles, and strategic planning while developing expertise in analyzing business performance and making sound financial decisions. The curriculum includes specialized courses in financial management, business communication, business law, and entrepreneurship that address current challenges in the dynamic business environment. Through case studies, business simulations, and practical projects, learners will gain experience in applying business and finance concepts to real-world scenarios. Graduates will be prepared for careers as business analysts, financial assistants, accounting clerks, and management trainees where foundational business and finance expertise is increasingly valuable.',
//                 image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
//             }
//         ]
//     }
// ]

export const studentsFeedback = [
  {
    name: "Vijay Kumar",
    course: "BLisc",
    rating: 4,
    profilePicture:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747577410/student1_ihjaba.jpg",
    feedBack:
      "My experience with WIMSE educational consultancy has been superb! I received comprehensive support for my education, and I'm incredibly grateful for their guidance and resources.",
  },
  {
    name: "Kishore",
    course: "MBA",
    rating: 5,
    profilePicture:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747577409/student2_eueple.jpg",
    feedBack:
      "Thanks to WIMSE Institute of Management and Science, I successfully completed my MBA. When I joined, my academic confidence was low, but WIMSE truly motivated me to excel in my studies.",
  },
  {
    name: "Venkata Ramana",
    course: "MCA",
    rating: 4.5,
    profilePicture:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739896689/1712166883930_v4cqwv.jpg",
    feedBack:
      "The faculty at WIMSE Institute of Management and Science is incredibly helpful. Deciding to study at WIMSE has been one of my best decisions, and I strongly recommend this institute to everyone!",
  },
  {
    name: "Pillimetla Surendra",
    course: "Hotel Management",
    rating: 4,
    profilePicture:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1739896692/1708097843118_ikrato.jpg",
    feedBack:
      "WIMSE Institute of Management and Science played a crucial role in helping me complete my Hotel Management program. Their personalized support and excellent faculty made a significant difference in my academic journey.",
  },
  {
    name: "Rina desai",
    course: "BSc",
    rating: 5,
    profilePicture: "",
    feedBack:
      "My experience with WIMSE Institute of Management and Science has been outstanding. They provided all the necessary resources and support for my BSc program, exceeding all my expectations.",
  },
  {
    name: "Jilani Basha",
    course: "MA",
    rating: 4.5,
    profilePicture: "",
    feedBack:
      "WIMSE's guidance was invaluable for my MA studies. The structured approach and dedicated faculty helped me achieve my academic goals with confidence. Highly recommended for anyone seeking quality education.",
  },
];

export const universitiesData = [
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402535/Andhra-university-image_igje1c.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402597/Mangalayatan-DES.jpg_lgri5w.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402597/SGVU-DES.jpg_duz7x8.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402608/Jain-N.jpg_ivgi1p.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402547/mizoram-university-home_nqkoo5.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402604/LPU-N.jpg_u4u3q5.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402603/Uttaranchal-DES.jpg_kielh9.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402603/Manipal-DES.jpg_psym37.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402603/Sikkim-Manipal-university-DES.jpg_smlo38.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402603/amity-university_vsqb6s.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402602/DPU-Home.jpg_ofm0ye.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402602/UPES-DES.jpg_zmfzad.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402602/vgu-for-home-page-DES_eaqasj.webp",
    website: "",
  },
  {
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740402601/Vignan-DES.jpg_z1i7ei.webp",
    website: "",
  },
];

// {
//     qNo: 1,
//     question: 'Is distance education eligible for job?',
//     ans: <p><mark className="marked-text">YES! Degrees obtained through the online or the open and distance learning (ODL) mode are completely valid if you are applying for government jobs.</mark> If you are applying for a job in the central government, then you must know that you have to appear for and clear an entrance examination to get the job.</p>
// },
// {
//     qNo: 2,
//     question: 'Can is use distance Degree as valid Degree?',
//     ans: <p><mark className="marked-text">As per UGC guidelines, degrees obtained through recognized online and distance education programs are equally valid for employment or higher studies in both the private and government sectors.</mark></p>
// },
// {
//     qNo: 3,
//     question: 'So can i try for forign cources with distantion course even after i failed my degree?',
//     ans: <p><mark className="marked-text">As per UGC guidelines, degrees obtained through recognized online and distance education programs are equally valid for employment or higher studies in both the private and government sectors.</mark></p>
// },
// {
//     qNo: 4,
//     question: 'Is distance education eligible for job?',
//     ans: <p><mark className="marked-text">YES! Degrees obtained through the online or the open and distance learning (ODL) mode are completely valid if you are applying for government jobs.</mark> If you are applying for a job in the central government, then you must know that you have to appear for and clear an entrance examination to get the job.</p>
// },
// {
//     qNo: 5,
//     question: 'What is the eligibility for distance eduction online?',
//     ans: <p><mark className="marked-text">YES! Degrees obtained through the online or the open and distance learning (ODL) mode are completely valid if you are applying for government jobs.</mark> If you are applying for a job in the central government, then you must know that you have to appear for and clear an entrance examination to get the job.</p>
// },

export const CoursesList = [
  {
    title: "DISTANCE EDUCATION",
    about:
      "Pursue your degree with flexibility through our distance education programs, designed for working professionals and students seeking quality education from anywhere, with comprehensive support and accredited courses.",
  },
  {
    title: "REGULAR ADMISSIONS",
    about:
      "Secure your spot in top universities with our expert guidance for regular admissions, offering personalized counseling, application support, and access to a wide range of academic programs.",
  },
  {
    title: "CREDIT TRANSFER SYSTEM",
    about:
      "Seamlessly transfer your existing credits to continue your education at leading institutions, with our dedicated assistance ensuring a smooth transition and maximum credit recognition.",
  },
  {
    title: "ABROAD ADMISSIONS",
    about:
      "Achieve your global education dreams with our abroad admissions service, providing end-to-end support for international university applications, visa processes, and cultural adaptation.",
  },
];
// {
//     title: "DEGREE PROGRAMES",
//     items: [
//       'Master In Arts',
//       'Master In Commerce',
//       'Master in Science',
//       'Business Administration'
//     ]
//   },
//   {
//     title: "DISTANCE EDUCATION",
//     items: [
//       'Mechanical Engineering',
//       'Civil Engineering',
//       'Chemical Engineering',
//       'Information Technology',
//       'Programming',
//       'Hardware',
//       'Networking',
//       'Cyber Security'
//     ]
//   },
//   {
//     title: "ONLINE COURSES",
//     items: [
//       'Hospitality Management',
//       'Culinary Arts',
//       'Tourism Management',
//       'Event Management'
//     ]
//   }

// export const CoursesList = [
//     {
//       title: "Master of Science (M.Sc)",
//       items: "Botany, Zoology, Microbiology, Physics, Chemistry, Mathematics, Statistics, Food & Nutrition, Computer Science, Psychology"
//     },
//     {
//       title: "Master of Arts (M.A)",
//       items: "English, Hindi, Telugu, Sanskrit, Economics, History, Political Science, Sociology, Journalism and Mass Communication, Human Resource Management"
//     },
//     {
//       title: "Master of Business Administration (MBA)",
//       items: "Information Technology Management, Data Science, Petroleum & Natural Gas Management, Systems & Operations Management, Healthcare Management, IT & FinTech, AI & Machine Learning, Agri-Business Management"
//     },
//     {
//       title: "Bachelor Degree",
//       items: "BCA, B.Com, BBA, B.A, B.Sc"
//     }
//   ];

export const studentsQandA = [
  {
    qNo: 6,
    question: "Can I continue my degree after 10 years?",
    ans: (
      <p>
        <mark className="marked-text">
          Absolutely yes. You can continue your degree even after ten years
          because education sees no age.
        </mark>{" "}
        Moreover, to make this process easier for you, we have a dedicated team
        of professionals who will help you in your journey. Therefore, we can
        help you with your graduation.
      </p>
    ),
  },
  {
    qNo: 7,
    question: "Is a distance degree valid for government jobs?",
    ans: (
      <p>
        <mark className="marked-text">
          Yes, distance degrees are generally valid for government jobs in
          India, provided they are from a UGC-DEB approved university.
        </mark>{" "}
        The central government has made it clear that qualifications acquired
        through distance learning are recognized for employment purposes.
      </p>
    ),
  },
  {
    qNo: 8,
    question: "Is Distance Graduation Valid or Not?",
    ans: (
      <p>
        <mark className="marked-text">
          You can rest assured that distance education in India is valid.
          However, you need to make sure that your university is
          UGC-DEB-approved.
        </mark>{" "}
        Moreover, UGC-DEB-approved universities give you legitimate and fair
        degrees. Therefore, you can apply for government jobs as well.
      </p>
    ),
  },
  {
    qNo: 9,
    question: "How do I attend classes online?",
    ans: (
      <p>
        <mark className="marked-text">
          Classes are typically delivered through learning management systems
          (LMS) like Moodle, Google Classroom, or proprietary platforms.
        </mark>{" "}
        You’ll log in with your credentials to access lectures, readings,
        assignments, and participate in discussions.
      </p>
    ),
  },
  {
    qNo: 10,
    question: "What is a Learning Management System (LMS)?",
    ans: (
      <p>
        An LMS is an online platform used to deliver courses, track progress,
        manage resources, conduct discussions, and facilitate communication
        between students and teachers.
      </p>
    ),
  },
  {
    qNo: 11,
    question: "Will I receive a certificate after completing an online course?",
    ans: (
      <p>
        <mark className="marked-text">
          Yes, most online courses offer a certificate of completion.
        </mark>{" "}
        Degree programs issue diplomas just like traditional programs — often
        without mentioning "online" on the certificate.
      </p>
    ),
  },
  {
    qNo: 12,
    question: "What are MOOCs?",
    ans: (
      <p>
        MOOCs (Massive Open Online Courses) are free or low-cost courses offered
        by top universities or platforms (like Coursera, edX, FutureLearn)
        available to anyone around the world.
      </p>
    ),
  },
];

export const regulardashBoardData = [
  {
    title: "Explore Top Colleges",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486659/explore-college.png_nqzmkw.webp",
    description:
      "Choose among the Best Colleges in India based on location, fees offered, counseling, and much more. Get admission",
  },
  {
    title: "courses",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486659/courses.png_lbu6th.webp",
    description:
      "Find out all your options among 300+ courses to choose from. Know all about the eligibility criteria, admission process, and more.",
  },
  {
    title: "Exams",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486658/exams.png_e4qh8k.webp",
    description:
      "One-stop solution for all your queries related to Competitive Exams for your dream college and Government Exams for your dream job",
  },
  {
    title: "Get Admission",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486658/admission.png_ksqodr.webp",
    description:
      "Wondering how to get admission to your dream college? Find all about eligibility criteria, admission process, application process, and more. e",
  },
  {
    title: "STUDY MBBS",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486658/study-mbbs.png_linzw0.webp",
    description:
      "Get complete information on all national and international Olympiads. For more information, inquire with us and get free suggestions.",
  },
  {
    title: "Student Credit Card",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486658/student-card.png_jwovu2.webp",
    description:
      "All you need to know about Student Credit CarYojanana. For more information, inquire with us and get free suggestions.",
  },
];

export const regularCountriesData = [
  {
    country: "Kazakhstan",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486659/bangladesh.png_yziag2.webp",
  },
  {
    country: "Kyrgyzstan",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486659/kazakistan.png_wvlqxj.webp",
  },
  {
    country: "Georgia",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486658/gorgia.png_be5yrb.webp",
  },
  {
    country: "Bangaldesh",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486659/bangladesh.png_yziag2.webp",
  },
  {
    country: "Russia",
    image:
      "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1747486658/russia.png_uteqx5.webp",
  },
];

// Cloudinary optimization parameters
const CLOUDINARY_OPTIMIZE = "f_webp,q_auto,w_auto,dpr_auto";

// Top cities array with optimized URLs
export const topCities = [
  {
    title: "Bengaluru",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879684/benguluru2_p83f5l.jpg`,
  },
  {
    title: "Delhi",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879685/delhi_k9e4ud.jpg`,
  },
  {
    title: "Mumbai",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879689/mumbai_azv16d.jpg`,
  },
  {
    title: "Kolkata",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879686/kolkatha_vszibk.jpg`,
  },
  {
    title: "Chennai",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879686/chennai_k7k681.jpg`,
  },
  {
    title: "Hyderabad",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879685/hyd_ltr3gn.jpg`,
  },
  {
    title: "Ahmedabad",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879683/ahmadabad_yzz2e2.jpg`,
  },
  {
    title: "Pune",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879690/Pune_x6ajvs.jpg`,
  },
  {
    title: "Surat",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879690/Surat_plzx8n.jpg`,
  },
  {
    title: "Jaipur",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879685/Jaipur_dsqxsr.jpg`,
  },
  {
    title: "Lucknow",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879688/Lucknow_muc4io.jpg`,
  },
  {
    title: "Kanpur",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879687/Kanpur_dimh5d.jpg`,
  },
  {
    title: "Nagpur",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879690/Nagpur_asaem0.jpg`,
  },
  {
    title: "Indore",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879674/Indore_optimized_450_dixeco.jpg`,
  },
  {
    title: "Visakhapatnam",
    imgUrl: `https://res.cloudinary.com/dpk6qsn0e/image/upload/${CLOUDINARY_OPTIMIZE}/v1760879675/Vishakapatnam_optimized_450_pijcjl.jpg`,
  },
];

// export const coursesConstants = [
//     "M.A","M.Sc","MBA","B.D"
// ]

// {
//     name: 'Bachelor of Arts(B.A)',
//     category: 'UG',
//     duration: 3,
//     semister: 6,
//     eligibility:"B.Sc. in Botany or a related field",
//     discription: 'M.Sc. Botany is a  postgraduate program focused on plant biology, including physiology, ecology, and biotechnology.',
//     image: 'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740403385/WhatsApp_Image_2025-02-24_at_18.37.33_f83a8656_avexnv.jpg'
// },
// {
//     name: 'Bachelor of Commerce(B.Com)',
//     category: 'UG',
//     duration: 3,
//     semister: 6,
//     discription: 'The subjects included in a Bachelor of Commerce degree program are in high demand by financial institutions.',
//     image: 'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740406298/WhatsApp_Image_2025-02-24_at_1.58.00_PM_abne4l.jpg'
// },
// {
//     name: 'Bachelor of Business Administration (BBA)',
//     category: 'UG',
//     duration: 3,
//     semister: 6,
//     discription: 'It provides students with foundational knowledge in various business disciplines, including finance, marketing.',
//     image: 'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740403631/WhatsApp_Image_2025-02-24_at_18.28.35_3043eebc_zwgirj.jpg'
// },
// {
//     name: 'Bachelor of Computer Applications(BCA)',
//     category: 'UG',
//     duration: 3,
//     semister: 6,
//     discription: 'A Bachelor of Computer Applications (BCA) is an undergraduate degree focused on computer science, programming.',
//     image: 'https://res.cloudinary.com/dpk6qsn0e/image/upload/v1740403631/WhatsApp_Image_2025-02-24_at_18.31.12_cd951343_dpqgbe.jpg'
// },

export const researchAreas = [
  {
    id: 1,
    name: "Commerce & Management Department",
    icon: <FaBuildingColumns />,
    color: "from-blue-600 to-indigo-700",
    description:
      "Commerce & Business Management, Economics, Business Management, Public Administration, Tourism Management, Hotel Management",
  },
  {
    id: 2,
    name: "Computer Science & IT Department",
    icon: <FaComputer />,
    color: "from-blue-500 to-cyan-600",
    description:
      "Computer Science Engineering, Electronics and Communication Engineering, Information-related fields",
  },
  {
    id: 3,
    name: "Engineering & Technology Department",
    icon: <FaGears />,
    color: "from-gray-500 to-slate-700",
    description:
      "Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics and Communication Engineering",
  },
  {
    id: 4,
    name: "Science Department",
    icon: <FaMicroscope />,
    color: "from-purple-500 to-indigo-600",
    description:
      "Physics, Chemistry, Mathematics, Statistics, EVS (Environmental Science)",
  },
  {
    id: 5,
    name: "Life Sciences Department",
    icon: <FaDna />,
    color: "from-green-500 to-teal-600",
    description:
      "Biology, Botany, Zoology, Microbiology, Biotechnology, Biochemistry, Agriculture, Forensic Sciences",
  },
  {
    id: 6,
    name: "Social Sciences Department",
    icon: <FaUsers />,
    color: "from-orange-500 to-amber-600",
    description:
      "Sociology, Psychology, Clinical Psychology, Political Science, Geography, History, Social Work, Philosophy",
  },
  {
    id: 7,
    name: "Arts & Humanities Department",
    icon: <FaBookOpen />,
    color: "from-pink-500 to-rose-600",
    description:
      "English, Hindi, Sanskrit, Punjabi, Journalism & Mass Communication, Music, Fine Arts",
  },
  {
    id: 8,
    name: "Education & Teaching Department",
    icon: <FaChalkboardUser />,
    color: "from-teal-500 to-cyan-600",
    description: "Education, Physical Education, Yoga",
  },
  {
    id: 9,
    name: "Law Department",
    icon: <FaScaleBalanced />,
    color: "from-gray-700 to-gray-900",
    description: "Law",
  },
  {
    id: 10,
    name: "Home & Health Sciences Department",
    icon: <FaHouseMedical />,
    color: "from-rose-500 to-red-600",
    description: "Home Science, Foods and Nutrition",
  },
  {
    id: 11,
    name: "Library & Information Science Department",
    icon: <FaBook />,
    color: "from-amber-500 to-yellow-600",
    description: "Library & Information Science",
  },
];
export const phdRoadmap = [
  {
    id: 1,
    step: "01",
    title: "Entrance Exam",
    description: "Candidates must qualify the entrance test.",
    icon: <FaPenToSquare />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    step: "02",
    title: "Admission Form",
    description:
      "Applicants need to fill and submit the official Ph.D. admission",
    icon: <FaFileLines />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 3,
    step: "03",
    title: "Fee",
    description: "Admission and registration fees to confirm enrollment.",
    icon: <FaDollarSign />,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    step: "04",
    title: "Ph.D. Provisional Registration Letter",
    description:
      "The university issues a provisional registration letter after admission approval.",
    icon: <FaFileSignature />,
    color: "from-pink-500 to-red-600",
  },
  {
    id: 5,
    step: "05",
    title: "Course Work",
    description:
      "coursework related to research methodology and subject specialization.",
    icon: <FaChalkboardUser />,
    color: "from-red-500 to-orange-600",
  },
  {
    id: 6,
    step: "06",
    title: "Synopsis Approval",
    description: "Get approval for the research topic",
    icon: <FaFileCircleCheck />,
    color: "from-orange-500 to-yellow-600",
  },
  {
    id: 7,
    step: "07",
    title: "Synopsis Letter",
    description:
      "candidate submits a synopsis outlining the proposed research topic.",
    icon: <FaScroll />,
    color: "from-yellow-500 to-green-600",
  },
  {
    id: 8,
    step: "08",
    title: "Research Work",
    description: "Provide a brief summary of research.",
    icon: <FaBook />,
    color: "from-green-500 to-teal-600",
  },
  {
    id: 9,
    step: "09",
    title: "Progress Report",
    description: "Submit periodic research progress reports.",
    icon: <FaClipboardList />,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 10,
    step: "10",
    title: "Thesis General Publication",
    description:
      "Thesis General Publication(Two), Seminar Certificate (Two), Affidavit",
    icon: <FaFileLines />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 11,
    step: "11",
    title: "Master Thesis Submission",
    description: "Submit the final Ph.D. thesis.",
    icon: <FaGraduationCap />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 12,
    step: "12",
    title: "Viva",
    description: "Defend research in viva voce.",
    icon: <FaUserGraduate />,
    color: "from-indigo-500 to-purple-600",
  },
];