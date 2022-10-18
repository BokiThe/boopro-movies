import React, { useState } from "react";
import HomePage from "./HomePage";
import "./screens.css";
const LoginPage = () => {
  //database for credentials and errors
  const users = [
    {
      username: "example@boopro.tech",
      password: "123123",
    },
  ];
  const errors = {
    uname: "invalid username or does not exist",
    pass: "invalid password",
  };
  // States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  //Handle functions
  const handleErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );
  const handleSubmit = (e) => {
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
        localStorage.setItem("token", "token");
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // form
  const formContainer = (
    <div className='loginContainer'>
      <div className='formContainer'>
        <h1>Welcome to Boopro movie website</h1>
        <h3>Please login to continue</h3>
        <form className='loginForm' onSubmit={handleSubmit}>
          <div className='inputContainer'>
            <input
              type='text'
              name='uname'
              placeholder='Username (example@boopro.tech)'
              required
            />
            {handleErrorMessage("uname")}
          </div>
          <div className='inputContainer'>
            <input
              type='password'
              name='pass'
              placeholder='Password (123123)'
              required
            />
            {handleErrorMessage("pass")}
          </div>
          <div className='inputContainer'>
            <input type='submit' value='Enter' />
          </div>
        </form>
      </div>
    </div>
  );
  return isSubmitted ? <HomePage /> : formContainer;
};

export default LoginPage;
