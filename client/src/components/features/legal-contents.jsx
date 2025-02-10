import React from 'react';
import FeatureStore from '../../store/FeatureStore';
import LegalContentSkeleton from '../../skeleton/legal-content-skeleton';
import HTMLReactParser from 'html-react-parser/lib/index';

const LegalContents = () => {
    const {LegalDetails} = FeatureStore();
    if (LegalDetails===null){
        return <LegalContentSkeleton/>
    }
    else {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            {
                                HTMLReactParser(LegalDetails[0]['description'])
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default LegalContents;