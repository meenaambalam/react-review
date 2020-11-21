import React, {useEffect, useState} from "react";
import Input from '../Components/Input';

function Signup(){
    const [email, setEmail] = useState("");
    const placeholder = "I'm a Placeholder";

    function displayState(){
        console.log(email);
    }

    useEffect(() => {
        setEmail("zekkxx@gmail.com");
    }, [])

    return(
        <div>
            <Input name="email" placeholder={placeholder} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input name="password" type="password"/>
            <input type="button" onClick={displayState} />
        </div>
    )
}

export default Signup;