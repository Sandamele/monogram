import React from 'react'
export default function GettingStartedCard({children, image}) {
  return (
    <div className='gettingStartedCard'>
        <img src={image} />
        <div className='gettingStartedCardText'>
            <div className='text'>
                {children}
            </div>
        </div>
    </div>
  )
}
