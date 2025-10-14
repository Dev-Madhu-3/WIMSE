import { Fade } from "react-awesome-reveal";
import { universitiesData } from '../../assets/data';
import AppContext from '../../Context/context';
import { useContext } from 'react';

export const Universities = () => {
    const { openedApplyForm, changeApplyFormStatus, updateCourceName,changeFormTitle } = useContext(AppContext);
    
    const onChangeFormStatus = (value) => {
        changeFormTitle(value);
        updateCourceName('');
        changeApplyFormStatus(!openedApplyForm);
    };

    const UniversityCard = ({ universityData }) => {
        return (
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* University Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                    <img 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        src={universityData.image} 
                        alt='university' 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* University Name */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                        <h3 className="text-xl font-bold">{universityData.name}</h3>
                        <p className="text-sm opacity-80">{universityData.location}</p>
                    </div>
                </div>
                
                {/* Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button
                        onClick={()=>onChangeFormStatus("Know More")}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-slow"
                    >
                        Know More
                    </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
            </div>
        );
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Fade triggerOnce direction="down" duration={500}>
                        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-4">
                            Top Universities We Offer
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            Partnered with prestigious institutions to provide you with quality education and endless opportunities
                        </p>
                    </Fade>
                </div>

                {/* Universities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <Fade triggerOnce cascade damping={0.1} direction="up">
                        {universitiesData.map((university, idx) => (
                            <UniversityCard key={idx} universityData={university} />
                        ))}
                    </Fade>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <Fade triggerOnce direction="up" duration={1000}>
                        <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1">
                            <button 
                                onClick={()=>onChangeFormStatus("Apply Now")}
                                className="block bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
                            >
                                Apply Now
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

const UniversitiesRoute = () => {
    return <Universities />;
};

export default UniversitiesRoute;