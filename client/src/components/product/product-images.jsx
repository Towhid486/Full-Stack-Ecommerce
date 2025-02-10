import React from 'react';
import ProductStore from '../../store/ProductStore';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const ProductImages = () => {
    
    const {Details} = ProductStore();
    const images = [
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},
        { original: "https://placehold.co/400", thumbnail:  "https://placehold.co/400"},

        // { original: Details[0]['details']['img1'], thumbnail:  Details[0]['details']['img1']},
        // { original: Details[0]['details']['img2'], thumbnail:  Details[0]['details']['img2']},
        // { original: Details[0]['details']['img3'], thumbnail:  Details[0]['details']['img3']},
        // { original: Details[0]['details']['img4'], thumbnail:  Details[0]['details']['img4']},
        // { original: Details[0]['details']['img5'], thumbnail:  Details[0]['details']['img5']},
        // { original: Details[0]['details']['img6'], thumbnail:  Details[0]['details']['img6']},
        // { original: Details[0]['details']['img7'], thumbnail:  Details[0]['details']['img7']},
        // { original: Details[0]['details']['img8'], thumbnail:  Details[0]['details']['img8']},
    ]
    return (
        <div>
            <ReactImageGallery autoPlay={true} items={images} />
        </div>
    );
};

export default ProductImages;