import React from 'react'

const Footer = () => {
    return (
            <div className='footer'>
                <p>This page was created with</p>
                <div className='container'>
                    <i title='JavaScript' className='fab fa-js-square techIcon'></i>
                    <i title='React' className='fab fa-react techIcon'></i>
                    <i title='HTML5' className='fab fa-html5 techIcon'></i>
                    <i title='CSS3' className='fab fa-css3-alt techIcon' ></i>
                </div>
            </div>
    )
}

export default Footer