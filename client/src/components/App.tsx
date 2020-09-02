import React from 'react';
// import logo from './logo.svg'
import '../styles/App.css'
import Header from './Header'
import AboutUs from './About'
import ProductList from './ProductList'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <ProductList />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
