import React, { Component } from 'react'

export default class HandleEvent extends Component {
    //Phương thức (viết tắ là met sẽ ra)
    testHandleEvent = () => {
        alert("Click rồi nè");
    }
    showInfo = (name) => {
        alert(`Hello ${name}`);

    }


    render() {
        let fullName = "Hoàng Thảo Liên"
        return (
            <div className="container">
                <button className="btn btn-info" onClick={this.testHandleEvent}>Click Me</button>
                <button className="btn btn-success ml-5" onClick={() => {
                    this.showInfo(fullName);
                }}>Show Info</button>
            </div>
        )
    }
}
