import React from 'react';
import Navbar from './navbar/Navbar';
import Welcome from './welcome/Welcome';
import Aboutus from './aboutus/Aboutus';
import Buy from './buy/Buy';
import Tokenomics from './tokenomics/Tokenomics';
import Roadmap from './roadmap/Roadmap';
import Footer from './footer/Footer';

function Index () {
    return (
        <>
        <Navbar/>
        <Welcome/>
        <Aboutus/>
        <Buy/>
        <Tokenomics/>
        <Roadmap/>
        <Footer/>
        </>
    );
}

export default Index;