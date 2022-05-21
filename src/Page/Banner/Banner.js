import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/img1.jpg';
const Banner = () => {
    return (
        <div className='carousel-inner'>
            <div className='carousel-item active'>
            <img className='d-block w-100' src={img} alt="First slide"/>
                <div className='carousel-caption d-none d-md-block'>
                    <Link to={`/inventory`}><button className='btn btn-primary'>Inventory</button></Link>
                </div>
                

            </div>
        </div>
    );
};

export default Banner;
