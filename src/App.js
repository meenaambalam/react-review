import React, {useState} from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import LoginContext from './Utils/LoginContext';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const contextObj = {email, password, setEmail, setPassword};

  return (
    <LoginContext.Provider value={contextObj}>
      <Router>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
