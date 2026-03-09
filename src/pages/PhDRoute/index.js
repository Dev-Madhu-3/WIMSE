import {
  FaBuildingColumns,
  FaBook,
  FaGraduationCap,
  FaMicroscope,
  FaAtom,
  FaBrain,
  FaDna,
  FaFlask,
  FaChartLine,
  FaGlobe,
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
  const topUniversities = [
    {
      id: 1,
      name: "Stanford University",
      location: "Stanford, USA",
      imgUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ranking: 1,
    },
    {
      id: 2,
      name: "MIT",
      location: "Cambridge, USA",
      imgUrl:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ranking: 2,
    },
    {
      id: 3,
      name: "Harvard University",
      location: "Cambridge, USA",
      imgUrl:
        "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ranking: 3,
    },
    {
      id: 4,
      name: "Oxford University",
      location: "Oxford, UK",
      imgUrl:
        "https://images.unsplash.com/photo-1589923268447-56fd5dc034b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ranking: 4,
    },
    {
      id: 5,
      name: "Cambridge University",
      location: "Cambridge, UK",
      imgUrl:
        "https://images.unsplash.com/photo-1598300042245-d891c7cf947d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ranking: 5,
    },
    {
      id: 6,
      name: "ETH Zurich",
      location: "Zurich, Switzerland",
      imgUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ranking: 6,
    },
  ];

  // Research areas
  const researchAreas = [
    {
      id: 1,
      name: "Computer Science",
      icon: <FaAtom />,
      color: "from-blue-500 to-cyan-600",
      description: "AI, Machine Learning, Quantum Computing",
    },
    {
      id: 2,
      name: "Biomedical Sciences",
      icon: <FaDna />,
      color: "from-green-500 to-teal-600",
      description: "Genomics, Neuroscience, Bioinformatics",
    },
    {
      id: 3,
      name: "Physics",
      icon: <FaMicroscope />,
      color: "from-purple-500 to-indigo-600",
      description: "Quantum Physics, Astrophysics, Particle Physics",
    },
    {
      id: 4,
      name: "Chemistry",
      icon: <FaFlask />,
      color: "from-red-500 to-pink-600",
      description: "Organic Chemistry, Materials Science, Nanotechnology",
    },
    {
      id: 5,
      name: "Neuroscience",
      icon: <FaBrain />,
      color: "from-yellow-500 to-orange-600",
      description: "Cognitive Neuroscience, Neurobiology, Brain Imaging",
    },
    {
      id: 6,
      name: "Data Science",
      icon: <FaChartLine />,
      color: "from-indigo-500 to-blue-600",
      description:
        "Big Data Analytics, Statistical Modeling, Data Visualization",
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

      {/* Top Universities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
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
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
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
      </section>

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
