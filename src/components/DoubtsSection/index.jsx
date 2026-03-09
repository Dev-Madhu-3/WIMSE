import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { studentsQandA } from '../../assets/data';

const DoubtsSection = () => {
    const [opened, setOpened] = useState(0);

    return (
        <section className="bg-primary-color py-[5%] px-[15%] flex flex-col sm:px-[5%]">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            {studentsQandA.map((each) => (
                <div key={each.qNo} className="flex flex-col mx-2.5 max-w-[700px] border-b border-gray-500/10 pb-2.5">
                    <div className="flex justify-between items-center gap-2.5 items-end sm:gap-1.25">
                        <p className="text-[#272727] text-[1.1rem] font-normal mb-1.25 sm:text-[1rem]">{each.question}</p>
                        <div className="p-1 bg-[#cacaca76] rounded-full flex items-center mt-2 justify-center">
                            <BsChevronDown
                                className={`text-[#797979] mb-0.75 transition-transform duration-500 ease-in-out ${each.qNo === opened ? 'rotate-[540deg]' : 'rotate-0'}`}
                                onClick={() => setOpened((prev) => prev !== each.qNo ? each.qNo : 0)}
                            />
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden opacity-0 max-h-0 transition-[max-height] duration-500 ease-out ${each.qNo === opened ? 'max-h-[120px] opacity-100' : ''}`}
                    >
                        <p className="text-[#8e8e8e] text-[1rem] my-2 sm:text-[0.9rem]">{each.ans}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default DoubtsSection;