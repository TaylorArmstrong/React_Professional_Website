import React from 'react'
import { Button } from 'react-materialize'
import builtIN from '../images/builtInColoradoIcon.gif'


const SendEmail = () => {


    return (
        <div id='contact'>
        <div>
            <h3>Contact</h3>
            <div className='container contactIcons'>
                <a title='Call Taylor @ (203)-613-3326' id='Cell Number' href='tel:1-203-613-3326'><i className='fas fa-phone-square contactIcon' ></i></a>
                <a title='E-Mail Taylor @ TArmstrong1327@gmail.com' id='E-mail' href='mailto:TArmstrong1327@gmail.com'><i className='far fa-envelope contactIcon' ></i></a>
                <a href='http://www.linkedin.com/in/taylorarmstrong13'><i className='fab fa-linkedin contactIcon' ></i></a>
                <a id='builtInColoradoAboutIcon' href='https://www.builtincolorado.com/member/tarmstrong1327/112684' title='builtincolorado'><img src={builtIN} alt='builtInColorado' className='responsive-img contactIcon' id='builtInLogo'/></a>
            </div>
        </div>
            <div className='container'>
                <form id="contact_form" >
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" id='user_name' className='formInfo' />
                    <label>Email</label>
                    <input type="email" name="user_email" id='user_email' className='formInfo'/>
                    <label>Message</label>
                    <textarea name="content" id='content' className='formInfo'></textarea>
                    <Button type="submit" value="Send" id='sendEmail'>Send</Button>
                </form >
            </div>
        </div>
    )
  }

export default SendEmail