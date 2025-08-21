import { FaLocationDot } from "react-icons/fa6"
import { useContext } from 'react'
import AppContext from '../../Context/context'
import { regularCountriesData, regulardashBoardData, topCities } from '../../assets/data'

const RegularRoute = () => {
    const { openedApplyForm, changeApplyFormStatus, updateCourceName } = useContext(AppContext)

    const onTriggerApply = (name) => {
        changeApplyFormStatus(!openedApplyForm)
        updateCourceName('')
    }
    return (
        <main className='bg-white flex flex-col items-center gap-10'>
            <section className='flex flex-col items-center justify-center m-5 sm:w-[85%] w-5/6'>
                <h2 className='text-slate-700 sm:text-2xl text-4xl font-medium text-center'> Welcome to <span className='text-blue-700'>WIMSE</span> Educational consultancy</h2>
                <p className='text-md text-slate-600 sm:text-[1rem] mt-5 sm:text-start text-center' >
                    We are a team of experienced consultants who are passionate about helping students achieve their academic goals and reach their full potential.
                    Our institute was founded in 1995 with the mission of providing personalized and comprehensive admission consulting services to students applying to college,
                    graduate school, business school, law school, medical school, and other professional programs. We understand that the admission process can be overwhelming and stressful,
                    and we are here to guide you through every step of the way.
                    <br />
                    <br />
                    Our team consists of former admissions officers, academic advisors, and industry experts who have years of experience in the field.
                    We bring a wealth of knowledge and insight to the table and are committed to helping you craft a compelling and authentic application that showcases your unique strengths, accomplishments, and aspirations.
                    Our services include one-on-one consultations, application review and editing, essay coaching, interview preparation, and more.
                    We work with you to create a customized plan that meets your individual needs and goals. At our admission consulting company, we believe that every student has the potential to succeed,
                    and we are dedicated to helping you unlock that potential.
                    We look forward to working with you and helping you achieve your dreams!
                </p>
            </section>
            <section className='sm:w-[90%] w-5/6'>
                <h2 className='text-4xl font-bold sm:text-2xl mb-10 text-slate-700 text-center'>TOP CITIES YOU CAN <span className='text-[#61387e]'>STUDY WITH US</span> IN INDIA</h2>
                <div className='flex flex-wrap justify-center gap-10'>
                    {topCities.map((city) => (
                        <div className='w-[320px] flex flex-col bg-white shadow-md rounded transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg group'>
                            <div className='relative h-50 w-full bg-gradient-to-r from-[#2a2a2a] to-[#5d007c] rounded flex items-center justify-center overflow-hidden'>
                                <img className='w-[20rem] h-[10rem] rounded transition-transform duration-700 ease-in-out group-hover:scale-125' src={city.imgUrl} alt={city.title} />
                                <div className='absolute rounded-br-md px-2 bg-[#1b1b1ba1] top-0 left-0 flex items-center gap-2'><FaLocationDot className="text-white" /><p className='font-medium text-xl text-white'>{city.title}</p></div>
                            </div>
                            {/* <div className='flex justify-between items-end p-5'>
                                <div className='flex flex-col gap-2'>
                                </div>
                            </div> */}
                            <button onClick={onTriggerApply} className='justify-self-end text-sm text-slate bg-blue-200 rounded mt-3 py-2 px-3 hover:text-slate-200 hover:bg-red-600 transition-all duration-300 ease-in-out'>Enquiry Now</button>
                        </div>
                    ))}
                </div>
            </section>
            {/* <section className='sm:w-[90%] w-5/6'>
                    <h2 className='text-4xl font-bold sm:text-2xl mb-10 text-slate-700 text-center'>TOP <span className='text-[#61387e]'>COLLEGES</span> IN INDIA</h2>
                    <div className='flex flex-wrap justify-center gap-10'>
                        {regularUniversities.map`((university) => (
                            <div className='w-[320px] flex flex-col bg-white p-2 shadow-md rounded transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg group'>
                                <div className='h-50 w-full bg-gradient-to-r from-[#2a2a2a] to-[#5d007c] rounded flex items-center justify-center overflow-hidden'>
                                    <img className='w-[93%] h-[90%] rounded transition-transform duration-700 ease-in-out group-hover:scale-125' src={university.imgUrl} alt='college' />
                                </div>
                                <div className='flex justify-between items-end p-5'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-medium text-xl'>{university.title}</p>
                                        <div className='flex items-center gap-2'><FaLocationDot /><p className='text-sm'>{university.place}</p></div>
                                        <div className='flex items-center gap-2'><MdDateRange /><p className='text-sm'>ESTD {university.since}</p></div>
                                    </div>

                                </div>
                                <button onClick={onTriggerApply} className=' justify-self-end text-sm text-slate-100 bg-red-500 rounded py-2 px-3 hover:text-slate-200 hover:bg-red-600  transition-all duration-300 ease-in-out '>Enquiry Now</button>
                            </div>
                        ))}
                    </div>
                </section> */}
            <section className='text-center sm:w-[90%] w-5/6'>
                <h2 className='text-red-900 sm:text-2xl text-4xl font-bold m-5'>Select Your Study Abroad</h2>
                <p className='text-md sm:text-sm text-slate-600 mb-10 text-center'>
                    Spread your wings, the entire world is open for you !
                    Here is a platform to guide and assist students interested in securing higher education in Georgia
                </p>
                <h2 className='text-slate-700 sm:text-xl text-2xl font-medium mt-5'>COUNTRIES WE PROVIDE SERVICES IN Abroad!</h2>
                <h3 className='text-blue-800 text-xl font-thin'>MBBS in neighbouring countries:</h3>
                <div className='flex justify-center items-center flex-wrap gap-10 m-10'>
                    {regularCountriesData.map((each) => (
                        <div className='text-center'>
                            <img className='w-[170px] my-5' src={each.image} alt='coll' />
                            <p className='bg-blue-100 font-bold text-black m-2 rounded py-0 px-2'>{each.country}</p>
                        </div>
                    ))}
                </div>
                <p className='text-md text-slate-600 m-2 text-center'>With new medical colleges coming up in neighbouring countries, the process to find a seat is much easier—some of the popular choices for Indian students, Students wanting to apply for MBBS abroad would be required to have an aggregate percentage of at least 50%</p>
            </section>
            <section className='sm:w-[95%] w-5/6 text-center'>
                <h2 className='text-blue-900  text-xl font-semibold mb-5'>Well-versed in all aspects of admissions through the Best Admission Consultancy in Nellore</h2>
                <p className='text-md text-slate-600 m-2'>Reset your research strategy with top admission consultancy in Nellore by browsing through
                    our lists of top colleges, exams, courses, and careers based on your area of interest!</p>
                <div className='flex flex-wrap justify-center p-2'>
                    {regulardashBoardData.map((each) => (
                        <div className='flex justify-center p-[50px] sm:p-[1.5rem] items-start gap-2 sm:w-[85%] w-[24rem] border-solid border-[1px] border-slate-300'>
                            <img className='w-[70px] mt-2' src={each.image} alt='' />
                            <div className='text-center'>
                                <h4 className='font-bold text-2xl text-slate-600 sm:text-xl mb-3'>{each.title}</h4>
                                <p className='sm:text-sm text-slate-600 text-md' >
                                    {each.description}
                                </p>
                                {/* <button className='bg-red-500 text-slate-100 rounded px-3 py-1'>Make Enquiry</button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='sm:w-[90%] flex flex-col items-center m-5 w-3/5 text-center'>
                <hr className='text-center w-[60px] bg-blue-400 sm:w-[40px] h-[6px] rounded' />
                <h2 className='text-2xl font-bold m-2 text-slate-300 tracking-wide sm:text-sm'>HOW WE CAN HELP</h2>
                <p className='text-4xl font-bold mb-5 text-slate-900 sm:text-xl'>
                    Well-versed in all aspects of admissions through the Best Admission Consultancy in Nellore
                </p>
                <p className='text-xl font-semibold text-slate-400 sm:text-lg mb-5'>Reset your research strategy with top admission consultancy in Nellore by browsing through our lists
                    of top colleges, exams, courses and careers based on your area of interest!</p>
            </section>
        </main>
    )
}

export default RegularRoute