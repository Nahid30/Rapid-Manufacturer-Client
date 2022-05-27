import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deleteModal, setDeleteModal }) => {

    const { name , _id } = deleteModal;

    // const { _id, img, minimumOQ, price, availableQ } = manageProduct;


    const handleDelete = (id) => {
        // console.log('delete id', id)
        fetch(`http://localhost:5000/item/${id}`, {
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


            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="delete-confirm-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-red-600">Are you sure, you want to Delete {name}? </h3>
                    <p class="py-4">Please Check before Delete!</p>
                    <div class="modal-action">
                        <button onClick={ ()=> handleDelete(_id) } class="btn btn-sm btn-error btn-primary">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteConfirm;