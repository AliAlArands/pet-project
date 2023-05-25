import React from "react";
import './ProductComponent.css';
import Group from './../../assets/Group.png';
const ProductComponent = () => {
    return (
        <>
       
        <div className="container">
        <div className="left">
            <img src={Group} alt=""/>
        </div>
        <div className="right">
            <div className="right-content">
                <div className="first">
                    <h1>Product Name</h1>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="sold">sold(250)</p>
                    <p className="price">20 $</p>
                </div>
                <div className="second">
                    <p className="title">description</p>
                </div>
                <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare
                        turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
                        Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis
                        vulputate enim sed magna sit. A id cursus dolor urna.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="add">
        <select name="select" id="select">
            <option value="1">1</option>
        </select>
        <button>Add To Cart</button>
    </div>
    </>
    );
}
export default ProductComponent;