import React from 'react';
import FeatureStore from '../../store/FeatureStore';
import FeaturesSkeleton from '../../skeleton/features-skeleton';

const Features = () => {

    const {FeatureList} = FeatureStore();
    if(FeatureList===null){
        return <FeaturesSkeleton/>
    }
    return (
        <div className="container section">
            <div className="row">
                {
                    FeatureList.map((item,index)=>(
                        <div key={index} className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="w-100" src={"https://ecommerce.amitjs.com/assets/img/trusted/1.png"} />
                                            {/* <img className="w-100" src={item['img']} /> */}
                                        </div>
                                        <div className="col-9">
                                            <h3 className="bodyXLarge">{item['name']}</h3>
                                            <span className="bodySmall">{item['description']}]</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Features;