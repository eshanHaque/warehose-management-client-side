import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ManageInventory = () => {
     
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/manage'>My Order</Link></li>
                    <li><Link to='/manage/addItem'>Add a Item</Link></li>
                    <li><Link to='/manage/deleteItem'>Delete Item</Link></li>
                </ul>

            </div>
        </div>
    );
};



export default ManageInventory;