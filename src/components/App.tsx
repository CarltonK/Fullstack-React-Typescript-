import React from 'react';
// import logo from './logo.svg'
import '../styles/App.css'
import Header from './Header'
import AboutUs from './About'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />

        <AboutUs />

        <Footer />
      </div>
    </>
  );
}

export default App;
