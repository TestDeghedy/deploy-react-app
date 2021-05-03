import React, { Component, Fragment } from 'react';

class ProjectCard extends Component {
    

    render () {
        const { name, img, descriptionArray, githubLink } = this.props;

        return (
            <Fragment>
                <div className="project-card-container">
                    <div className="project-card-img">
                            <img src={img} alt={name} className="project-card-img-itself"/>
                            <div className="project-card-img-header">
                                {name}
                            </div>
                    </div>

                    <div className="project-card-secondary-container">
                        <div className="project-card-description">
                            {
                                descriptionArray.map ((description) => {
                                return (<div key={description} className="project-card-description-paragraph">
                                    {description}
                                </div>)
                                })
                            }

                        </div>

                        <a href={githubLink} className="project-card-link-itself" target="_blnak">
                            View On GitHub &rarr;
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProjectCard;