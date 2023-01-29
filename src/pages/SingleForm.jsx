import React from 'react'

import { Stepper,Step,StepLabel} from '@mui/material'
import { Link } from 'react-router-dom';



const steps =['Choose The Variant', 'Item Details'];

const SingleForm = ({Single}) => {
    
   
  return (
    <div className='container singleForm'>
    <Stepper className='singleForm-stepper' activeStep={1}>
    {steps.map((step)=>(

        <Step key={step}>
            <StepLabel>{step}</StepLabel>
        </Step>
        ))}
    </Stepper>
    <Single />
    <div className='mt-4'>
    <Link to={'/'}><button className='prevBtn '>Previous</button></Link>
    <button class="btn btn-primary nextBtn" type="submit">SUBMIT</button>
    </div>
    </div>
  )
}

export default SingleForm