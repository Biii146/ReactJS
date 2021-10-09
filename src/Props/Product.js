import React, { Component } from 'react'

export default class Product extends Component {
    
    render() {
        // ten phai y chang the cha
        // let {nameCar,price} = this.props;
        let {product} = this.props;
        return (
            <div className="card py-5">
                <img src="./img/CarBasic/products/black-car.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    {/* <h5 className="card-title">{nameCar}</h5>
                    <p className="card-text">{price}$</p> */}
                    {/* C1 */}
                    {/* <h5 className="card-title">{this.props.nameCar}</h5> */}
                    {/* C2: dung detructering */}
                    <h5 className="card-title">{product.name}</h5>

                    <p className="card-text">{product.price}</p>
                </div>
            </div>
        )
    }
}
