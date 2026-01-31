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

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCart = (item) => {
    if (!cartItems.includes(item)) {
      setCartItems([...cartItems, item]);
    }
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i !== item));
  };

  const toggleCartItem = (item) => {
    if (cartItems.includes(item)) {
      handleRemoveFromCart(item);
    } else {
      handleAddToCart(item);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Products
        selectedItems={cartItems}
        toggleSelection={toggleCartItem}
      />
      <div id="contact">
        <OrderForm prefilledItems={cartItems} />
      </div>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
