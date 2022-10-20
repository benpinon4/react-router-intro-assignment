import NavBar from "./Components/NavBar"
import { Outlet } from "react-router-dom"
import {useState} from 'react'

 const App = () => {

    const [signupList, setSignupList] = useState([])
    const handleAddSignUp = (firstName,lastName,email) => {
        const newSignUp = {
            firstName,
            lastName,
            email,
        }

        setSignupList(
            [...signupList,newSignUp]
        )
    }

    return(
        <>
        <div className="App">
        <NavBar />
        <Outlet context={[signupList, handleAddSignUp]} />
        </div>
        </>
    )
    
}

export default App