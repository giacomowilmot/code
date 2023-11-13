import React from "react"
import Image from "./image.mjs"
import Img from "gatsby-image"
import { Link } from "gatsby"

import offwhite from "../images/offwhite.jpg"
import smile from "../images/smile.jpg"

const aboutBlurb = () => {
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content"></div>
          <h3>The ability to create</h3>
          <p>
            Be the change that you wish to see in the world - Mahadma Ghandi
          </p>
          <div className="btn-row">
            <Link to="/work">View my Work</Link>
          </div>

          <div className="side-image-left">
            <img src={offwhite} />
          </div>

          <div className="main-image">
            <img src={smile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutBlurb
