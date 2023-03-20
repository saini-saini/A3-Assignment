import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import RedErrorMessage from './RedErrorMessage'
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
function Signup() {
  const NewValidations = yup.object({
    firstname: yup.string().required("First Name is Must").min(2),
    lastname: yup.string().required("Last Name is Must").min(2),
    email: yup.string().required("Email is Must").matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Enter Valid Email'),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, 'Enter Strong Password').required("Password is Must")
  })

  const navigate = useNavigate();
  return (
    <div>
      <Formik validationSchema={NewValidations}
        initialValues={{ firstname: "", lastname: "", email: "", password: "", checbox: "" }}
        onSubmit={(values) => {
          localStorage.setItem('userInfo', JSON.stringify(values))
          toast.success("Account Created Successfully", {
            position: "top-center",
            theme: "colored"
          })
          console.log(values)


        }}
      >
        <div className="signupform">
          <Form className='form'>

            <div className="items">
              <h3 className='heading'>Sign up to <img className='formlogo' src=" images/Shopify.png" alt="" /></h3> <br />
              <div className="names">
                <div className="input-block"><label className='value ' htmlFor=""><b>First Name</b> </label><br />
                  <Field className="box namebox " type="text" name="firstname" />
                  <RedErrorMessage name='firstname' /><br />
                </div>
                <div className="input-block"><label className='value ' htmlFor=""><b>Last Name</b> </label><br />
                  <Field className="box namebox " type="text" name="lastname" />
                  <RedErrorMessage name='lastname' /> <br />
                </div>
              </div>
              <div className="input-block"><label className='valueEmail ' htmlFor=""><b>Email</b> </label><br />
                <Field className="box emailbox  " type="text" name="email" />
                <RedErrorMessage name='email' /> <br />
              </div>
              <div className="input-block"> <label className='valuePass ' htmlFor=""><b> Password </b></label><br />
                <Field className="box passbox " type="password" name="password" />
                <RedErrorMessage name='password' /> <br />
              </div>
              <div > <button className='create ' type='submit '>Create Account</button>
              </div> <br />
              <div className='haveAccount'>
                <h6 className='alreadytext '> Already Have an Account?</h6>
                <div><button className='alreadylogin ' type='submit' onClick={() => navigate('/signin')} >Login</button>
                  <br /> <br /></div>
              </div>
            </div>
            <ToastContainer />

          </Form>
        </div>
      </Formik>
    </div>
  )
}

export default Signup
