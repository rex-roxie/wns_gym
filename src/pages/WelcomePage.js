import React from 'react'
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to the WNS Gym page</h1>
      <Link to="/login">Get started today</Link>
      <section className='reason-section'>
        <h2>Why the app</h2>
        <p>The West Nairobi School committee found it influential and important to be able to assist coach Boni in order for him to know who will be showing up to the gym each day. It also allows for you to see various workouts and the daily workout that can be posted by coach Boni</p>
      </section>
    </div>
  )
}

export default WelcomePage;