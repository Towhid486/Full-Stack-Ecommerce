import React, { useEffect } from 'react';
import CartStore from '../../store/CartStore';
import CartSkeleton from '../../skeleton/cart-skeleton';
import EmptyCartList from './empty-cart-list';
import CartSubmitButton from './cartSubmitButton';
import toast from 'react-hot-toast';
import UserStore from "../../store/UserStore.js";
import {useNavigate} from "react-router-dom";

const CartList = () => {
    const {CartList,CartTotal,CartVatTotal,CartPayableTotal,CartListRequest,RemoveCartListRequest,CreateInvoiceRequest} = CartStore()
    const {ProfileDetails, ProfileDetailsRequest} = UserStore()
    const navigate = useNavigate();
    const ProfilePageNavigate = ()=>{
        navigate('/profile')
    }
    useEffect(()=>{
        (async()=>{
            await CartListRequest()
            await ProfileDetailsRequest()
        })()
    },[CartListRequest])

    const remove = async(cartID)=>{
        await RemoveCartListRequest(cartID)
        toast.error("Cart Item Deleted")
    }

    if(CartList===null){
        return <CartSkeleton/>
    }
    else if(CartList.length===0){
        return <EmptyCartList text={"Your Cart is Empty"}/>
    }
    else{
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                        <ul className="list-group list-group-flush"> 
                            { 
                                CartList.map((item,i)=>{
                                    let price=item['product']['price']
                                    if(item['product']['discount']===true){
                                        price=item['product']['discountPrice']
                                    }
                                    return( 
                                        <li key={i} className="list-group-item d-flex justify-content-between align-items-start">
                                            <img className="rounded-1" width="90" height="auto" src='https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg' />
                                            {/* <img className="rounded-1" width="90" height="auto" src={item['product']['image']} /> */}
                                            <div className="ms-2 me-auto">
                                                <p className="fw-lighter m-0">{item['product']['title']}</p>
                                                <p className="fw-lighter my-1">Unit Price: {price},Qty: {item['qty']}, Size: {item['size']},Color: {item['color']}</p>
                                                <p className=" h6 fw-bold m-0 text-dark">Total <i className="bi bi-currency-dollar"></i>{parseInt(price)*parseInt(item['qty'])}</p>
                                            </div>
                                            <button   button onClick={()=>remove(item['_id'])} className="btn btn-sm btn-outline-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </li> 
                                    ) }) 
                            } 
                        </ul>
                        <div className="my-4">
                            <ul className="list-group bg-transparent list-group-flush">
                                <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                    <span className="float-end">Total: <i className="bi bi-currency-dollar" />{CartTotal} </span>
                                </li>
                                <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                    <span className="float-end"> Vat(5%): <i className="bi bi-currency-dollar" />{CartVatTotal}</span>
                                </li>
                                <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                    <span className="float-end"> Payable: <i className="bi bi-currency-dollar" />{CartPayableTotal}</span>
                                </li>
                                <li className="list-group-item bg-transparent ">
                                    {
                                        ProfileDetails===null ?(
                                                <span className="float-end text-end">
                                                    <p className=" h6 fw-bold m-0 text-dark"> Your Profile Is Not Completed To Checkout Please <i className="bi bi-arrow-down-circle"></i></p>
                                                    <CartSubmitButton text="Complete Your Profile" onClick={ProfilePageNavigate} className="btn px-5 mt-2 btn-dark"/>
                                                </span>
                                            )
                                            : (
                                                <span className="float-end">
                                                <CartSubmitButton text="Check Out " onClick={async () => {await CreateInvoiceRequest()}} className="btn px-5 mt-2 btn-success"/>
                                            </span>
                                            )
                                    }
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default CartList;