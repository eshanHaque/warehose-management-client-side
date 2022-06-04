import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import '../Inventory/Inventory.css'
const Inventory = ({ inventory }) => {
    const { _id, name, img, desc, price, qty, supplyname } = inventory;
    const [user] = useAuthState(auth);
    const handlePurchase = event => {
        event.preventDefault();
        const order = {
            orderID: _id,
            productName: name,
            productImg: img,
            productPrice: price,
            userEmail: user?.email,
            userName: user?.displayName
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                toast(`You orderd, ${name}`)
            }
        })
    }

        return (
            <div>
                <form onSubmit={handlePurchase}>
                    <div style={{ height: '600px' }} className="card w-96 bg-base-100 shadow-xl mb-10">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{desc}</p>
                            <p>Price: {price}</p>
                            <p>{qty} pieces available</p>
                            <p>Supplier {supplyname}</p>
                            <input type="submit" value="Place Order" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        );
    };

    export default Inventory;