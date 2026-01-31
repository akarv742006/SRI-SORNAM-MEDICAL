import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Products />
      <div id="contact">
        <OrderForm />
      </div>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
