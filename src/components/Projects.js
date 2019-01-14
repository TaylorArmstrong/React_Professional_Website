import React from 'react'
import ProjectInfo from './ProjectInfo.json'

const Projects = () => {
    return (
        <div className='center'>
            {ProjectInfo.map(x =>
            <div key={x.title} className='tc bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 small' id='ProjectCard'>
                <div className='f4 lh-copy'><b><u>{x.title}</u></b><br /></div>
                {x.description}
                    {!x.url ? 
                        <div>
                            <br /> 
                            <em><b> Languages: </b><br />{x.languages}</em><br /><br />
                            <u><b>GitHub Repository</b></u><br /><br /><a href={x.github}>{x.github}</a><br /><br /><br />
                        </div> 
                            : 
                            <div>
                                <div> 
                                    <em><b> Languages: </b>{x.languages}</em><br /><br />
                                    <u><b>GitHub Repository</b></u><br /><a href={x.github}>{x.github}</a><br /><br />
                                </div>
                                <div>
                                    <u><b>Url:</b></u><a href={x.url}> {x.url}</a><br /><br />
                                </div>
                            </div>
                        }
                    {!x.demo ? '' : <a href={x.demo}><u><b>Demo Video</b></u></a>}
            </div>
            )}
        </div>
    )
} 

export default Projects