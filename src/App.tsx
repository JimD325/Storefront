import React from 'react';
import './App.css';
import {Header} from './components/header/header'
import {Footer} from './components/footer/footer'
import {Storefront} from './components/storefront/storefront'


function App() {


  return (
   <>
   <Header/>
   <Storefront/>
    <Footer/>
   </>
   
  );
}

export default App;
