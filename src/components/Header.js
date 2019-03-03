import React, { Component } from 'react'
import Particles from 'react-particles-js'

class Header extends Component {
    render() {
        return (
            <div className='headerSection'>
                <Particles
                    className='particles-js'
                    params={{
                        "particles": {
                            "number": {
                                "value": 30
                            },
                            "size": {
                                "value": 3
                            },
                            'move': {
                                'speed': 2,
                                'direction': 'top',
                                'out_mode': 'out'
                            },
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                            }
                        }
                    }}>
                    
                </Particles>
                <div className='row container header_text_container'>
                    <h2 className='header_text'>Taylor Armstrong</h2>
                    <div className='headerIcons'>
                        <a title='GitHub' href='https://github.com/TaylorArmstrong'><i className='fab fa-github' id='headerIcon'></i></a>
                        <a title='LinkedIn' href='http://www.linkedin.com/in/taylorarmstrong13'><i className='fab fa-linkedin' id='headerIcon'></i></a>
                        <a title='Call Taylor @ (203)-613-3326' id='Cell Number' href='tel:1-203-613-3326'><i className='fas fa-phone-square' id='headerIcon'></i></a>
                        <a title='E-Mail Taylor @ TArmstrong1327@gmail.com' id='E-mail' href='mailto:TArmstrong1327@gmail.com'><i className='far fa-envelope' id='headerIcon'></i></a>
                    </div>
                    <div className='headerDescription'>
                        <p className='white-text'>Software Engineer || Biotechnology || Entrepreneur</p>
                        <p className='white-text'><i>Boulder, CO</i></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header