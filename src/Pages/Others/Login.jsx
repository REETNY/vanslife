import { useState, useRef, useEffect } from "react"
import { Form, useActionData, useLoaderData, useNavigation } from "react-router-dom"



export default function Login(){

    let [errorMsg, setErrorMsg] = useState({
        emailErr: "",
        passErr: ""
    })

    let error = useActionData();

    let msg = useLoaderData();

    let subBtn = useRef(null);

    let navigation = useNavigation();

    const checkForm = (e) => {

        let emailRegex = /[a-zA-Z._-]+[\w-_.]*@{1}[a-zA-Z]+\.[a-zA-Z]{2,4}$/g
        let passRegex = /[a-zA-Z0-9]{8,12}$/

        let currCheck = e.target.id === "email" ? "email" : "password";

        let textDet = e.target.value;

        if(currCheck == "email"){
            let correctEmail = emailRegex.test(textDet)
            
            if(!correctEmail){
                setErrorMsg((oldValue) => {
                    return {...oldValue, emailErr: "kindly check your email!"}
                })
            }else if(correctEmail || textDet != ""){
                setErrorMsg((oldValue) => {
                    return {...oldValue, emailErr: ""}
                })
            }

        }

        if(currCheck === "password"){

            let correctPass = passRegex.test(textDet);

            if(textDet.length > 12 || textDet.length < 8){

                setErrorMsg((oldValue) => {
                    return {...oldValue, passErr: "password length must be between 8 and 12"}
                })

            }else if(!correctPass){
                setErrorMsg((oldValue) => {
                    return {...oldValue, passErr: "password must only contain letters and numbers only"}
                })
            }else if(correctPass){
                setErrorMsg((oldValue) => {
                    return {...oldValue, passErr: ""}
                })
            }

        }

    }

    useEffect(() => {
        let {passErr, emailErr} = errorMsg;
        if(passErr !== "" || emailErr !== ""){
            subBtn.disabled = true;
            subBtn.style.background = "grey";
            subBtn.style.cursor = "not-allowed";
        }else{
            subBtn.disabled = false;
            subBtn.style.background = "#FF8C38";
            subBtn.style.cursor = "pointer";
        }
    }, [errorMsg])

    return(
        <section className="loginPage">

            <div className="formSection">
                
                <div className="formHead">Sign in to your account</div>

                {error === undefined && <div className="signInFirst" style={msg !== null ? {display: "block"} : {display: "none"}}>{msg !== null && msg}</div>
}
                <div className="signInFirst" style={error !== undefined ? {display: "block"} : {display: "none"}}>{error !== undefined && error}</div>

                <Form method="post" replace>
                    {/* <span>{errorMsg.passErr}</span> */}
                    <span className="emailInput">
                        <label htmlFor="email">Email</label>
                        <input name="email" onChange={(e) => checkForm(e)} type="text" id="email" placeholder="your email goes here" />
                        <span className="errorMsgCont">{errorMsg.emailErr !== "" && errorMsg.emailErr}</span>
                    </span>
                    <span className="PassInput">
                        <label htmlFor="password">Password</label>
                        <input name="password" onChange={(e) => checkForm(e)} type="text" id="password" placeholder="your email goes here" />
                        <span className="errorMsgCont">{errorMsg.passErr !== "" && errorMsg.passErr}</span>
                    </span>
                    <button id="submitForm" ref={el => subBtn = el}>{navigation.state === "idle" ? "Log in" : "Logging in"}</button>
                </Form>
            </div>

        </section>
    )


}