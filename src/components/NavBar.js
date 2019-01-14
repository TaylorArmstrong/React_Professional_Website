import React from 'react'
import { Navbar } from 'react-materialize'

const NavBar = () => {
    return (
        <div>
            <Navbar>
                <div>
                    <ul id='mobile-demo' className='NavBar left hide-on-med-and-down'>
                        <li className='nav-item nav-last'>
                            <a className='nav-link' href='#top'>Logo</a>
                        </li>
                    </ul>
                    <ul id='mobile-demo' className='NavBar right hide-on-med-and-down'>
                        <li className='nav-item nav-last'>
                            <a className='nav-link' href='#top'>WELCOME</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#projects'>PROJECTS</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about'>ABOUT</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#technologies'>TECHNOLOGIES</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#contact'>CONTACT</a>
                        </li>
                    </ul>
                </div>
                <ul id='mobile-demo' className='sidenav hide-on-large-only '>
                    <li><a className='nav-link' href='#top'>WELCOME</a></li>
                    <li>
                        <a className='nav-link collapsible-header' href='#projects'>PROJECTS</a>
                        <a className='collapsible-body' id='projectGitIcon' href='https://github.com/TaylorArmstrong'><i className='fab fa-github'></i>GitHub</a>
                    </li>
                    <li>
                        <a className='nav-link collapsible-header' href='#about'>ABOUT</a>
                        <a className='collapsible-body' href='http://www.linkedin.com/in/taylorarmstrong13'><i className='fab fa-linkedin'></i>LinkedIn</a>
                        <a className='collapsible-body' href='https://talent.galvanize.com/students/3092'><i className='far fa-user-circle'></i>Galvanize Talent</a>
                    </li>
                    <li><a className='nav-link' href='#technologies'>TECHNOLOGIES</a></li>
                    <li>
                        <a className='nav-link collapsible-header' href='#contact'>CONTACT 
                        </a>
                        <a className='collapsible-body' title='Call Taylor @ (203)-613-3326' id='Cell Number' href='tel:1-203-613-3326'><i className='material-icons'>phone</i>(203)-613-3326</a>
                        <a className='collapsible-body' title='E-Mail Taylor @ TArmstrong1327@gmail.com' id='E-mail' href='mailto:TArmstrong1327@gmail.com'><i className='material-icons'>email</i>TArmstrong1327@gmail.com</a>
                    </li>
                    <li className='nav-item nav-last'>
                        <a className='nav-link' href='#top'>Logo</a>
                    </li>
                </ul>
            </Navbar>
        </div>
    )
}

export default NavBar