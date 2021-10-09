import React, { Component } from 'react'

export default class StateDemo extends Component {
    // isLogin = true;
    username = "HV001";
    // B1:
    state = {
        isLogin:false
    }

    //? HÀM HANDLELOGIN
    handleLogin = async () => {
        // this.isLogin = true;
        let newState = {
            isLogin:true
        }
        //setState hàm bất đồng bộ 
        //anfn  
        //? C1: theo gợi ý của react     
        // this.setState(newState,() => {
        //     console.log(this.state.isLogin);
        // });
        //? C2: dùng cơ chế async, await
        await this.setState(newState);
        console.log(this.state.isLogin);
    }

    //? C2: HÀM RENDERLOGIN() - VIẾT BTH
    //? Phương thức
    renderLogin = () => {
        if (this.state.isLogin) {
            //có thể viết dòng code
            return <span className="text-white">{this.username}</span>;
        }
        // ở đây phải dùng return vì ko phải JSX viết trực tiếp trong phương thức render() nên phải trả về thì ở dưới mới hiểu. Còn nếu viết trực tiếp ở dưới thì ko cần return
        return <button className="btn btn-success" onClick={this.handleLogin}>Login</button>;
    }

    
    

    render() {
        return (
            <div className="container py-5">
                {/* <h1>State Demo</h1> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                        //? C1: HÀM RENDERLOGIN() - VIẾT TẮT
                        {/* Nội dung login */}
                        {/* Nếu isLogin === true thì hiện username, ngược lại hiện button login */}
                        {/* {this.isLogin === true ? <span className="text-white">{this.username}</span>:<button className="btn btn-success">Login</button>} */}

                        //? C2: HÀM RENDERLOGIN() - VIẾT BTH
                        {this.renderLogin()}


                    </div>
                </nav>
            </div>
        )

    }
}
