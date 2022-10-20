

import { useContext } from 'react'
import {useNavigate, useOutletContext} from 'react-router-dom'
import {useState} from 'react'




const ContactPage = () => {
    const navigate = useNavigate()
  const [signupList, handleAddSignUp] = useOutletContext()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
    return (
        <div>

            <h1>
                Contact Page
            </h1>
            
            <div className="contactInput-Container">
            <label className="inputContainer-Item">First Name: 
            <input type="text" className="inputContainer-Item" onChange={(event)=>{
            setFirstName(event.target.value)
                console.log(firstName)
            }} />
            </label>
            <br></br>
            <label className="inputContainer-Item">Last Name:
            <input type="text" className="inputContainer-Item" onChange={(event)=>{
                setLastName(event.target.value)
                console.log(lastName) }}/>
            </label>
            <br></br>
            <label className="inputContainer-Item">Email:
            <input type="text" className="inputContainer-Item" onChange={(event)=>{
                setEmail(event.target.value)
                console.log(email) }}/>
            </label>
            
            
            
            <br></br>
            </div>
            <button onClick={()=>{
                navigate("/")
                handleAddSignUp(firstName, lastName, email)

               
            }}>Submit</button>
        </div>
    )

}

export default ContactPage;