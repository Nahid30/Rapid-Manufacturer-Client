import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deleteModal, setDeleteModal }) => {

    const { name , _id } = deleteModal;

    // const { _id, img, minimumOQ, price, availableQ } = manageProduct;


    const handleDelete = (id) => {
        // console.log('delete id', id)
        fetch(`https://rapid-manufacturer.herokuapp.com/item/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product ${name} is Deleted Successfully!`)
                    setDeleteModal(null);
                }
            })
    }


    return (
        <div>


            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label for="delete-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-red-600">Are you sure, you want to Delete {name}? </h3>
                    <p className="py-4">Please Check before Delete!</p>
                    <div className="modal-action">
                        <button onClick={ ()=> handleDelete(_id) } className="btn btn-sm btn-error btn-primary">Delete</button>
                        <label for="delete-confirm-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteConfirm;