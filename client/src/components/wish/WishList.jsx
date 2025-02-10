import React, { useEffect } from 'react';
import WishStore from '../../store/WishStore';
import ProductsSkeleton from '../../skeleton/products-skeleton';
import EmptyWishList from './empty-wish-list';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const WishList = () => {
    const {WishList,WishListRequest,RemoveWishListRequest} = WishStore();

    useEffect(()=>{
        (async()=>{
            await WishListRequest();
        })()
    },[])

    const removeItem = async (productID)=>{
        await RemoveWishListRequest(productID)
        await WishListRequest()
    }

    if(WishList===null){
        return(
            <div className="container">
                <div className="row">
                    <ProductsSkeleton/>
                </div>
            </div>
        )
    }else if(WishList.length===0){
        return (
            <EmptyWishList/>
        )
    }
    else{
        return(
            <div className="container">
                <div className="row">
                    <h6 className='pt-md-2 text-center'>{WishList.length} products on Wish List</h6>
                    {
                            WishList?.map((item,index)=>{

                            let price = <p className="bodyMedium text-dark my-1">Price:{item['product']['price']}$</p>
                            if(item['product']['discount']===true){
                                price = <p className="bodyMedium text-dark my-1">Price: <strike className="text-muted">{item['product']['price']}</strike> {item['product']['discountPrice']}$</p>
                            }

                            return(
                                <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                    <div className="card shadow-sm h-100 rounded-3 bg-white">
                                        <img className="w-100 rounded-top-2" src={"https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"} />
                                        {/* <img className="w-100 rounded-top-2" src={item['product]['image']} /> */}
                                        <div className="card-body">
                                            <p className="bodySmall text-secondary my-1">{item['product']['title']}</p>
                                            {price}
                                            <StarRatings rating={parseFloat(item['product']['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                            <p className='mt-3'>
                                                <button onClick={async ()=>{await removeItem(item['productID'])}} className='btn btn-outline-danger btn-sm'>Remove</button>
                                                <Link to={`/details/${item['productID']}`} className="btn mx-2 btn-outline-success btn-sm" >Details</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


};

export default WishList;