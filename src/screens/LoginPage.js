import React, {useEffect,useState} from 'react'
import './screens.css'
const LoginPage = () => {
  //data base for credentials and errors
  const users = [
    {
      username: "example@boopro.tech",
      password: 123123
    },
    
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
// States
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
//Handle functions
const handleErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = users.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  return (
    <div className='loginContainer'>
      <div className="formContainer">
        <h1>Welcome to Boopro movie website</h1>
        <h3>Please login to continue</h3>
        <form action="" className='loginForm' onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder='Username or E-mail adress' required/>
          {handleErrorMessage('username')}
          <input type="password" name="pass" placeholder='Password' required/>
          {handleErrorMessage("pass")}
          <input type="submit" value="Enter" />
        </form>
      </div>
    </div>
  )
}

export default LoginPage;