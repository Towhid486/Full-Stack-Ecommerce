import React from 'react';
import notfound from "../assets/images/no-results.png"

const NoData = () => {
    return (
        <div className="container mt-lg-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 text-center">
                    <h5>Nothing found</h5>
                    <p>Try changing your filters or search another keywords.</p>
                    <img alt="" className="w-75" src={notfound}/>
                </div>
            </div>
        </div>
    );
};

export default NoData;