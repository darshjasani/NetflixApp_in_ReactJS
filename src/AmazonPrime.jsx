import React from 'react';
import Data from './Data';
import Card from './Card';

const AmazonPrime = () =>{
    return (
        Data.map((val,index)=>{
            if(index <= 3){
                return (
                    
                    <Card
                        key = {Data[index].id}
                        imgsrc = {Data[index].imgsrc}
                        title = {Data[index].title}
                        name = {Data[index].sname}
                        link = {Data[index].link}
                    />
                );
            }
        })
    );
}

export default AmazonPrime;