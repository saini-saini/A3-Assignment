import React, { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import LoginRedErrorMessage from './LoginRedErrorMessage';
import './Loginform.css';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Loginfrom() {
  const NewValidations = yup.object({

    email: yup.string().required("Email is Must").matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Enter Valid Email'),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, 'Enter Strong Password').required("Password is Must")
  })
  const navigate = useNavigate();

  const handleSubmit = (values) => {

    const userData = JSON.parse(localStorage.getItem('userInfo'))
    if (userData.email == values.email && userData.password == values.password) {
      console.log('login successfull')
      navigate('/home')
      toast.success("Login Successfull", {
        position: "top-center",
        theme: "colored"
      })

    }
    else if (userData.email !== values.email && userData.password !== values.password) {
      console.log('login failed')
      toast.error("Invalid Email or Password", {
        position: "top-center",
        theme: "colored"
      })
    }

  }


const toggleTheme=()=>{
  
}


  return (

    <div className='loginform'>

      <Formik validationSchema={NewValidations}
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}>
      <Form className='loginUI'>

        {/* <div className='loginf'> */}

        <h3 className='loginheading '>Sign in to  <img className='formlogo' src=" images/Shopify.png" alt="" /></h3> <br />
        <span className="content">

          <div className="logincontent">
            <div className="input-block">
              <label className='valueEmail ' htmlFor=""><b>Email</b> </label><br />
              <Field className="box emailbox " type="text" name="email" />
              <LoginRedErrorMessage name='email' /> <br />
            </div>
            <div className="input-block"> <label className='valuePass ' htmlFor=""><b> Password </b></label><br />
              <Field className="box passbox " type="password" name="password" />
              <LoginRedErrorMessage name='password' /> <br />
            </div>
            <div > <button className='login ' type='submit '>Log in</button>
            </div> <br />
            <div > <button className='ForgetPass' type='submit '>Forget Password?</button>
              <br /> </div>  <br />
            <div > <button onClick={() => navigate('/signup')} className='createAccount ' type='submit '>Create New Account</button>
              <br /> <br /></div>
          
          </div>
        </span>
        {/* </div>   */}
        <ToastContainer />
        
      </Form>
      
    </Formik> 

      

    </div>
  )
}

export default Loginfrom
