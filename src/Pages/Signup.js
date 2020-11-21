import React, {useContext} from "react";
import LoginContext from '../Utils/LoginContext';
import Input from '../Components/Input';

function Signup(){
    const {email, password, setEmail, setPassword} = useContext(LoginContext);

    function displayState(){
        alert(`I probably shouldn't tell you this, but your email is: ${email} and your password is: ${password}`);
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <Input name="email" placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input name="password" placeholder={"Password"} type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="button" onClick={displayState} value="Submit"/>
        </div>
    )
}

export default Signup;