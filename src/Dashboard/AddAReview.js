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


        fetch(`https://rapid-manufacturer.herokuapp.com/review`,{
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
            <h1 className='text-center my-4 text-xl text-emerald-500'>Give us your Feedback and Reviews</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleAddReview} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review Star</span>
                        </label>
                        <select required name='ratings' className="input-bordered select w-full max-w-xs">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comments:</span>
                        </label>
                        <textarea  className="textarea input-bordered" name='comments' placeholder="Type your Review Comments" required></textarea>

                    </div>

                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Review</button>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default AddAReview;