import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageInventory = () => {
    const {id} = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() =>{
        const url = `https://calm-eyrie-94249.herokuapp.com/Inventory/${id}`;
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