import React from 'react';
import ProductStore from '../../store/ProductStore';
import StarRatings from 'react-star-ratings';

const Reviews = () => {
    const {ReviewList} = ProductStore();
    return (
            <ul className="list-group mt-4 list-group-flush">
                {
                    ReviewList!==null?(ReviewList.map((item,index)=>(
                        <li key={index} className="list-group-item bg-transparent">
                            <h6 className='m-0 p-0'><i className="bi bi-person"></i> <strong>{item?.profile?.cus_name}</strong></h6>
                            <StarRatings rating={parseFloat(item?.rating)} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                            <p>{item?.des}</p>
                        </li>
                    ))) : (<span></span>)
                }
            </ul>
    );
};

export default Reviews;