
import SignUpCard from "../Components/SignUpCard"
import { Outlet, useOutletContext, useNavigate } from "react-router-dom"

const SignUpPage = () => {

const [signupList] = useOutletContext()
const navigate = useNavigate()

return (
    <>
    
    <div>
        <select onChange={(event)=>{
                    navigate(`/signup/${event.target.value}`)
                    console.log("changed" + event.target.value
                    )

                }}>
            <option></option>
        {signupList.map((signup, index)=>{
            return (
                <option key={index} value={signup.email} >{signup.firstName}</option>
            )
        })}
        </select>
    
    <div>

    <Outlet context={[signupList]}/>
    </div>    
    </div>
    </>
)
}

export default SignUpPage