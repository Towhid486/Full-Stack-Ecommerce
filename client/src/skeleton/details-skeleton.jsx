import Lottie from 'lottie-react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const DetailsSkeleton = () => {
    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-7 align-content-center p-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {
                                        Array.from({length:10}).map(()=>(
                                            <Skeleton count={1} />
                                        ))
                                    }
                                </div>
                                <div className="col-3">
                                    <Lottie className="w-100" animationData={""} loop={true} />
                                </div>
                                <div className="col-3">
                                    <Lottie className="w-100" animationData={""} loop={true} />
                                </div>
                                <div className="col-3">
                                    <Lottie className="w-100" animationData={""} loop={true} />
                                </div>
                                <div className="col-3">
                                    <Lottie className="w-100" animationData={""} loop={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 p-1">
                        {
                            Array.from({length:10}).map(()=>(
                                <Skeleton count={1} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSkeleton;