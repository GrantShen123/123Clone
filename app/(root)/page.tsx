import React from 'react';
import HeaderBox from '../../components/HeaderBox';

const Home = () => {
  const loggedIn = { firstName: 'Grant' };
  return (
    <section className = "Home">
      <div className="hone-content">
        <header className = "home-header">
          <HeaderBox 
            type = "greeting"
            title = "Welcome to the app"
            user = {loggedIn?.firstName ||'guest'}  
            subtext = "Access and manage your account and transactions efficiently." 
          />
        </header>
      </div>
    </section>
  )
}

export default Home
