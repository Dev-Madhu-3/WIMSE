import {
  FaBuildingColumns,
  FaGraduationCap,
  FaMicroscope,
  FaDna,
  FaGlobe,
  FaFileLines,
  FaDollarSign,
  FaClipboardList,
  FaUserGraduate,
  FaPenToSquare,
  FaFileSignature,
  FaScroll,
  FaFileCircleCheck,

  // ✅ ADD THESE (FA6-safe replacements)
  FaGears,
  FaSeedling,
  FaUsers,
  FaBookOpen,
  FaComputer,
  FaFlask,
  FaBrain,
  FaChartLine,
  FaChalkboardUser,
  FaScaleBalanced,
  FaHouseMedical,
  FaBook,
  FaEarthAsia,
  FaRobot,
  FaLanguage,
  FaPalette,
} from "react-icons/fa6";

import { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../../Context/context";
import { Fade } from "react-awesome-reveal";

const PhDRoute = () => {
  const {
    openedApplyForm,
    changeApplyFormStatus,
    updateCourceName,
    changeFormTitle,
  } = useContext(AppContext);

  const onTriggerApply = (name) => {
    changeApplyFormStatus(!openedApplyForm);
    updateCourceName("");
    changeFormTitle(name);
  };

  // Dummy data for top universities
  // const topUniversities = [
  //   {
  //     id: 1,
  //     name: "Stanford University",
  //     location: "Stanford, USA",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     ranking: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "MIT",
  //     location: "Cambridge, USA",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     ranking: 2,
  //   },
  //   {
  //     id: 3,
  //     name: "Harvard University",
  //     location: "Cambridge, USA",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     ranking: 3,
  //   },
  //   {
  //     id: 4,
  //     name: "Oxford University",
  //     location: "Oxford, UK",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1589923268447-56fd5dc034b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     ranking: 4,
  //   },
  //   {
  //     id: 5,
  //     name: "Cambridge University",
  //     location: "Cambridge, UK",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1598300042245-d891c7cf947d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     ranking: 5,
  //   },
  //   {
  //     id: 6,
  //     name: "ETH Zurich",
  //     location: "Zurich, Switzerland",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     ranking: 6,
  //   },
  // ];

  // Research areas
const researchAreas = [
  {
    id: 1,
    name: "Computer Science & AI",
    icon: <FaComputer />,
    color: "from-blue-500 to-cyan-600",
    description: "AI, Machine Learning, Quantum Computing, Cybersecurity",
  },
  {
    id: 2,
    name: "Data Science & Analytics",
    icon: <FaChartLine />,
    color: "from-indigo-500 to-blue-600",
    description: "Big Data, Statistical Modeling, Data Visualization",
  },
  {
    id: 3,
    name: "Engineering & Technology",
    icon: <FaGears />,
    color: "from-gray-500 to-slate-700",
    description: "Civil, Mechanical, Electrical, Electronics & Communication",
  },
  {
    id: 4,
    name: "Physics",
    icon: <FaMicroscope />,
    color: "from-purple-500 to-indigo-600",
    description: "Quantum Physics, Astrophysics, Particle Physics",
  },
  {
    id: 5,
    name: "Chemistry & Materials Science",
    icon: <FaFlask />,
    color: "from-red-500 to-pink-600",
    description: "Organic Chemistry, Nanotechnology, Materials Science",
  },
  {
    id: 6,
    name: "Life Sciences & Biotechnology",
    icon: <FaDna />,
    color: "from-green-500 to-teal-600",
    description: "Biotechnology, Microbiology, Biochemistry, Agriculture",
  },
  {
    id: 7,
    name: "Biomedical & Health Sciences",
    icon: <FaHouseMedical />,
    color: "from-rose-500 to-red-600",
    description: "Genomics, Public Health, Nutrition, Clinical Research",
  },
  {
    id: 8,
    name: "Neuroscience & Psychology",
    icon: <FaBrain />,
    color: "from-yellow-500 to-orange-600",
    description: "Cognitive Science, Clinical Psychology, Brain Imaging",
  },
  {
    id: 9,
    name: "Environmental & Earth Sciences",
    icon: <FaEarthAsia />,
    color: "from-green-600 to-lime-600",
    description: "EVS, Climate Change, Geography, Sustainability",
  },
  {
    id: 10,
    name: "Agricultural & Food Sciences",
    icon: <FaSeedling />,
    color: "from-lime-500 to-green-700",
    description: "Agriculture, Food Technology, Nutrition",
  },
  {
    id: 11,
    name: "Commerce & Management",
    icon: <FaBuildingColumns />,
    color: "from-blue-600 to-indigo-700",
    description:
      "Business Management, Economics, Tourism, Public Administration",
  },
  {
    id: 12,
    name: "Social Sciences",
    icon: <FaUsers />,
    color: "from-orange-500 to-amber-600",
    description:
      "Sociology, Political Science, History, Social Work, Philosophy",
  },
  {
    id: 13,
    name: "Arts & Humanities",
    icon: <FaBookOpen />,
    color: "from-pink-500 to-rose-600",
    description:
      "Languages, Literature, Journalism, Philosophy, Cultural Studies",
  },
  {
    id: 14,
    name: "Languages & Literature",
    icon: <FaLanguage />,
    color: "from-purple-500 to-pink-600",
    description: "English, Hindi, Sanskrit, Regional Languages",
  },
  {
    id: 15,
    name: "Fine Arts & Performing Arts",
    icon: <FaPalette />,
    color: "from-fuchsia-500 to-purple-600",
    description: "Music, Dance, Fine Arts, Visual Arts",
  },
  {
    id: 16,
    name: "Education & Teaching",
    icon: <FaChalkboardUser />,
    color: "from-teal-500 to-cyan-600",
    description: "Education, Physical Education, Yoga",
  },
  {
    id: 17,
    name: "Law & Legal Studies",
    icon: <FaScaleBalanced />,
    color: "from-gray-700 to-gray-900",
    description: "Law, Legal Research, Human Rights",
  },
  {
    id: 18,
    name: "Library & Information Science",
    icon: <FaBook />,
    color: "from-amber-500 to-yellow-600",
    description: "Information Management, Archival Science",
  },
  {
    id: 19,
    name: "Robotics & Automation",
    icon: <FaRobot />,
    color: "from-cyan-500 to-blue-700",
    description: "Robotics, Automation, Embedded Systems, IoT",
  },
];

  // PhD services
  const phdServices = [
    {
      id: 1,
      title: "Research Proposal Writing",
      description:
        "Expert guidance in crafting compelling research proposals that align with your academic goals and interests.",
      icon: <FaBook />,
    },
    {
      id: 2,
      title: "University Selection",
      description:
        "Personalized assistance in identifying and applying to universities that match your research interests.",
      icon: <FaBuildingColumns />,
    },
    {
      id: 3,
      title: "Funding & Scholarships",
      description:
        "Comprehensive support in securing funding, scholarships, and assistantships for your doctoral studies.",
      icon: <FaGraduationCap />,
    },
    {
      id: 4,
      title: "Publication Support",
      description:
        "Professional guidance on research methodology, data analysis, and academic writing for publications.",
      icon: <FaGlobe />,
    },
  ];

  // PhD Roadmap steps
  // PhD Roadmap steps (12 steps total)

  const phdRoadmap = [
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
      title: "Entrance Exam",
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
      title: "research work",
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
      title: "Thesis General",
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
      title: "Thesis General",
      description: "Defend research in viva voce.",
      icon: <FaUserGraduate />,
      color: "from-indigo-500 to-purple-600",
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Pursue{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
                Excellence
              </span>{" "}
              with a PhD
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.p
              className="text-lg text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Embark on a journey of discovery and innovation with our
              comprehensive PhD program support. Our team of experienced
              academic mentors and research consultants is dedicated to helping
              you find the perfect doctoral program that aligns with your
              research interests and career aspirations.
            </motion.p>

            <motion.button
              onClick={() => onTriggerApply("Start Your PhD Journey")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Start Your PhD Journey
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Ph.D.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
                Admissions
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>

            <motion.p
              className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Our Ph.D. program empowers scholars to explore new ideas and
              create meaningful research. Take the next step in your academic
              career and make a lasting impact.
            </motion.p>
          </div>

          <div className="relative">
            {/* Roadmap Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {phdRoadmap.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connecting Line for Mobile */}
                  {index < phdRoadmap.length - 1 && (
                    <div className="md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-green-500 transform -translate-x-1/2"></div>
                  )}

                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl h-full">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 text-white text-xl relative`}
                    >
                      {item.icon}
                      <span className="absolute -top-2 -right-2 bg-white text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <motion.button
              onClick={() => onTriggerApply("Apply Now")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              APPLY NOW
            </motion.button>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              TOP{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
                UNIVERSITIES
              </span>{" "}
              FOR PhD RESEARCH
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              {topUniversities.map((university) => (
                <div
                  key={university.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={university.imgUrl}
                      alt={university.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="font-bold text-purple-700">
                        #{university.ranking}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-bold text-xl text-white">
                        {university.name}
                      </p>
                      <p className="text-sm text-gray-200">
                        {university.location}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <motion.button
                      onClick={() =>
                        onTriggerApply(`Enquiry: ${university.name}`)
                      }
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      viewport={{ once: true }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </section> */}

      {/* Research Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Explore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Research Areas
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>

            <motion.p
              className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Discover cutting-edge research opportunities across diverse fields
              of study.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            {researchAreas.map((area) => (
              <motion.div
                key={area.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
              >
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {area.name}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PhD Services Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
                PhD Services
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>

            <motion.p
              className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Comprehensive support throughout your doctoral journey
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            {phdServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center mb-6 text-purple-600 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="w-16 h-1 bg-white mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.7 }}
          ></motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            BEGIN YOUR DOCTORAL JOURNEY
          </motion.h2>

          <motion.p
            className="text-xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join the ranks of researchers making groundbreaking discoveries
          </motion.p>

          <motion.p
            className="text-lg mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Our expert consultants will guide you through every step of the PhD
            application process, from selecting the right program to securing
            funding.
          </motion.p>

          <motion.button
            onClick={() => onTriggerApply("Start PhD Consultation")}
            className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Start Your Consultation
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default PhDRoute;
