import React from 'react'
export default function GettingStartedCard({children, image, alt}) {
  return (
    <div className='gettingStartedCard'>
        <img src={image}  alt={alt}/>
        <div className='gettingStartedCardText'>
            <div className='text'>
                {children}
            </div>
        </div>
    </div>
  )
}
