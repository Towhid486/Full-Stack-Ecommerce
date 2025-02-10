import React, { useState } from 'react';
import ProductImages from './product-images';
import ProductStore from '../../store/ProductStore';
import DetailsSkeleton from './../../skeleton/details-skeleton';
import HTMLReactParser from 'html-react-parser/lib/index';
import Reviews from './reviews';
import CartSubmitButton from '../cart/cartSubmitButton';
import toast from 'react-hot-toast';
import CartStore from '../../store/CartStore';
import WishStore from '../../store/WishStore';
import WishSubmitButton from './../wish/wishSubmitButton';
import NoData from '../../layout/NoData';
import { useNavigate } from 'react-router-dom';
import UserStore from '../../store/UserStore';

const Details = () => {
    const {Details} = ProductStore();
    const {CartForm,CartFormChange,CartSaveRequest,CartListRequest} = CartStore();
    const {WishSaveRequest,WishListRequest} = WishStore();
    const {isLogin} = UserStore();
    const navigate = useNavigate()

    const [quantity,setQuantity] = useState(1);

    const incrementQuantity = ()=>{
        setQuantity(quantity=>quantity+1)
    }
    const decrementQuantity = ()=>{
        if(quantity>1){
            setQuantity(quantity=>quantity-1)
        }
    }

    const AddCart = async(productID)=>{
        if(isLogin()){

            let res = await CartSaveRequest(CartForm,productID,quantity);
            if(res){
                toast.success("Item Added to Cart");
                await CartListRequest()
            }
        }else{
            toast.error("Please login");
            navigate('/login')
        }
    }

    const AddWish = async(productID)=>{
        let res = await WishSaveRequest(productID);
        if(res){
            toast.success("Item Added to WishList");
            await WishListRequest()
        }else{
            toast.error("Please login");
            navigate('/login')
        }
    }
    
    if(Details===null){
        return <DetailsSkeleton/>
    }else if(Details.length<0){
        return <NoData/>
    }
    else{
        return (
            <div className="section m-0 bg-white">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-7 p-3">
                            <ProductImages />
                        </div>
                        <div className="col-md-5 p-3">
                            <h4>{Details[0]['title']}</h4>
                            <p className="text-muted bodySmall my-1">Category:  <b>{Details[0]['category']['categoryName']}</b></p>
                            <p className="text-muted bodySmall my-1">Brand:  <b>{Details[0]['brand']['brandName']}</b></p>
                            <p className="bodySmall mb-2 mt-1">{Details[0]['shortDes']}</p>
                            {
                                Details[0]['discount']?(
                                    <span className='bodyXLarge'>Price: <strike className="text-secondary">{Details[0]['price']}</strike> {Details[0]['discountPrice']}$</span>
                                )
                                :
                                (
                                    <span className='bodyXLarge'>Price: {Details[0]['price']}$</span>
                                )
                            }
                            <div className="row">
                                <div className="col-4 p-2">
                                    <label className="bodySmall">Size</label>
                                    <select value={CartForm.size} onChange={(e)=>{CartFormChange('size',e.target.value)}} className="form-control my-2 form-select">
                                        <option value="">Size</option>
                                        {
                                            Details[0]['details']['size'].split(",").map((item,index)=>(
                                                <option value={item}>{item}</option>
                                            ))
                                        }
                                    
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="bodySmall">Color</label>
                                    <select value={CartForm.color} onChange={(e)=>{CartFormChange('color',e.target.value)}} className="form-control my-2 form-select">
                                        <option value="">Color</option>
                                        {
                                            Details[0]['details']['color'].split(",").map((item,index)=>(
                                                <option value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="bodySmall">Quantity</label>
                                    <div className="input-group my-2">
                                        <button onClick={decrementQuantity} className="btn btn-outline-secondary">-</button>
                                        <input value={quantity} type="text" className="form-control bg-light text-center" readOnly />
                                        <button onClick={incrementQuantity} className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>
                                <div className="col-4 p-2">
                                    <CartSubmitButton onClick={()=>{ AddCart(Details[0]['_id'])}} text={'Add to Cart'} className="btn w-100 btn-success"/>
                                </div>
                                <div className="col-4 p-2">
                                    <WishSubmitButton onClick={()=>{ AddWish(Details[0]['_id'])}} text={'Add to Wish'} className="btn w-100 btn-success"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12 col-12 col-sm-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Special-tab" data-bs-toggle="tab" data-bs-target="#Special-tab-pane"
                                type="button" role="tab" aria-controls="Special-tab-pane" aria-selected="true">Specifications</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane"
                                type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false">Review</button>
                                </li>
                            </ul>
                            <div className="tab-content pt-4" id="myTabContent">
                                <div className="tab-pane fade show active" id="Special-tab-pane" role="tabpanel" aria-labelledby="Special-
                                tab" tabIndex="0">
                                    {
                                        HTMLReactParser(Details[0]['details']['des'])
                                    }
                                </div>
                                <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel" aria-labelledby="Review-tab"
                                tabIndex="0">
                                        <Reviews/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

};

export default Details;