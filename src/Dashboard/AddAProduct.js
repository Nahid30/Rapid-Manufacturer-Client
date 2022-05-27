import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';


const AddAProduct = () => {

    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey='aedee75d1125d78418304ef04d68c66e';
    
    const onSubmit = async data => {
        const image = data?.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
       await  fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
           console.log('imgbb', result);
           if(result.success){
               const img = result.data.url;
               const productsDetails = {
                    name: data.name,
                    price: data.price,
                    minimumOQ: data.minimum,
                    availableQ: data.available,
                    description: data.description,
                    img : img
                }
                //send to database
                 fetch('https://rapid-manufacturer.herokuapp.com/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(productsDetails)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product Added Successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add Product');
                    }
                })
           }
            
        })
    }


    return (
        <div >

            <div>
                <div>
                    <h2 className='text-center my-6 text-green-500 font-semibold text-xl'>Add a New Product</h2>
                </div>

                <div className='w-10/12 lg:w-8/12  pb-10 mx-auto '>
                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

<div className="form-control  ">
    <label className="label">
        <span className="label-text text-black font-bold">Name</span>
    </label>
    <input type="text" placeholder="Enter Product Name"
        className="input input-bordered  "
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.name.message}</span>}
    </label>
</div >

<div className="form-control w-full ">
    <label className="label">
        <span className="label-text text-black font-bold">Price</span>

    </label>
    <input type="number" placeholder="Enter Price"
        className="input input-bordered w-full "
        {...register("price", {
            required: {
                value: true,
                message: 'Price is Required'
            }
        })}
    />

    <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


    </label>
</div>



<div className="form-control w-full ">
    <label className="label">
        <span className="label-text text-black font-bold">Minimum Order</span>

    </label>
    <input type="number" placeholder="Minimum Order"
        className="input input-bordered w-full "
        {...register("minimum", {
            required: {
                value: true,
                message: 'Minimum Order is Required'
            }
        })}
    />

    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


    </label>
</div>

<div className="form-control w-full ">
    <label className="label">
        <span className="label-text text-black font-bold">Available Quantity</span>

    </label>
    <input type="number" placeholder="Available Quantity"
        className="input input-bordered w-full "
        {...register("available", {
            required: {
                value: true,
                message: 'Available Quantity is Required'
            }
        })}
    />

    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


    </label>
</div>
<div className="form-control w-full ">
    <label className="label">
        <span className="label-text text-black font-bold">Description</span>

    </label>
    <textarea type="text" placeholder="Description"
        className="input input-bordered w-full  "
        {...register("description", {
            required: {
                value: true,
                message: 'Description is Required'
            }
        })}
    />

    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


    </label>
</div>
<div className="form-control w-full ">
    <label className="label">
        <span className="label-text text-black font-bold">Photo</span>

    </label>
    <input type="file" placeholder="Upload Photo"
        className="input input-bordered w-full  pt-1"
        {...register("photo", {
            required: {
                value: true,
                message: 'Photo is Required'
            }
        })}
    />

    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


    </label>
</div>
<input className='btn btn-primary w-full max-w-xs' type="submit" value="Add Product" />
</form>
                </div>

          
            </div>


        </div>
    );
};

export default AddAProduct;





    // const handleAddProduct = event => {
    //     event.preventDefault();

    //     const productName = event.target.name.value;
    //     const productPrice = event.target.price.value;
    //     const minimumQuantity = event.target.minimumOQ.value;
    //     const availableQuantity = event.target.availableQ.value;
    //     const productDescription = event.target.description.value;
    //     const productPhoto = event.target.photo.value;

    //     // const name = user.displayName;
    //     // const img = user.photoURL;
    //     // const email = user.email;

      
    //     const addProduct = { productName, productPrice, minimumQuantity, availableQuantity, productDescription, productPhoto}


    //     fetch(`https://rapid-manufacturer.herokuapp.com/product`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(addProduct)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             toast.success('Product Added Successfully')
    //             event.target.reset();
    //         })

    // }











// <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
// <form onSubmit={handleAddProduct} className="card-body">

//     <div className="form-control">
//         <label className="label">
//             <span className="label-text">Name</span>
//         </label>
//         <input type="text" placeholder="Type Your Name" name='name' className="input input-bordered input-error w-full max-w-xs" />

//     </div>
//     <div className="form-control">
//         <label className="label">
//             <span className="label-text">Price</span>
//         </label>
//         <input type="number" placeholder="$$$" name='price' className="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div className="form-control">
//         <label className="label">
//             <span className="label-text">Minimum Order</span>
//         </label>
//         <input type="number" placeholder="Minimum Order" name='minimumOQ' className="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div className="form-control">
//         <label className="label">
//             <span className="label-text">Available Quantity</span>
//         </label>
//         <input type="number" placeholder="Available Quantity" name='availableQ' className="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div className="form-control">
//         <label className="label">
//             <span className="label-text">Description</span>
//         </label>
//         <textarea type="text" placeholder="Description" name='description' className="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div className="form-control">
//         <label className="label">
//             <span className="label-text">Photo</span>
//         </label>
//         <input type="file" placeholder="Upload Image" name='photo' className="input input-bordered input-error w-full max-w-xs pt-1" />
//     </div>

//     <div className="form-control mt-6">
//         <button type='submit' className="btn btn-primary">Add Product</button>
//     </div>



// </form>
// </div>