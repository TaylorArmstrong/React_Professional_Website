import React from 'react'
import { Parallax } from "react-parallax"

const BodyParallax = () => {
    return (
        <Parallax
            className='bodyParallax' 
            bgImage={require('../images/redRocksOutsideBanner.jpg')} 
            strength={500}>
            <div style={{ height: 400 }}>
            </div>
        </Parallax >
    )
}

export default BodyParallax