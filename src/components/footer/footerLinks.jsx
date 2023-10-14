import React from 'react'

export default function FooterLinks({links = []}) {
  return (
    <>
        <ul className='links'>
            {links && links.map((link, index) => (
                <li key={index}>
                    <a href={link.link}>{link.name}</a>
                </li>
            ))}
        </ul>
    </>
  )
}
