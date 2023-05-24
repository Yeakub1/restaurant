import React from 'react';
import Banner from '../Banner/Banner';
import Cetagory from '../Cetagory/Cetagory';
import Services from '../Services/Services';
import MenuItems from '../MenuItems/MenuItems';
import Contact from '../Contact/Contact';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import TestMonials from '../TestMonials/TestMonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cetagory></Cetagory>
            <Services></Services>
            <MenuItems></MenuItems>
            <Contact></Contact>
            <Chef></Chef>
            <Featured></Featured>
            <TestMonials></TestMonials>
        </div>
    );
};

export default Home;