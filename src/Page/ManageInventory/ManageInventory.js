import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ManageInventory = () => {
    const {id} = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        console.log(id);
    if(id){
        const url = `https://calm-eyrie-94249.herokuapp.com/Inventory/${id}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    }
    }, [])
    
    return (
        <div className='mt-5 card col-lg-6 mngInventory-card'>
            <h2>{inventory.name}</h2>
            <img className="img-fluid mt-3" src={inventory.img} alt=""></img>
            <p className='text-danger text-center'>{inventory.price}</p>
            <p className='text-center'>Quantity {inventory.qty}</p>
            <button >send</button>
        </div>
    );
};



export default ManageInventory;