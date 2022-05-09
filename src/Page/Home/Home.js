import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <h1 className='text-center '>Car Maina</h1>
            <Banner></Banner>
            <h3 className='mt-5 text-danger'>Go to inventory for find your products</h3>
        </div>
    );
};

export default Home;