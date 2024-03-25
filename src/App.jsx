import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseTemplate from "./Components/ChooseTemplate";
import FinalCheck from "./Check/FinalCheck";
import SecondSection from "./Check/SecondSection";
import React, { useContext, createContext, useState } from "react";

export const MyContext = createContext();

function App() {

  const [cropImg,setCropImg] = useState(null)

  return (
    <MyContext.Provider value={{cropImg,setCropImg}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/template"  element={<ChooseTemplate/>}/>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
