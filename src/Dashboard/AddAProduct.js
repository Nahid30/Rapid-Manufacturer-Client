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
        fetch(url, {
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
                    minimum: data.minimum,
                    available: data.available,
                    description: data.description,
                    img : img
                }
                //send to database
                fetch('http://localhost:5000/product', {
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
        <div className='flex justify-center items-center '>

            <div>
                <div>
                    <h2 className='text-center my-6 text-green-500 font-semibold text-xl'>Add a New Product</h2>
                </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control  ">
                        <label class="label">
                            <span class="label-text text-black font-bold">Name</span>

                        </label>
                        <input type="text" placeholder="Enter Product Name"
                            class="input input-bordered  "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />

                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt  text-red-500">{errors.name.message}</span>}



                        </label>
                    </div>

                    {/* email  */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-black font-bold">Price</span>

                        </label>
                        <input type="number" placeholder="Enter Price"
                            class="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />

                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>

                    {/* password start */}

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-black font-bold">Minimum Order</span>

                        </label>
                        <input type="number" placeholder="Minimum Order"
                            class="input input-bordered w-full max-w-xs"
                            {...register("minimum", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order is Required'
                                }
                            })}
                        />

                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-black font-bold">Available Quantity</span>

                        </label>
                        <input type="number" placeholder="Available Quantity"
                            class="input input-bordered w-full max-w-xs"
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Required'
                                }
                            })}
                        />

                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-black font-bold">Description</span>

                        </label>
                        <textarea type="text" placeholder="Description"
                            class="input input-bordered w-full max-w-xs "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />

                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-black font-bold">Photo</span>

                        </label>
                        <input type="file" placeholder="Upload Photo"
                            class="input input-bordered w-full max-w-xs pt-1"
                            {...register("photo", {
                                required: {
                                    value: true,
                                    message: 'Photo is Required'
                                }
                            })}
                        />

                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>
                    <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add Product" />
                </form>
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


    //     fetch(`http://localhost:5000/product`, {
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











// <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
// <form onSubmit={handleAddProduct} class="card-body">

//     <div class="form-control">
//         <label class="label">
//             <span class="label-text">Name</span>
//         </label>
//         <input type="text" placeholder="Type Your Name" name='name' class="input input-bordered input-error w-full max-w-xs" />

//     </div>
//     <div class="form-control">
//         <label class="label">
//             <span class="label-text">Price</span>
//         </label>
//         <input type="number" placeholder="$$$" name='price' class="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div class="form-control">
//         <label class="label">
//             <span class="label-text">Minimum Order</span>
//         </label>
//         <input type="number" placeholder="Minimum Order" name='minimumOQ' class="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div class="form-control">
//         <label class="label">
//             <span class="label-text">Available Quantity</span>
//         </label>
//         <input type="number" placeholder="Available Quantity" name='availableQ' class="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div class="form-control">
//         <label class="label">
//             <span class="label-text">Description</span>
//         </label>
//         <textarea type="text" placeholder="Description" name='description' class="input input-bordered input-error w-full max-w-xs" />
//     </div>
//     <div class="form-control">
//         <label class="label">
//             <span class="label-text">Photo</span>
//         </label>
//         <input type="file" placeholder="Upload Image" name='photo' class="input input-bordered input-error w-full max-w-xs pt-1" />
//     </div>

//     <div class="form-control mt-6">
//         <button type='submit' class="btn btn-primary">Add Product</button>
//     </div>



// </form>
// </div>