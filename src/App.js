import React from 'react';
import Navbar from './Components/navBar/navBar';
import "./App.css"
import {originals,action } from "./urlS"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
           <Navbar/>
          <Banner/>
          <RowPost url={originals} title="Netflix Orginals"/>
          <RowPost url={action} title="Action"  isSmall />

    </div>
  );
}

export default App;
 