import React from 'react';  
import notfound from '../../assets/images/no-results.png'
const EmptyWishList = () => {
    return (
        <div className="container mt-lg-5">
            `<div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 text-center">
                    <h5>Your Wish List is Empty</h5>
                    <img alt="" className="w-75" src={notfound}/>
                </div>
            </div>
        </div>
    );
    }
export default EmptyWishList;