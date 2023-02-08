import React from 'react'
import Image from './Image'
import Heading from './Heading'

const Card = (props)=> {
    return (
      <div className='cards'>
        <div className='card'>
          <div className='card_info'>
          <Image imgsrc={props.imgsrc} />
            <span className='card_category'>{props.title}</span>
            <Heading names={props.name} />
            <a href="" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default Card;