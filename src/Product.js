import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>&#11088;</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg" alt="" />
            <button>Add to basket</button>
        </div>
    );
}

export default Product;