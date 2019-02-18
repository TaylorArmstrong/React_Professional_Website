import React from 'react'
import ProjectInfo from './ProjectInfo.json'

const Projects = () => {
    return (
        <div id='projects' className='center'>
            {ProjectInfo.map(x =>
            <div key={x.title} style={{width: 415}} className='tj bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 small' id='ProjectCard'>
                <div className='tc f4 lh-copy'><b><u>{x.title}</u></b><br /></div>
                {x.description}
                    <div>
                        <br /> 
                        <em>{x.languages}</em><br /><br />
                        <i className='fab fa-github' id='headerIcon' /><a href={x.github}>{x.github}</a><br /><br /><br />
                    {!x.url 
                    ? '' 
                    :<div>
                        <u><b>Url:</b></u> <a href={x.url}> {x.url}</a> <br /> <br />
                    </div>
                    }
                    </div>     
                {!x.demo ? '' : <div className='tc'><a href={x.demo}><u><b>Demo Video</b></u></a></div>}
            </div>
            )}
        </div>
    )
} 

export default Projects