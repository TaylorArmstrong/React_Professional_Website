import React from 'react'
import { Navbar, NavItem, SideNav, SideNavItem, Collapsible, CollapsibleItem, Button } from 'react-materialize'
import myLogo from '../images/myLogo.png'
import ProfilePic from '../images/profilePic.jpg'
import workSpaceImage from '../images/deskImage.jpg'

const NavBar = () => {
    return (
        <div>
            <Navbar brand='logo' className='hide-on-med-and-down' right>
                <NavItem href='#top' >WELCOME</NavItem>
                <NavItem href='#projects' >PROJECTS</NavItem>
                <NavItem href='#about' >ABOUT</NavItem>
                <NavItem href='#technologies' >TECHNOLOGIES</NavItem>
                <NavItem href='#contact' >CONTACT</NavItem>
            </Navbar>
            <nav className='hide-on-large-only'></nav>
            <SideNav 
                trigger={<a href="/"><i className="sidenav_trigger material-icons hide-on-large-only" >menu</i></a>}
            >
                <SideNavItem userView id='sideNavHeader'
                    user={{
                        background: workSpaceImage,
                        image: ProfilePic,
                        name: 'Taylor Armstrong',
                        phone: '(203)-613-3326',
                        email: 'TArmstrong1327@gmail.com'
                    }}
                />
                <SideNavItem waves href='#top'>WELCOME</SideNavItem>
                <Collapsible>
                    <CollapsibleItem header='PROJECTS' icon='keyboard_arrow_down'>
                        <a href='https://github.com/TaylorArmstrong'><i className='fab fa-github'></i>GitHub</a>
                    </CollapsibleItem>
                </Collapsible>
                <Collapsible>
                    <CollapsibleItem header='ABOUT' icon='keyboard_arrow_down'>
                        <a href='http://www.linkedin.com/in/taylorarmstrong13'><i className='fab fa-linkedin'></i>LinkedIn</a>
                        <a href='https://talent.galvanize.com/students/3092'><i className='far fa-user-circle'></i>Galvanize Talent</a>
                    </CollapsibleItem>
                </Collapsible>
                <SideNavItem waves href='#technologies'>TECHNOLOGIES</SideNavItem>
                
                <Collapsible>
                    <CollapsibleItem header='CONTACT' icon='keyboard_arrow_down'>
                        <a className='collapsible-body' title='Call Taylor @ (203)-613-3326' id='Cell Number' href='tel:1-203-613-3326'>(203)-613-3326<i className='material-icons'>phone</i></a>
                        <a className='collapsible-body' title='E-Mail Taylor @ TArmstrong1327@gmail.com' id='E-mail' href='mailto:TArmstrong1327@gmail.com'>TArmstrong1327@gmail.com</a>
                    </CollapsibleItem>
                </Collapsible>
            </SideNav>
        </div>
    )
}

export default NavBar



// <div>
        //     <nav className='nav-extended'>
        //         <div className='nav-wrapper'>
        //             <a href="#" data-target="mobile-demo" className="sidenav-trigger hide-on-large-only"><i class="material-icons">menu</i></a>
        //             <ul className='left hide-on-med-and-down'>
        //                 <li className='nav-item nav-last'>
        //                     <a className='nav-link' href='#top'>Logo</a>
        //                 </li>
        //             </ul>
        //             <ul className='right hide-on-med-and-down'>
        //                 <li className='nav-item nav-last'>
        //                     <a className='nav-link' href='#top'>WELCOME</a>
        //                 </li>
        //                 <li className='nav-item'>
        //                     <a className='nav-link' href='#projects'>PROJECTS</a>
        //                 </li>
        //                 <li className='nav-item'>
        //                     <a className='nav-link' href='#about'>ABOUT</a>
        //                 </li>
        //                 <li className='nav-item'>
        //                     <a className='nav-link' href='#technologies'>TECHNOLOGIES</a>
        //                 </li>
        //                 <li className='nav-item'>
        //                     <a className='nav-link' href='#contact'>CONTACT</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        //     <ul id='mobile-demo' className='sidenav hide-on-large-only'>
        //         <li><a className='nav-link' href='#top'>WELCOME</a></li>
        //         <li>
        //             <a className='nav-link collapsible-header' href='#projects'>PROJECTS</a>
        //             <a className='collapsible-body' id='projectGitIcon' href='https://github.com/TaylorArmstrong'><i className='fab fa-github'></i>GitHub</a>
        //         </li>
        //         <li>
        //             <a className='nav-link collapsible-header' href='#about'>ABOUT</a>
        //             <a className='collapsible-body' href='http://www.linkedin.com/in/taylorarmstrong13'><i className='fab fa-linkedin'></i>LinkedIn</a>
        //             <a className='collapsible-body' href='https://talent.galvanize.com/students/3092'><i className='far fa-user-circle'></i>Galvanize Talent</a>
        //         </li>
        //         <li><a className='nav-link' href='#technologies'>TECHNOLOGIES</a></li>
        //         <li>
        //             <a className='nav-link collapsible-header' href='#contact'>CONTACT
        //                 </a>
        //             <a className='collapsible-body' title='Call Taylor @ (203)-613-3326' id='Cell Number' href='tel:1-203-613-3326'><i className='material-icons'>phone</i>(203)-613-3326</a>
        //             <a className='collapsible-body' title='E-Mail Taylor @ TArmstrong1327@gmail.com' id='E-mail' href='mailto:TArmstrong1327@gmail.com'><i className='material-icons'>email</i>TArmstrong1327@gmail.com</a>
        //         </li>
        //         <li className='nav-item nav-last'>
        //             <a className='nav-link' href='#top'>Logo</a>
        //         </li>
        //     </ul>
        // </div>