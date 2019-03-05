import React from 'react'
import ProjectInfo from './ProjectInfo.json'
import urlImg from '../images/url-link.png'


const Projects = () => {
    return (
        <div className='center'>
            {ProjectInfo.map(x =>
            <div key={x.title} className='tj bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 small' id='ProjectCard'>
                <div className='tc f4 lh-copy'>
                    <b><u>{x.title}</u></b><br/>
                    {!x.demo ? '' : <a className='tc projectIcons' href={x.demo}><i className="fas fa-video"></i></a>}
                    <a href={x.github}><i className='fab fa-github projectIcons' id='headerIcon' /></a>
                    {!x.url ? '' : <a className='projectIcons' href={x.url}><img alt='URL' src={urlImg} style={{ width: 20, marginLeft: 3 }} /></a>}
                </div>
                {x.description.length < 120 ? <div><br />{x.description}<br /><br /></div> :<div>{x.description}</div> }
                <div>
                    <br />
                    <em>{x.languages}</em><br /><br />
                </div>
            </div>
            )}
        </div>
    )
} 

export default Projects