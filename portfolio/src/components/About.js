import React from 'react';
import data from '../../public/data json files/basics.json';

const About = () => {
  const { fullName, title, summary } = data.basics;

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">{fullName}</h2>
      <h3 className="text-xl mb-4">{title}</h3>
      <p>{summary}</p>
    </section>
  );
};

export default About;
