import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `VroomVroomPlay | ${title}`;
    } , [title])
}

export default useTitle;