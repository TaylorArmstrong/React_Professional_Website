import React from 'react'
import { Parallax } from "react-parallax"

const Header = () => {
    return (
        <Parallax bgImage={require('../images/santaCruzBeachBanner.jpg')} strength={500}>
            <div style={{ height: 250 }}>
                <div className='row container header_text_container'>
                    <h2 className='header_text'>Taylor Armstrong</h2>
                    <div className='container' id='headerIcons'>
                        <a title='GitHub' href='https://github.com/TaylorArmstrong'><i className='fab fa-github'></i></a>
                        <a title='LinkedIn' href='http://www.linkedin.com/in/taylorarmstrong13'><i className='fab fa-linkedin'></i></a>
                        <a title='Call Taylor @ (203)-613-3326' id='Cell Number' href='tel:1-203-613-3326'><i className='fas fa-phone-square'></i></a>
                        <a title='E-Mail Taylor @ TArmstrong1327@gmail.com' id='E-mail' href='mailto:TArmstrong1327@gmail.com'><i className='far fa-envelope'></i></a>
                    </div>
                    <p className='white-text'>Software Engineer || Quality Assurance || Biotechnology || Entrepreneur</p>
                    <p className='white-text'><i>Boulder, CO</i></p>
                </div>
            </div>
        </Parallax >
    )
}

export default Header