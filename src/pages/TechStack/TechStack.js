import React from 'react';
import '../TechStack/TechStack.css';
import { TechStackList } from '../../components/TechStackList';
const TechStack = () => {
  return (
    <>
      <div className='techstack-section page-width' id='TechStack'>
        <div className='techstack-intro'>
          <h1>Technology Stack</h1>
        </div>
        <div className='techstack-container'>
          {TechStackList.map((tech) => (
            <>
              <div key={tech._id} className='techstack-icon'>
                <tech.icon />
                <span>{tech.name}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
