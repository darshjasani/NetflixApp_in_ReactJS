import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './Data';
import './index.css';
ReactDOM.render(
  <>
    <h1 className='heading_info'>Top 5 Netflix Series in Year 2022</h1>
    {Data.map((val)=>{
        return (
            <App
              imgsrc = {val.imgsrc}
              title = {val.title}
              sname = {val.sname}
              link = {val.link}
             />
        )
    })}
  </>
  ,document.getElementById('root'));