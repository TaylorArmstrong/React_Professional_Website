import React from 'react'
import { Modal, Button, Icon } from 'react-materialize'
import builtIN from '../images/builtInColoradoIcon.gif'
import ProfilePic from '../images/profilePic.jpg'
import Resume from '../docs/resume.pdf'


const About = () => {
    return (
        <div id='about' >
            <div>
                <h3 className='textHeaders'>About</h3>
                <div id='aboutIcons'>
                    <a href='http://www.linkedin.com/in/taylorarmstrong13' title='LinkedIn'><i className='fab fa-github aboutIcon' ></i></a>
                    <a id='builtInColoradoAboutIcon' href='https://www.builtincolorado.com/member/tarmstrong1327/112684' title='builtincolorado'><img src={builtIN} alt='loading' className='responsive-img aboutIcon' id='builtInLogo' /></a>
                </div>
            </div>
            <Modal
                header="Taylor's Medical Background"
                trigger={<Button className='medButton' waves='light'><p className='medical'>Medical</p><p className='backgroundWord'>Background</p><Icon className='medIconForButton'>local_pharmacy</Icon></Button>}>
                <div className="modal-content">
                    <div className='row'>
                        <div className='col s5 container'>
                            <p className='modal-text'><u><b>Certifications</b></u><br />Emergency Medical Technician (EMT) | 2012<br />CPR | 2015<br />Outdoor Emergency Care | 2012<br />Phlebotomy | 2017<br /></p>
                        </div>
                        <div className='col s5 container'>
                            <p className='modal-text'><u><b>Education</b></u><br />Bachelor of Science, Integrative Physiology, 2015<br />Addional Focus: Pre-Med & Engineering</p>
                        </div>
                    </div>
                </div>
            </Modal>
            <img id='profilePic' alt='loading' src={ProfilePic} className='responsive-img' title='Taylor Armstrong' />
            <div className='aboutTextContainer'>
                <p className='aboutText'>Tenacious software engineer with a passion for efficient code, responsive design and problem-solving. My goal is to help companies build and develop software platforms that provide reliable user experiences.</p>
                <a id='resume' href={Resume}><button className='resumeButton'><i className='far fa-file-pdf'></i>Resume</button></a>
            </div>
        </div>
    )
}
export default About