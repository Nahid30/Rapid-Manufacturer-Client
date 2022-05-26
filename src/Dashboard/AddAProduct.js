import React from 'react';
import { useForm } from "react-hook-form";


const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log('data', data);
    }

    return (
        <div className='flex justify-center items-center '>

            <div>
                <div>
                    <h2 className='text-center my-6 text-green-600 font-semibold text-xl'>Add a New Product</h2>
                </div>

                <form  onSubmit={handleSubmit(onSubmit)}>

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