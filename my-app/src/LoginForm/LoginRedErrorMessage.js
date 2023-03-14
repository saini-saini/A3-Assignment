import React from 'react'
import {ErrorMessage} from 'formik'
import { color } from '@mui/system'
function LoginRedErrorMessage({name}) {
  return (
    <div style={{color:'red'}}>
      <ErrorMessage name={name}/>
    </div>
  )
}

export default LoginRedErrorMessage