import React from 'react'
import './MobileApp.css'
import { assets } from '../../assets/assets'

const MobileApp = () => {
  return (
    <div className='mobile-app-page' id='mobile-app-page'>
      <div className="mobile-app-container">
        <div className="mobile-app-left">
          <h2>Get the QuickBite App</h2>
          <p>Order your favorite meals in seconds, track your delivery live, and get exclusive offers only on our mobile app.</p>
          <ul>
            <li>Instant Order Tracking</li>
            <li>Exclusive App-Only Discounts</li>
            <li>Seamless & Secure Payments</li>
          </ul>
          <div className="app-download-platforms">
            <img src={assets.play_store} alt="Play Store" />
            <img src={assets.app_store} alt="App Store" />
          </div>
        </div>
        <div className="mobile-app-right">
          <img src={assets.mobile_mockup} alt="App Mockup" />
        </div>
      </div>
    </div>
  )
}

export default MobileApp