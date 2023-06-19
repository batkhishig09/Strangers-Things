import React from 'react'
import './footer.css'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

function Footer() {
  return (
    <div className='footer'>
        <h3>Powered by Fullstack Academy 2023 by Batkhishig</h3>
         <div className='footer-logo'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
         </div>
    </div>
  )
}

export default Footer