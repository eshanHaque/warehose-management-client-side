import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Inventory/Inventory.css'
const Inventory = ({ inventory }) => {
    const {_id, name, img, desc, price, qty, supplyname} = inventory;
    
    
    return (
        <div className='mt-5 col-sm-12 col-md-6 col-lg-3 inventory-card'>
                <img className="img-fluid mt-3" src={img} alt=""></img>
                <h2 className='mt-2'>{name}</h2>
                <p className='text-danger'>{price} tk</p>
                <p className='description'>{desc}</p>
                <p className='qty'>Quantity: {qty}</p>
                <p className='spl-Name'>Supplier Name: {supplyname}</p>
                <Link to={`/manage/${inventory._id}`}><button className='btn btn-dark'>Choose</button></Link>
        </div>
    );
};

export default Inventory;