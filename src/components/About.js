import React from 'react'
import { Modal, Button, Icon } from 'react-materialize'


const About = () => {
    return (
        
        <div id='about'>
            <h3>About</h3>
            <div id='aboutIcons'>
                <a href='http://www.linkedin.com/in/taylorarmstrong13' title='LinkedIn'><i className='fab fa-github' ></i></a>
                <a id='builtInColoradoAboutIcon' href='https://www.builtincolorado.com/member/tarmstrong1327/112684' title='builtincolorado'><img src='./images/builtInColoradoIcon.gif' alt='loading' /></a>
            </div>
            <div className='aboutTextContainer'>
                <p className='aboutText'>Dedicated Integrated Physiology graduate with studies in Software Engineering, Biotechnology, Medicine and Emergency Care. Experience in troubleshooting and streamlining the design and implementation of mechanical & electrical devices. Providing an understanding of data and blueprints so companies can increase their efficiencies.</p>
                <Modal
                    header="Taylor's Medical Background"
                    trigger={<Button waves='light'>Medical Background<Icon right>local_pharmacy</Icon></Button>}>
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
            </div>
            <a id='resume' href='../docs/resume.pdf'><button className='resumeButton'><i className='far fa-file-pdf'></i>Resume</button></a>
            <div className='aboutRight'>
                <img id='profilePic' alt='loading' src='../images/profilePic.jpg' className='responsive-img' title='Taylor Armstrong' />
            </div>
        </div>
)
}
export default About