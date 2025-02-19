import {useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import logo from "../assets/images/plainb-logo.svg"
import ProductStore from '../store/ProductStore';
import UserStore from './../store/UserStore';
import UserSubmitButton from './../components/user/userSubmitButton';
import CartStore from '../store/CartStore';
import WishStore from '../store/WishStore';
const AppNavBar = () => {
    const {SearchKeyword,SetSearchKeyword} = ProductStore();
    const location = useLocation()
    const {isLogin,UserLogoutRequest} = UserStore();
    const {CartCount,CartListRequest} = CartStore();
    const {WishCount,WishListRequest} = WishStore();
    const navigate = useNavigate(); // React Router's navigation hook

    const onLogout = async ()=>{
        await UserLogoutRequest()
        sessionStorage.clear();
        localStorage.clear();
        navigate('/')
    }

    useEffect(()=>{
        (async()=>{
            if(isLogin()){
                await CartListRequest();
                await WishListRequest();
            }
            // Clear search input when URL changes
            SetSearchKeyword("");
        })()
    },[location])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (SearchKeyword.trim().length > 0) {
                navigate(`/by-keyword/${SearchKeyword.trim()}`); // Navigate to the search results
            }
        }
    };
    
    return (
        <div>
            <div className="container-fluid text-white p-2 bg-success">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6 col-8">
                            <span>
                                <span className="f-12 "><i className="bi bi-envelope"></i> Support@PlanB.com </span>
                                <span className="f-12 mx-2"><i className="bi bi-envelope"></i> +8801774688159 </span>
                            </span>
                        </div>
                        <div className="col-md-6 col-4">
                            <span className="float-end">
                                <span className="bodySmall mx-2"><i className="bi bi-whatsapp"></i></span>
                                <span className="bodySmall mx-2"><i className="bi bi-youtube"></i></span>
                                <span className="bodySmall"><i className="bi bi-facebook"></i></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={logo} alt="" width="96px" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06" aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4">
                                <Link className=" btn btn-light nav-link text-start px-1" to="/">Home</Link>
                               {
                                 isLogin()?(
                                    <>
                                        <Link to="/orders" type="button" className="btn px-0 d-flex btn-light position-relative D-sm-visible D-lg-hidden ">
                                            <span className='px-1'>Orders</span><i className="bi text-dark bi-truck"></i>
                                            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{CartCount}</span> */}
                                        </Link>
                                        <UserSubmitButton onClick={onLogout} text="Logout" className="Right-btn btn btn-dark D-sm-visible D-lg-hidden mt-1 "/>
                                        {/* <Link type="button" className="btn ms-3 btn-success" to="/profile">Profile</Link> */}
                                    </>
                                ): ""
                               }
                            </span>
                        </ul>
                        
                    </div>
                    <div className="button-group d-flex Btn-group">
                        <Link to="/cart" type="button" className="btn ms-3 d-flex btn-light position-relative">
                            <i className="bi text-dark bi-bag"></i><span className='px-1 D-sm-hidden'>Cart</span>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{CartCount}</span>
                        </Link>
                        <Link to="/wishlist" type="button" className="btn ms-3 d-flex btn-light position-relative">
                            <i className="bi text-dark bi-heart"></i><span className='px-1 D-sm-hidden'>Wish</span>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{WishCount}</span>
                        </Link>
                        <Link to="/orders" type="button" className="btn ms-3 d-flex btn-light position-relative D-sm-hidden">
                            <i className="bi text-dark bi-truck"></i><span className='px-1'>Orders</span>
                        </Link>
                    </div>
                    
                    <div className="d-lg-flex width-100">
                        <div className="input-group">
                            <input onKeyDown={handleKeyDown} value={SearchKeyword} onChange={(e)=>SetSearchKeyword(e.target.value)}  className="form-control" type="search" placeholder="Search..." aria-label="Search" />
                            <Link to={SearchKeyword.length>0?`/by-keyword/${SearchKeyword}`: ""} className="btn btn-outline-dark" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style=
                                    {{ width:24, height:24 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="button-group d-flex">
                            {/* <Link to="/cart" type="button" className="btn ms-3 d-flex btn-light position-relative">
                                <i className="bi text-dark bi-bag"></i><span className='px-1 D-sm-hidden'>Cart</span>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{CartCount}</span>
                            </Link>
                            <Link to="/wishlist" type="button" className="btn ms-3 d-flex btn-light position-relative">
                                <i className="bi text-dark bi-heart"></i><span className='px-1 D-sm-hidden'>Wish</span>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{WishCount}</span>
                            </Link>
                            <Link to="/orders" type="button" className="btn ms-3 d-flex btn-light position-relative D-sm-hidden">
                                <i className="bi text-dark bi-truck"></i><span className='px-1'>Orders</span>
                            </Link> */}
                            {
                                isLogin()?(
                                    <>
                                        <UserSubmitButton onClick={onLogout} text="Logout" className="btn ms-3 btn-dark d-flex D-sm-hidden"/>
                                        <Link type="button" className="btn ms-3 btn-success" to="/profile">Profile</Link>
                                    </>
                                ):(
                                    <Link type="button" className="btn ms-3 btn-success" to="/login">Login</Link>
                                )
                            }
                        </div>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    )
            };

export default AppNavBar;