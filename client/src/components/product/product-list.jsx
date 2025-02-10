import React, {useEffect, useState} from 'react';
import ProductStore from "../../store/ProductStore.js";
import ProductsSkeleton from "../../skeleton/products-skeleton.jsx";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import NoData from '../../layout/NoData.jsx';
const ProductList = () => {
    const {ListProduct,BrandList,BrandListRequest,CategoryList,CategoryListRequest,ListByFilterRequest}=ProductStore();
    let   [Filter,setFilter] = useState({categoryID: "",brandID: "",priceMin: "",priceMax: ""})

    const inputOnChange = async(name,value)=>{
        setFilter((data)=>({
            ...data,
            [name]:value
        }))
    }


    useEffect(()=>{
        (async()=>{
            BrandList===null?await BrandListRequest():null;
            CategoryList===null?await CategoryListRequest():null;

            const isEveryFilterPropertyEmpty = Object.values(Filter).every(value => value==="");
            !isEveryFilterPropertyEmpty?await ListByFilterRequest(Filter):null;

        })()
    },[Filter])

    return (
        
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-3 p-2">
                    <div className="card p-3 shadow-sm">
                        <label className="form-label mt-3">Brands</label>
                        <select value={Filter.brandID} onChange={(e)=>{inputOnChange('brandID',e.target.value)}} className="form-control form-select">
                            <option value="">Choose Brand</option>
                            {BrandList!==null?(
                                BrandList.map((item,i)=>(
                                    <option key={i} value={item['_id']}>{item['brandName']}</option>
                                ))
                                ):<option></option>}
                        </select>

                        <label className="form-label mt-3">Categories</label>
                        <select value={Filter.categoryID} onChange={(e)=>{inputOnChange('categoryID',e.target.value)}} className="form-control form-select">
                            <option value="">Choose Category</option>
                            {CategoryList!==null?(
                                CategoryList.map((item,index)=>(
                                    <option key={index} value={item['_id']}>{item['categoryName']}</option>
                                ))
                                ):<option></option>}
                        </select>


                        <label className="form-label mt-3">Minimum Price ${Filter.priceMin}</label>
                        <input value={Filter.priceMin} onChange={(e)=>{inputOnChange('priceMin',e.target.value)}} min={0} max={10000} step={100} type="range" className="form-range" />


                        <label className="form-label mt-3">Maximum Price ${Filter.priceMax}</label>
                        <input value={Filter.priceMax} onChange={(e)=>{inputOnChange('priceMax',e.target.value)}} min={0} max={100000} step={1000} type="range" className="form-range" />

                    </div>
                </div>
                <div className="col-md-9 p-2">
                    {
                        ListProduct===null?(<ProductsSkeleton/>) : ListProduct.length === 0 ? (
                                <NoData/>
                            ) : (
                            <div className="container">
                                <div className="row">
                                    <h6 className='text-center'>{ListProduct.length} products found</h6>
                                    {
                                        ListProduct?.map((item,index)=>{

                                            let price = <p className="bodyMedium text-dark my-1">Price:{item['price']}$</p>
                                            if(item['discount']===true){
                                                price = <p className="bodyMedium text-dark my-1">Price: <strike className="text-muted">{item['price']}</strike> {item['discountPrice']}$</p>
                                            }

                                            return(
                                                <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-6">
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
    );
};

export default ProductList;