import React from 'react'

import add from '../icons/add.png'
import sub from '../icons/minus.png'
const Variant = () => {
  return (
    <div className='container row'>
    <div class="col-md-6 position-relative">
    <label for="validationTooltip04" class="form-label"><h4>Variation</h4></label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">select Variation</option>
      <option>option1</option>
      <option>option2</option>
      <option>option3</option>
      <option>option4</option>
      <option>option5</option>
    </select>
    <div class="invalid-tooltip">
      Please select a Variation.
    </div>
    </div>
    <div className='row mt-5 item-title'>
        <div className='col-md-2'>Item Name</div>
        <div className='col-md-2'>Item in Unit</div>
        <div className='col-md-2'>Price Exc. Tax</div>
        <div className='col-md-2'>Price Inc. Tax</div>
        <div className='col-md-2'>Product Image</div>
        <div className='col-md-2'><img src={add} style={{height:"3rem",marginLeft:"5rem"}} /></div>
        </div>

        <div className='row g-2'>
        <div className='col-md-2'>
            <input type='text' placeholder='Name' />
        </div>
        <div className='col-md-2'>
            <select class="form-select" id="validationTooltip04" required>
                <option selected disabled value="">Unit</option>
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
                <option>option5</option>
            </select>
            <div class="invalid-tooltip">
                Please select a Variation.
            </div>
        </div>

        <div className='col-md-2'>
        <input type="number" id="pricExTax"  placeholder='Exc. Tax' required />
        <div class="invalid-tooltip">
          Please input the value.
        </div>
        </div>
        <div className='col-md-2'>
        <input type="number" id="pricInTax"  placeholder='Inc. Tax' required />
        <div class="invalid-tooltip">
          Please input the value.
        </div>
        </div>
        <div className='col-md-2'>
        <input type="file" class="form-control" id="validationTooltip05" required />
        <div class="invalid-tooltip">
          Please select image.
        </div>
        </div>
        <div className='col-md-2'>
            <img src={sub} style={{height:"3rem"}} />
        </div>
        
    </div>
</div>
  )
}

export default Variant