import React from 'react';  
import notfound from '../../assets/images/no-results.png'
const EmptyCartList = (props) => {
    return (
        <div className="container mt-lg-5">
            `<div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 text-center">
                    <h5>{props.text}</h5>
                    <img alt="" className="w-75" src={notfound}/>
                </div>
            </div>
        </div>
    );
    }
export default EmptyCartList;