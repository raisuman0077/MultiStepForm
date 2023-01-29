import React, {useState} from 'react'

import { Stepper,Step,StepLabel} from '@mui/material'
import { Link } from 'react-router-dom';

const steps =['Choose The Variant', 'Item Details','Variant Details'];

const VariantForm = ({Single,Variant}) => {
  const [step,setStep] = useState(1)
  const handleForm =()=>{
    setStep(2)
    return <Variant />;
  }


  return (
    <div className='container mt-5'>
    <Stepper className='multiForm-stepper' activeStep={step}>
    {steps.map((step)=>(

        <Step key={step}>
            <StepLabel>{step}</StepLabel>
        </Step>
        ))}
    </Stepper>
    {step===1 ? <Single />: <Variant />}
      
      
      <div className='mt-4'>
    {step===1?<Link to={'/'}><button className='prevBtn' style={{float:"left"}}>Previous</button></Link>:<button onClick={()=>setStep(1)} style={{float:"left"}}>Previous</button>}
    {step === 1 ? <Link  > <button onClick={()=>handleForm()} class="btn btn-primary nextBtn" style={{float:"right"}}>NEXT</button ></Link>:<button style={{float:"right"}}>SUBMIT</button>}
    </div>
    </div>
   
  )
}

export default VariantForm