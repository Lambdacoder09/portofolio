import React from 'react';
import data from '../../public/data json files/achievements.json';

const Achievements = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Achievements</h2>
      <ul>
        {data.achievements.map((achievement, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-bold">{achievement.title}</h3>
            <p>{achievement.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
