import React, { Component } from 'react'
import './style.css'
import styleModule from './StyleComponent.module.css'

export default class StyleComponent extends Component {
    render() {
        // 2.2. css internal: tạo biến riêng lẻ
        let styleInline={
            backgroundColor: "pink",
            color: "blue"
        }
        return (
            <div className="container">
                {/* cách thêm css internal */}
                {/* 2.1. css internal: thêm trực tiếp style vào thẻ p*/}
                <p style={{
                    backgroundColor: "lightsalmon",
                    color:"magenta"
                }}>Style Component import CSS by Internal Direct</p>

                {/* 1. cách thêm css external */}
                <p className="text">Style Component import CSS by Extenal</p>
                <p style={styleInline}>Style Inline import CSS by Internal Variable </p>

                {/* 3. ách thêm css module */}
                <p className={styleModule.fontText}>Style Inline import CSS by Module </p>
                <p className={styleModule["bg-color"]}>Style Inline import CSS by Module with 1 chil class </p>
                <p className={`${styleModule["bg-color"]} ${styleModule["container__p"]}`}>Style Inline import CSS by Module with many chil class </p>



            </div>
        )
    }
}
