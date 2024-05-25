import React from 'react';
import CybersecurityGame from './CybersecurityGame'; // Make sure this path is correct

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to Ethan Sam's Personal Website</h1>
      <p>
        Hi! I'm Ethan Sam, an aspiring Security Engineer and Software Developer with a penchant for humor and a passion for cybersecurity. 
        This website is a reflection of my journey, skills, and projects. Enjoy your stay!
      </p>
    </header>
    <main className="container">
      <section>
        <CybersecurityGame />
      </section>
    </main>
  </div>
);

export default Home;
