import React from 'react';
import { toast } from 'react-toastify';

const DeleteItem = ({ inventory, index, refetch }) => {
    const { _id, name, img, desc, price, qty, supplyname } = inventory;
    const handleDelete = name => {
        fetch(`http://localhost:5000/Inventory/${name}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`${name} is deleted`)
                refetch();
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="Product image" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{qty}</td>
            <td><button onClick={()=>handleDelete(name)} className='btn btn-xs btn-error'>Delete Product</button></td>

        </tr>
    );
};

export default DeleteItem;