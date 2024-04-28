import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
// import Dummy from '../components/Dummy';
// import SelectedDish from '../components/SelectedDish';

const Home = () => {

  return (
    <div>
        <Navbar />
        <Carousel />
        <Card />
        <Footer />
        {/* <Dummy />
        <SelectedDish /> */}
    </div>
  )
}

export default Home;