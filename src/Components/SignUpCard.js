import { useOutletContext, useParams } from "react-router-dom"

const SignUpCard = () => {

   const [signupListOut] = useOutletContext()
   const params = useParams()
   
    const findSignup = signupListOut.find((signup)=>{
        return params.email === signup.email
    })

    if(findSignup !== undefined){
        return(
            <div>
          <p>{findSignup.firstName}</p>
          <p>{findSignup.lastName}</p>
          <p>{findSignup.email}</p>
            </div>
        )
    }
    

}

export default SignUpCard