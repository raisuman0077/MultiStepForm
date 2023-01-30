import React, {useState} from 'react'

import singleIcon from '../icons/single.png'
import variableIcon from '../icons/cart.png'
import rightArrow from '../icons/right-arrow.png'

import { Stepper,Step,StepLabel,Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const steps =['Choose The Variant', 'Item Details','Variant Details'];

const MainPage = () => {

    var activeclass = document.querySelectorAll('.option-list-item');

   activeclass.forEach(active=>{
    active.addEventListener("click", ()=>{
        resetActive();
        active.classList.add('active')

    } )
   })

   function resetActive(){
    activeclass.forEach(active=>{
        active.classList.remove('active')
    })
   }



    const [type, setType] = useState('');

  return (
    <div className='container main'>
    {type==='variable'? <Stepper className='main-stepper' activeStep={0}>
    {steps.map((step)=>(

        <Step key={step}>
            <StepLabel>{step}</StepLabel>
        </Step>
        ))}
    </Stepper>:<Stepper className='main-stepper' activeStep={0}>
    {steps.slice(0,2).map((step)=>(

        <Step key={step}>
            <StepLabel>{step}</StepLabel>
        </Step>
        ))}
    </Stepper>}
    <Typography className='option'>
        <h1>Choose Item Type</h1>
        <h6>Choose the type of item you want to create.</h6>
        <ul className='option-list'>
            <li onClick={()=>setType('')}   className='option-list-item active'>  
                <img src={singleIcon} />
                <div >
                    <h4>Single</h4>
                    <p>Add an item</p>
                </div>
            </li>
            <li onClick={()=>setType('variable')} className='option-list-item'>
                <img src={variableIcon} />
                <div>
                 <h4>Variable</h4>
                 <p>Add an item with variant</p>
                </div>
            </li>
            
        </ul>
        {type==='variable' ? <Link to={'/variant'}><button className='homeBtn'>Next <img src={rightArrow} /></button></Link>
            : <Link to={'/single'}><button className='homeBtn'>Next <img src={rightArrow} /></button></Link>}
    </Typography>
    </div>
  )
}

export default MainPage