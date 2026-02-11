import React from 'react';
import data from '../../public/data json files/education.json';

const Education = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{edu.degree}</h3>
          <p className="text-gray-400">{edu.institution}</p>
          <p>{edu.startYear} - {edu.endYear}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
