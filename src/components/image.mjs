import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "C:/Windows/System32/code/src/images/example.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    console.log(data);

    if (!data.placeholderImage) {
        return <div>Bild nicht gefunden</div>;
    }

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;
