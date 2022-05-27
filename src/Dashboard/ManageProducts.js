import React, { useEffect, useState } from 'react';
import DeleteConfirm from './DeleteConfirm';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const [deleteModal,setDeleteModal] = useState(null);
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(() => {
        fetch('https://rapid-manufacturer.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setManageProducts(data)
            })
    }, [deleteModal])
    return (
        <div>
            <h2 className='text-center text-lg text-emerald-500	my-6 '>Manage All Products</h2>
            <div className="overflow-x-auto px-10 my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Minimum Order</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageProducts.map((manageProduct, index) => <ManageProductRow
                                key={manageProduct._id}
                                manageProduct={manageProduct}
                                index={index}
                                setDeleteModal={setDeleteModal}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteModal && <DeleteConfirm
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                ></DeleteConfirm>
            }
        </div>
    );
};

export default ManageProducts;