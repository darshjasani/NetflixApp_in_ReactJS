import React from 'react';
import Data from './Data';
import Card from './Card';

const Netflix = ()=>{
    return (
        Data.map((val,index)=>{
            if(index >= 3 && index <= 6){
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

export default Netflix;