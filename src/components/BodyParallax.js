import React from 'react'
import { Parallax } from "react-parallax"

const BodyParallax = () => {
    return (
        <Parallax bgImage={require('../images/redRocksOutsideBanner.jpg')} strength={500}>
            <div style={{ height: 500 }}>
            </div>
        </Parallax >
    )
}

export default BodyParallax