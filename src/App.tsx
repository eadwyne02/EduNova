// import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home"
import Programs from "./pages/programs";
import Footer from "./components/footer"
import Admission from "./pages/admission";
function App(){
  
 return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/program" element={<Programs />} ></Route>
        <Route path='/admission' element= {<Admission />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
export default App