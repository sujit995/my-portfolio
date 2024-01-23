import React from 'react';


import Collapsible from 'react-collapsible';

import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  return (
    <>
      <div
        className="project-card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay={props.cardContent.animationDelay}
      >
        <div className="project-card__container">
          <Collapsible trigger={props.cardContent.heading}>
            <div className="project-card__description-content">
              <p>{props.cardContent.description}</p>
              <a
                href={props.cardContent.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {props.cardContent.buttonText}
              </a>
              <a
                href={props.cardContent.buttonCode}
                target="_blank"
                rel="noreferrer"
              >
                {props.cardContent.button}
              </a>
              <img src={props.cardContent.imageUrl} style={{height: "100%", maxHeight: "200px", width: "100%", maxWidth: "400px", marginTop: "10px", borderRadius: "5px"}}  alt="screenshot"/>
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
