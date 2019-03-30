import React from 'react'
import { Parallax } from "react-parallax"

const BodyParallax = () => {
    return (
        <Parallax
            className='bodyParallax' 
            bgImage={require('../images/redRocksOutsideBanner.jpg')} 
            strength={500}
            clipath='inherit'>
            <div 
                style={{ height: 800 }}
                className='bodyParaDiv'>
            </div>
        </Parallax >
    )
}

export default BodyParallax