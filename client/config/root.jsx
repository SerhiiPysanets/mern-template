import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Tith is React Router v6 </div>} />
        <Route path='/test' element={<div>Tith is Test </div>} />
        <Route path='*' element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root