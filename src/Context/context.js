import { createContext } from "react"

const AppContext = createContext(
    {
        openedApplyForm: false,
        courseName: '',
        activeCourseTab: '',
        changeActiveCourseTab:()=>{},
        changeApplyFormStatus: () => { },
        updateCourceName: () => { }

    }
)

export default AppContext