import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 2000, img: "./img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "silver car", price: 2000, img: "./img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 1000, img: "./img/CarBasic/products/red-car.jpg" }
    ];

    renderTable = () => {
        let content = this.productList.map((product, index) => {
            // return trong map sẽ ko dùng vòng lặp, chỉ dừng khi duyệt mảng
            //return trong map tự động trả về 1 mảng mới chứa các giá trị return (ko cần dùng lệnh push nữa) --> 1. cần phải có biến content để chứa mảng mới và 2.return biến content để cung cấp kq ra bên ngoài
            
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="w-50"><img className="w-50" src={product.img} alt="" /></td>
            </tr>
        })
        return content;
    }

render() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}

                </tbody>
            </table>

        </div>
    )
}
}
