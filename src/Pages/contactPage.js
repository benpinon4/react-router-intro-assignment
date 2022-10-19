
import NavBar from "../Components/NavBar";
import {useNavigate} from 'react-router-dom'



const ContactPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar />
            <h1>
                ContactPage
            </h1>
            <div className="contactInput-Container">
            <label>First Name</label>
            <input type="text" />
            <br></br>
            <label>Last Name</label>
            <input type="text" />
            <br></br>
            <label>Email</label>
            <input type="text" />
            </div>
            <button onClick={()=>{
                navigate("/")
            }}>Submit</button>
        </div>
    )
}

export default ContactPage;