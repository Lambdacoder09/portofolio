import React from 'react';
import data from '../../public/data json files/internships.json';

const Internships = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Internships</h2>
      {data.internships.map((internship, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{internship.role}</h3>
          <p className="text-gray-400">{internship.company}</p>
          <p>{internship.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Internships;
