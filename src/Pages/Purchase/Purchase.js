// import React, { useEffect, useState } from 'react';
// import AddAProduct from '../../Dashboard/AddAProduct';



// const Purchase = () => {


//     const [addProducts, setAddProducts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/items')
//             .then(res => res.json())
//             .then(data => setAddProducts(data))
//     }, []);


//     return (
//         <div>
//                 {
//                     addProducts.map(addProduct => <AddAProduct
//                         key={addProduct._id}
//                         addProduct={addProduct}
//                     ></AddAProduct>)
//                 } 
//         </div>
//     );
// };

// export default Purchase;


