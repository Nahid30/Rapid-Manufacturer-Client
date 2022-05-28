import React from 'react';



const ManageProductRow = ({ manageProduct, index , setDeleteModal}) => {

    const { _id, name, img, minimumOQ, price, availableQ } = manageProduct;

   
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td> <div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="" />
                </div> </div>
            </td>
            <td>{price}</td>
            <td>{minimumOQ}</td>
            <td>{availableQ}</td>
            <td>
                <label onClick={() => setDeleteModal(manageProduct)} for="delete-confirm-modal" className="btn btn-square btn-primary">X</label>

            </td>
        </tr>

    );
};

export default ManageProductRow;