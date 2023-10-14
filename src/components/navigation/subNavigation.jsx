import React from 'react'
import { Link } from 'react-router-dom'

export const SubNavigation = ({links=[], handleOnClick=null}) => {
  return (
    <ul className='subNavigation'>
      {links.map((link, index) => (
        <li key={index} onClick={() => handleOnClick(link.name)}><Link to={link.url}>{link.name}</Link></li>
      ))}
    </ul>
  )
}
