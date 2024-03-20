import React from 'react';
import "./ImageBox.css";
import guy from "../../assets/images/landscape-guy.jpg";

function ImageBox() {
    return (
        <div className="image-box">
            <img className="image" src={guy}/>
        </div>
    )
};

export default ImageBox;