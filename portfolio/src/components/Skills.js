import React from 'react';
import data from '../../public/data json files/skills.json';

const Skills = () => {
  const { skills } = data;

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-2">{category}</h3>
            <ul>
              {skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
