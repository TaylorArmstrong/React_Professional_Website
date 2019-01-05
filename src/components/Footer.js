import React from 'react'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='row'>
                <div className='col s4'>
                </div>
                <div className='col s4'>
                    <div className='container footer-createdBy'>
                        <p>This page was created with</p>
                        <div className='container'>
                            <i title='HTML5' className='fab fa-html5 techIcon'></i>
                            <i title='CSS3' className='fab fa-css3-alt techIcon' ></i>
                            <i title='JavaScript' className='fab fa-js-square techIcon'></i>
                        </div>
                    </div>
                </div>
                <div className='col s4'>
                </div>
            </div>
        </div>
    )
}

export default Footer