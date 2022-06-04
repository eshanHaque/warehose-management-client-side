import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import DeleteItem from './DeleteItem';

const DeleteItems = () => {
    const { data: inventories, isLoading, refetch } = useQuery('inventory', () => fetch('https://calm-eyrie-94249.herokuapp.com/Inventory', {
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock Quantity</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories.map((inventory, index)=><DeleteItem
                            key={inventory._id}
                            inventory={inventory}
                            index={index}
                            refetch={refetch}
                            ></DeleteItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeleteItems;