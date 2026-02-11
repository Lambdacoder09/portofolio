import React from 'react';
import data from '../../public/data json files/certifications.json';

const Certifications = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <ul>
        {data.certifications.map((cert, index) => (
          <li key={index} className="mb-2">
            <a href={cert.url} className="text-blue-500 hover:underline">{cert.title}</a> - {cert.platform}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
