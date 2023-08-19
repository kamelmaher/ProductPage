import { useState } from "react";
import personImg from "../../images/image-avatar.png"
import Cart from "./Cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
type NavProps = {
    products: number[]
    clear: ()=> void
    deletet: (id:number)=> void
    empty: boolean
}
function Nav({products , clear , deletet , empty}:NavProps) {
    const [showCart, setShowCart]  = useState(false);   
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container ">
                    <a className="navbar-brand fw-bold fs-3" href="#">Sneakers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-3 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Women</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-5 align-items-center ">
                            <div onClick={() => setShowCart(!showCart)} className="position-relative cart-icon">
                            {
                            showCart ? <Cart deletet={deletet} products={products} clear={clear} /> : null
                            }
                            <FontAwesomeIcon icon={faCartShopping} />
                                {empty && products.length > 0 ? <span className="is-empty">{products.length}</span> : null}
                            </div>
                            <div className="acc">
                                <img src={personImg} alt="" className="img-fluid"  />
                            </div>
                        </div>
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default Nav;
