import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Home = () => {
  const [x, setX] = useState(false);
  const [account, setAccount] = useState(null);

  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome setX={setX} setAccount={setAccount} />
      </div>
      <Services x={x} account={account} />
      <Footer />
    </div>
  );
};

export default Home;
