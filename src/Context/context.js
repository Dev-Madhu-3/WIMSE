import { createContext } from "react"

const AppContext = createContext(
    {
        openedApplyForm: false,
        courseName: '',
        activeCourseTab: '',
        formTitle: '',
        changeFormTitle:()=>{},
        changeActiveCourseTab:()=>{},
        changeApplyFormStatus: () => { },
        updateCourceName: () => { }

    }
)

export default AppContext