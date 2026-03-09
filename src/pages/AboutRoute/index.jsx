import './index.css'

const About = () => {

    const aboutComponent = () => {
        return (
            <div className='about-container'>
                <div className="about-container-left">
                    <h1 className="mainHeading">Welcome To WIMSE Educational Consultancy</h1>

                    <hr className="divider" />

                    <h2 className="subheading">
                        25 Years Of Excellence (<span className="trustText">India’s most trusted Admission Consultant</span>)
                    </h2>

                    <p className="description">
                        We are happy to introduce ourselves as the only professional higher education admission consultancy services in India with registered offices in all universities specializing in
                        <span className="highlight"> arts and science</span>,
                        <span className="highlight"> engineering</span>,
                        <span className="highlight"> mbbs</span>,
                        <span className="highlight"> bds</span>,
                        <span className="highlight"> md</span>,
                        <span className="highlight"> ms</span>,
                        <span className="highlight"> abroad admissions</span>.
                    </p>

                    <div className="contactSection">
                        <strong className="contactHeading">Contact Us</strong>
                    </div>
                </div>
                <img className='about-container-img' src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1745744312/about-02_ke6gis.png" alt='about' />
            </div>)
    }


    return (<>{aboutComponent()}</>)

}

export default About