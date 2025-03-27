import './index.css'
// import { FaExternalLinkAlt } from "react-icons/fa"
// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Fade } from "react-awesome-reveal"
import { universitiesData } from '../../assets/data'
import AppContext from '../Context/context'






export const Universities = () => {
    const { openedApplyForm,changeApplyFormStatus, updateCourceName } = useContext(AppContext)

    const onChangeFormStatus = () => {
        updateCourceName('')
        changeApplyFormStatus(!openedApplyForm)
    }
    const UniversityCard = ({ universityData }) => {
        return (
            <div className='university-card'>
                <div className='university-image-card'>
                    <img className='university-card-image' src={universityData.image} alt='univesity' />
                </div>
                <div className='university-card-upper-layer'>
                    <button
                        onClick={onChangeFormStatus}
                        className='university-button'
                    // to='https://google.com'
                    >
                        Know More
                        {/* <FaExternalLinkAlt /> */}
                    </button>
                </div>

            </div>
        )
    }

    return (
        <>
            <section className='universities-container'>
                <h1 className='universities-container-heading'>Universities</h1>
                <div className='university-cards-container'>
                    <Fade cascade damping={0.1}>
                        {universitiesData.map((each, idx) => <UniversityCard key={idx} universityData={each} />)}
                    </Fade>
                </div>
            </section>
        </>

    )

}

const UniversitiesRoute = () => {
    return (<>
        <Header />
        <Universities />
        <Footer />
    </>)
}


export default UniversitiesRoute