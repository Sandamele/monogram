import React from 'react'

export default function SocialMedia({icon: Icon, link}) {
  return (<a href={link}>{Icon}</a>)
}
