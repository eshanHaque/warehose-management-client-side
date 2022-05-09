import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageInventory = () => {
    const {id} = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() =>{
        const url = `http://localhost:5000/Inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    }, [])
    return (
        <div>
            <h2>inventory id: {inventory.name}</h2>
        </div>
    );
};

export default ManageInventory;