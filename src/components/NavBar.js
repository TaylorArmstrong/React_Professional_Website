import React from 'react'
import { Navbar, NavItem, SideNav, SideNavItem, Collapsible, CollapsibleItem } from 'react-materialize'
import myLogo from '../images/myLogo.png'
import ProfilePic from '../images/profilePic.jpg'
import workSpaceImage from '../images/deskImage.jpg'

const NavBar = () => {
    return (
        <div>
            <Navbar className='hide-on-med-and-down' right>
                
                <NavItem href='#top' >WELCOME</NavItem>
                <NavItem href='#projects' >PROJECTS</NavItem>
                <NavItem href='#about' >ABOUT</NavItem>
                <NavItem href='#technologies' >TECHNOLOGIES</NavItem>
                <NavItem href='#contact' >CONTACT</NavItem>
            </Navbar>
            <img src={myLogo} id='personalLogo' alt='myLogo'/>
            <nav className='hide-on-large-only'></nav>
            <SideNav 
                trigger={<a href="/"><i className="sidenav_trigger material-icons hide-on-large-only" >menu</i></a>}
            >
                <SideNavItem userView
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