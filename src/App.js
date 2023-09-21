import './App.css';
import React from "react"
import Navbar from "./components/navBar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/home"
import Papers from './components/pages/papers';
//fontAwesome P$^zSPr9jWesGFW
function App() {
  return (
    
    <>
  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element = {<Home/>}></Route>
          <Route path="/papers" exact element = {<Papers/>}></Route>
        </Routes>
        </Router>
        
    </>
  );
}

export default App;
