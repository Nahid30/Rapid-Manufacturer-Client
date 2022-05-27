import React, { useEffect, useState } from 'react';
import AddProductCard from './AddProductCard';

const AddNewProduct = () => {
    const [addProducts, setAddProducts] = useState([]);
    useEffect(() => {
        fetch('https://rapid-manufacturer.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAddProducts(data)
            })
    }, [])
    return (
        <div>
            <h2>NEW Products : {addProducts.length}</h2>
            {
                addProducts.map(addProduct=> <AddProductCard
                    key={addProduct._id}
                    addProduct={addProduct}

                ></AddProductCard> )
            }
        </div>
    );
};

export default AddNewProduct;