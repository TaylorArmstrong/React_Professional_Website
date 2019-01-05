import React from 'react'

const SendEmail = () => {

    const sendEmail = () => {
        alert("E-mail is on it's way")
        console.log('need to clear form fields')
        // this.user_name = '';
        // this.user_email = '';
        // this.content = '';
    }

    return (
        <div id='contact'>
            <h3>Contact</h3>
            <div className='container'>
                <a href='http://www.linkedin.com/in/taylorarmstrong13'><i className='fab fa-linkedin' ></i></a>
                <a title='Call Taylor @ (203)-613-3326' id='Cell Number' href='tel:1-203-613-3326'><i className='fas fa-phone-square' ></i></a>
                <a title='E-Mail Taylor @ TArmstrong1327@gmail.com' id='E-mail' href='mailto:TArmstrong1327@gmail.com'><i className='far fa-envelope' ></i></a>
                <a id='builtInColoradoAboutIcon' href='https://www.builtincolorado.com/member/tarmstrong1327/112684' title='builtincolorado'><img src='./images/builtInColoradoIcon.gif' alt='builtInColorado' /></a>
            </div>
            <div className='container'>
                <form id="contact-form" >
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" id='user_name' />
                    <label>Email</label>
                    <input type="email" name="user_email" id='user_email'/>
                    <label>Message</label>
                    <textarea name="content" id='content'></textarea>
                    <input type="submit" value="Send" onClick={sendEmail} />
                </form >
            </div>
        </div>
    )
  }

export default SendEmail