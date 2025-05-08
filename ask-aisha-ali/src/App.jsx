import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./Components/HomeScreen/homeScreen";
import ParentsPage from "./Components/ParentsPage/parentsPage";
import DuaPage from "./Components/PopUpModal/duaPopUp";


function App() {


  return (
    <>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/pop" element={<DuaPage />} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
