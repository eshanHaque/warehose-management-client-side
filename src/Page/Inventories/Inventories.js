import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://calm-eyrie-94249.herokuapp.com/Inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])


    return (
        <div>
            <h2>Inventories</h2>
            <div>
                <div className="row justify-content-around gap-2">
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        >
                        </Inventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;