import React from "react"
import Image from "./image.mjs"

import example from "../images/flowers.jpg"
import imageTwo from "../images/sky.jpg"
import imageThree from "../images/bigben.jpg"
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image-left">
            <img src={imageTwo} />
          </div>

          <div className="main-image">
            <img src={example} />
          </div>

          <div className="side-image-right">
            <img src={imageThree} />
          </div>

          <div className="main-text">Giacomo Wilmot</div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Fullstack Developer</div>
    </div>
  )
}

export default Banner
