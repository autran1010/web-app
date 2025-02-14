import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const callHelloApi = () => {
    document.getElementById("api-response").innerText = "Hello world!";
  };
  
  

  return (
    <div>
      <header>
        <h1>Original Trombones</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <h2>Handcrafted, home-made masterpieces</h2>
        <form id="form" action="https://your-backend-url.com/submit" method="POST">
          <input type="email" id="email" placeholder="Enter your email address" required />
          <button type="submit">GET STARTED</button>
        </form>
        <button onClick={callHelloApi}>Call Hello API</button>
        <p id="api-response"></p>

      </section>

      <section id="features">
        <div className="feature">
          <h3>Premium Materials</h3>
          <p>Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
        </div>
        <div className="feature">
          <h3>Fast Shipping</h3>
          <p>We make sure you receive your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
        </div>
        <div className="feature">
          <h3>Quality Assurance</h3>
          <p>For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Original Trombones</p>
      </footer>
    </div>
  );
}

export default App;
