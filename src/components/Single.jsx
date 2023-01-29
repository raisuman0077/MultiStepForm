import React from 'react'



const Single = () => {

   
  return (
   
   
    <form class="row g-3 needs-validation mt-2" novalidate>
    <div class="col-md-6 position-relative">
      <label for="validationTooltip04" class="form-label"><h4>Category</h4></label>
      <select class="form-select" id="validationTooltip04" required>
        <option selected disabled value="">choose Category</option>
        <option>Groceries</option>
        <option>Electronics</option>
        <option>Tofu</option>
        <option>Noodles</option>
        <option>Cocacola</option>
      </select>
      <div class="invalid-tooltip">
        Please select a Category.
      </div>
    </div>
    <div class="col-md-6 position-relative">
      <h4 for="validationTooltip01" class="form-label">Item Name</h4>
      <input placeholder='Name' type="text" class="form-control" id="validationTooltip01" required />
      <div class="valid-tooltip">
        please fill the item name.
      </div>
    </div>

    <div class="col-md-6 position-relative">
      <label for="validationTooltip04" class="form-label"><h4>Brand</h4></label>
      <select class="form-select" id="validationTooltip04" required>
        <option selected disabled value="">choose Brand</option>
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
        <option>option4</option>
        <option>option5</option>
      </select>
      <div class="invalid-tooltip">
        Please select a brand.
      </div>
    </div>
    <div class="col-md-6 position-relative">
      <label for="validationTooltip05" class="form-label"><h4>Image</h4></label>
      <input type="file" class="form-control" id="validationTooltip05" required />
      <div class="invalid-tooltip">
        Please select image.
      </div>
    </div>
    <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label"><h4>Unit</h4></label>
    <select class="form-select" id="validationTooltip04" required>
    <option selected disabled value="">select Unit</option>
    <option>option1</option>
    <option>option2</option>
    <option>option3</option>
    <option>option4</option>
    <option>option5</option>
    </select>
    <div class="invalid-tooltip">
    Please provide unit.
    </div>
    </div>
    <div class="col-md-3 position-relative">
      <label for="validationTooltip05" class="form-label"><h4>Price Exc. Tax</h4></label>
      <input type="number" id="pricExTax"  placeholder='Exc. Tax' required />
      <div class="invalid-tooltip">
        Please input the value.
      </div>
    </div>
    <div class="col-md-3 position-relative">
      <label for="validationTooltip05" class="form-label"><h4>Price Inc. Tax</h4></label>
      <input type="number" id="pricInTax"  placeholder='Inc. Tax' required />
      <div class="invalid-tooltip">
        Please input the value.
      </div>
    </div>
    <div className='row mt-4'>
    <div className='col-md-3' style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
    <label className='form-label' for="switchInput"><h4>Ticket</h4></label>
    <div className='d-flex'>
    <h5>KOT</h5>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
    <h5>BOT</h5>
    </div>
    </div>
    <div className='col-md-3' style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
    <label className='form-label' for="switchInput"><h4>Status</h4></label>
    <div className='d-flex'>
    <h5>In Active</h5>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
    <h5>Active</h5>
    </div>
    </div>
    
    </div>
    <div class="form-group">
    <label className='form-label' for="exampleFormControlTextarea1"><h4>Description</h4></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  </form>
    
       
  
   
  )
}

export default Single