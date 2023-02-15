import React from 'react'
import Data from './Data';
import Card from './Card';
import Netflix from './Netflix';
import AmazonPrime from './AmazonPrime';

const favseries  = "netflix";
const App = ()=>{
  return(
    favseries === "netflix" ? <Netflix/> : <AmazonPrime />
  )
};

export default App;
