import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-2xl mt-10 text-center">We Provide</h1>
            <div className="mt-10">
            <Inventories></Inventories>
            </div>
        </div>
    );
};

export default Home;