import React from 'react'
import Data from './Data';
import Card from './Card';

const App = ()=>{
  return(
    Data.map((val)=>{
      return (
          <Card
            key={val.id}
            imgsrc = {val.imgsrc}
            title = {val.title}
            name = {val.sname}
            link = {val.link}
           />
      )
  })
  )
};

export default App;
