import React, {useEffect, useState} from "react";
import Input from '../Components/Input';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function displayState(){
        alert(`I probably shouldn't tell you this, but your email is: ${email} and your password is: ${password}`);
        setEmail("");
        setPassword("");
    }

    // const isInitialMount = React.useRef(true); // {current: true}
    // useEffect(() => {
    //     if(isInitialMount.current){
    //         console.log(isInitialMount);
    //         isInitialMount.current = false;
    //     } else {
    //         console.log(password.length);
    //     }
    // }, [password])

    return(
        <div>
            <Input name="email" placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input name="password" placeholder={"Password"} type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="button" onClick={displayState} value="Login"/>
        </div>
    )
}

export default Login;