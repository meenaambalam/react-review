import React from 'react';

const LoginContext = React.createContext({
    email: "",
    password: "",
    setEmail: () => {},
    setPassword: () => {}
})

export default LoginContext;