import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const AddAReview = () => {

    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const ratings = event.target.ratings.value;
        const comments = event.target.comments.value;

        const name = user.displayName;
        const img = user.photoURL;
        const email = user.email;
        const review = {ratings, comments,name, email, img}


        fetch(`http://localhost:5000/review`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            toast.success('Review Added Successfully')
            event.target.reset();
        })


    }
    return (
        <div className='px-10 '>
            <h1 className='text-center my-4 text-xl'>Give us your Feedback and Reviews</h1>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleAddReview} class="card-body">

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Review Star</span>
                        </label>
                        <select required name='ratings' class="input-bordered select w-full max-w-xs">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            
                        </select>
                       
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Comments:</span>
                        </label>
                        <textarea  class="textarea input-bordered" name='comments' placeholder="Type your Review Comments" required></textarea>

                    </div>

                    <div class="form-control mt-6">
                        <button type='submit' class="btn btn-primary">Review</button>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default AddAReview;