import React from 'react';

import './styles.scss';

import PortfolioProject from './PortfolioProject';
import projectData from './projects.json';

const projectList = [...projectData].reverse().map((element) => {
    return (
        <PortfolioProject
            key={element.id}
            title={element.title}
            mediaPath={element.mediaPath}
            previewLine1={element.previewLine1}
            previewLine2={element.previewLine2}
            longDesc={element.longDesc}
            techUsed={element.techUsed}
            modalMediaPath={element.modalMediaPath}
            modalMediaIsImage={element.modalMediaIsImage}
            hasExternalLink={element.hasExternalLink}
            externalLink={element.externalLink}
            hasRepo={element.hasRepo}
            repoLink={element.repoLink}
        />
    );
})

function Portfolio() {
    return (
        <div className="page-content">
            <article className="portfolio-column">
                {projectList}
            </article>
        </div>
    );
}

export default Portfolio;
