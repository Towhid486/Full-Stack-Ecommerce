import React from 'react';
import ProductStore from '../../store/ProductStore';
import ProductsSkeleton from './../../skeleton/products-skeleton';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const Products = () => {

    const {ListByRemark,ListByRemarkRequest} = ProductStore();

    return (


        <div className="section">
            <div className="container-fluid py-5 bg-light">
                <div className="row">
                    <h1 className="headline-4 text-center my-2 p-0">Our Products</h1>
                    <span className="bodySmall mb-3 text-center">Explore a World of Choices Across Our Most Popular</span>
                    <div className="col-12">
                        <div>
                            <ul className="nav nav-pills p-3 justify-content-center mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                        onClick={()=>{ListByRemarkRequest("new")}}
                                    >
                                        New
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-trending-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-trending"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-trending"
                                        aria-selected="false"
                                        onClick={()=>{ListByRemarkRequest("trending")}}
                                    >
                                        Trending
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-popular-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-popular"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-popular"
                                        aria-selected="false"
                                        onClick={()=>{ListByRemarkRequest("popular")}}
                                    >
                                        Popular
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-top-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-top"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-top"
                                        aria-selected="false"
                                        onClick={()=>{ListByRemarkRequest("top")}}
                                    >
                                        Top
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-special-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-special"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-special"
                                        aria-selected="false"
                                        onClick={()=>{ListByRemarkRequest("special")}}
                                    >
                                        Special
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    {
                                        ListByRemark===null?(<ProductsSkeleton/>):(
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        ListByRemark.map((item,index)=>{

                                                            let price = <p className="bodyMedium text-dark my-1">Price:{item['price']}$</p>
                                                            if(item['discount']===true){
                                                                price = <p className="bodyMedium text-dark my-1">Price: <strike className="text-muted">{item['price']}</strike> {item['discountPrice']}$</p>
                                                            }

                                                            return(
                                                                <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                    <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                        <img className="w-100 rounded-top-2" src={"https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"} />
                                                                        {/* <img className="w-100 rounded-top-2" src={item['image']} /> */}
                                                                        <div className="card-body">
                                                                            <p className="bodySmall text-secondary my-1">{item['title']}</p>
                                                                            {price}
                                                                            <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-trending"
                                    role="tabpanel"
                                    aria-labelledby="pills-trending-tab"
                                >
                                {
                                    ListByRemark===null?(<ProductsSkeleton/>):(
                                        <div className="container">
                                            <div className="row">
                                                {
                                                    ListByRemark.map((item,index)=>{

                                                        let price = <p className="bodyMedium text-dark my-1">Price:{item['price']}$</p>
                                                        if(item['discount']===true){
                                                            price = <p className="bodyMedium text-dark my-1">Price: <strike className="text-muted">{item['price']}</strike> {item['discountPrice']}$</p>
                                                        }

                                                        return(
                                                            <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                    <img className="w-100 rounded-top-2" src={"https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"} />
                                                                    {/* <img className="w-100 rounded-top-2" src={item['image']} /> */}
                                                                    <div className="card-body">
                                                                        <p className="bodySmall text-secondary my-1">{item['title']}</p>
                                                                        {price}
                                                                        <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            
                                            </div>
                                        </div>
                                    )
                                }
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-popular"
                                    role="tabpanel"
                                    aria-labelledby="pills-popular-tab"
                                >
                                {
                                    ListByRemark===null?(<ProductsSkeleton/>):(
                                        <div className="container">
                                            <div className="row">
                                                {
                                                    ListByRemark.map((item,index)=>{

                                                        let price = <p className="bodyMedium text-dark my-1">Price:{item['price']}$</p>
                                                        if(item['discount']===true){
                                                            price = <p className="bodyMedium text-dark my-1">Price: <strike className="text-muted">{item['price']}</strike> {item['discountPrice']}$</p>
                                                        }

                                                        return(
                                                            <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                    <img className="w-100 rounded-top-2" src={"https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"} />
                                                                    {/* <img className="w-100 rounded-top-2" src={item['image']} /> */}
                                                                    <div className="card-body">
                                                                        <p className="bodySmall text-secondary my-1">{item['title']}</p>
                                                                        {price}
                                                                        <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                        </div>
                                    )
                                }    </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-top"
                                    role="tabpanel"
                                    aria-labelledby="pills-top-tab"
                                >
                                {
                                    ListByRemark===null?(<ProductsSkeleton/>):(
                                        <div className="container">
                                            <div className="row">
                                                {
                                                    ListByRemark.map((item,index)=>{

                                                        let price = <p className="bodyMedium text-dark my-1">Price:{item['price']}$</p>
                                                        if(item['discount']===true){
                                                            price = <p className="bodyMedium text-dark my-1">Price: <strike className="text-muted">{item['price']}</strike> {item['discountPrice']}$</p>
                                                        }

                                                        return(
                                                            <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                    <img className="w-100 rounded-top-2" src={"https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"} />
                                                                    {/* <img className="w-100 rounded-top-2" src={item['image']} /> */}
                                                                    <div className="card-body">
                                                                        <p className="bodySmall text-secondary my-1">{item['title']}</p>
                                                                        {price}
                                                                        <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            
                                            </div>
                                        </div>
                                    )
                                }
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-special"
                                    role="tabpanel"
                                    aria-labelledby="pills-special-tab"
                                >
                                {
                                    ListByRemark===null?(<ProductsSkeleton/>):(
                                        <div className="container">
                                            <div className="row">
                                                {
                                                    ListByRemark.map((item,index)=>{

                                                        let price = <p className="bodyMedium text-dark my-1">Price:{item['price']}$</p>
                                                        if(item['discount']===true){
                                                            price = <p className="bodyMedium text-dark my-1">Price: <strike className="text-muted">{item['price']}</strike> {item['discountPrice']}$</p>
                                                        }

                                                        return(
                                                            <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                    <img className="w-100 rounded-top-2" src={"https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"} />
                                                                    {/* <img className="w-100 rounded-top-2" src={item['image']} /> */}
                                                                    <div className="card-body">
                                                                        <p className="bodySmall text-secondary my-1">{item['title']}</p>
                                                                        {price}
                                                                        <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            
                                            </div>
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;