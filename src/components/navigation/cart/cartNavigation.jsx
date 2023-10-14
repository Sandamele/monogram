import React from 'react'

export const CartNavigation = ({links=[]}) => {
  return (
    <ul className='cartNavigation'>
        {links.map(link => (
          <li key={link.id}>
            <a href={link.url}><box-icon name="shopping-bag" color="#EFC2B2" /></a>
          </li>
        ))}
    </ul>
  )
}
