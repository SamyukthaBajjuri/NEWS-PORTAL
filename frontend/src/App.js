import React, { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Comp/Home";
import Login from "./Comp/Login";
import Logout from "./Comp/Logout";
import Reg from "./Comp/Reg";
import Add from "./Comp/Add";
import Edit from "./Comp/Edit"
import Nav from "./Comp/Nav"
import "./App.css"
import  Ct from "./Comp/Ct"
import Allpost from "./Comp/Allpost";
import News from "./Comp/News";
import Edu from "./Comp/Edu"
import Sports from "./Comp/Sports";
import Movies from "./Comp/Movies";
import Donebyme from './Comp/Donebyme'
import Stared from "./Comp/Stared";
let App=()=>{
  let [data,setData]=useState({"token":"","name":"","_id":""})
  let setlogin=(obj)=>{
    setData({...data,...obj})
  }
  let obj={"data":data,"setlogin":setlogin}
  return(
  <BrowserRouter>
  <Ct.Provider value={obj}>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}>
    <Route  path="/" element={<Allpost/>}/>
    <Route  path="/news" element={<News/>}/>
    <Route  path="/edu" element={<Edu/>}/>
    <Route  path="/sports" element={<Sports/>}/>
    <Route  path="/movies" element={<Movies/>}/>
    <Route  path="/me" element={<Donebyme/>}/>
    <Route  path="/star" element={<Stared/>}/>
    </Route>
    <Route  path="/edit" element={<Edit/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/reg" element={<Reg/>}/>
    <Route path="/add" element={<Add/>}/>
  </Routes>
  </Ct.Provider>
  </BrowserRouter>)
}
export default App