import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgCar:"./img/CarBasic/products/black-car.jpg"
    }
    renderImg = (color) => {
        //hàm renderImg có chức năng: gán giá trị mới cho state và render lại UI
        this.setState({
            imgCar:`./img/CarBasic/products/${color}-car.jpg`

        }) 
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img className="img-fluid" src={this.state.imgCar} alt />
                    </div>
                    <div className="col-4">
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn bg-dark text-white" onClick={()=>{
                                    this.renderImg("black")
                                }}>Black</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn bg-secondary" onClick={()=>{
                                 this.renderImg("steel")
                                }}>Steel</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn btn-light" onClick={() => {
                                    this.renderImg("silver")}}>Silver</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn btn-danger" onClick={() =>{
                                    this.renderImg("red")
                                }}>Red</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
