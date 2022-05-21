import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import Loading from '../Loading/Loading'
const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://calm-eyrie-94249.herokuapp.com/Inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
        setIsLoading(false)
    }, [])



    const renderItem = (
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
    return (
        <div className="App">
            {isLoading ? <Loading></Loading>: renderItem}
            
        </div>
    );
};
export default Inventories;