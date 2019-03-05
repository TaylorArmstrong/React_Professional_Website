import React from 'react'

const Scroll = (props) => {
    return (
        <div className='scrollSection' id='projects'>
            {props.children}
        </div>
    )
}

export default Scroll