import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    const [isorder, setIsOrder] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/Inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])



    return (
        <div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center">
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                            isorder={isorder}
                            setIsOrder={setIsOrder}
                        >
                        </Inventory>)
                    }
                </div>
            
        </div>
    );
};
export default Inventories;