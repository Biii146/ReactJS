import React, { Component } from 'react'
//? Mục đính: Thay thế cho DOM của JS
export default class DataBiding extends Component {
    //  thuoc tinh
    age = 25;
    img = "https://i.imgur.com/e5Zxf5M.jpg"

    //? Cách render 1 phương thức lên UI
    renderProduct = () => {
        let product = {
            name: "Product 101",
            moTa: "san pham new",
            price: 100,
            img: "https://i.imgur.com/e5Zxf5M.jpg"
        }
        return (
            // thẻ bootrap 
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.img}className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    {product.moTa}
                    <br/>
                    {product.price}
                </p>    
            </div>
        </div>
        )
    }


    //phuong thuc chinh
    render() {
        // local variable
        let name = "Mai Thao Bi"
        return (
            <div className="container py-2">
                <h2>Ten hoc vien: {name}</h2>
                <p>Tuoi hoc vien: {this.age}</p>
                <img className="w-25" src={this.img}alt="..." />

                {this.renderProduct()}


            </div>
        )
    }
}
