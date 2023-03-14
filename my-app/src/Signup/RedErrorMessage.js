import React from 'react'
import {ErrorMessage} from 'formik'
import { color } from '@mui/system'
function RedErrorMessage({name}) {
  return (
    <div className='errortext' style={{color:'red'}}>
      <ErrorMessage name={name}/>
    </div>
  )
}

export default RedErrorMessage
