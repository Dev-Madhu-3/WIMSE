import { useState } from "react"
import './index.css'
import { BsChevronDown } from "react-icons/bs"
import {studentsQandA} from '../../assets/data'


const DoubtsSection = () => {
    const [opend, UpdateOpened] = useState(0)

    return (
        <section className='doubts-container'>
            <h1>Frequently Asked Questions</h1>
            {studentsQandA.map((each) => (
                <div key={each.qNo} className='question-answer-cointainer'>
                    <div className='question-container'>
                        <p className='question'>{each.question}</p>
                        <div className="qicon-container">
                            <BsChevronDown
                                className={`qIcon ${each.qNo === opend && 'qIcon-opened'}`}
                                onClick={() => UpdateOpened((prev) => prev !== each.qNo ? each.qNo : 0)}
                            />
                        </div>

                    </div>
                    <div
                        className={`answer-container ${each.qNo === opend && 'answer-container-opened'}`}
                    >
                        <p className='answer'>{each.ans}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default DoubtsSection