import React from 'react'
import { Route, Routes } from 'react-router-dom';


import MainPage from './pages/MainPage';
import './scss/Main.scss'
import SingleForm from './pages/SingleForm';
import './scss/SingleForm.scss'
import VariantForm from './pages/VariantForm';

import Single from './components/Single';
import './scss/Single.scss'
import Variant from './components/Variant';
import './scss/Variant.scss'




function App() {

 

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/single' element={<SingleForm Single={Single}  />} />
      <Route path='/variant' element={<VariantForm Single={Single} Variant={Variant} />} />
    
    </Routes>
    </>
  )
}

export default App;