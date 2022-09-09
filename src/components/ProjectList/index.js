import React, { useState } from 'react';

const ProjectList = () => {
  const [projects] = useState([
    {
      name: 'Run Buddy',
      thumbnail: 'run-buddy.jpg',
      link: 'https://zachfulmer.github.io/run-buddy/'
    },
    {
      name: 'Pokemon Questionaire',
      thumbnail: 'prof_oak_homepage.png',
      link: 'https://zachfulmer.github.io/Pokemon_Questionaire/'
    },
    {
      name: 'To-Market',
      thumbnail: 'Motorbike.jpg',
      link: 'https://murmuring-retreat-47342.herokuapp.com/'
    }
  ]);

  return (
    <div className="flex-row">
      {projects.map((project) => (
        <div>
          <a href={project.link}>
            <img
              src={require(`../../assets/images/${project.thumbnail}`).default}
              alt={project.name}
              className="img-thumbnail mx-1"
              key={project.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
