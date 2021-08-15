import React from 'react'
import SunLogo from '../assets/images/svg/sun-logo.svg'

export default function Loader() {
  return (
    <div className='as_loader'>
      <img src={SunLogo} alt='' className='img-responsive' />
    </div>
  )
}
