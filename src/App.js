import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Posts from "./Components/Posts/Posts";
import {originals,action,romance} from './urls'


function App() {
  return (
    <div className="App">
      < Navbar />
      <br/>

      <Banner/>
      <br/>
      <Posts url={originals} title='Netflix Orginals' />
      <Posts url={action} title='Action' isSmall />
      <Posts url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
