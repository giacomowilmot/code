import React from "react";
import Image from "./image.mjs";

const imagePath = "C:/Windows/System32/code/src/images/example.png"; 
const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Giacomo Wilmot</div>
                    <div className="main-image">
                        <Image src={imagePath}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;