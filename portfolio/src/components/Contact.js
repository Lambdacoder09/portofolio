import React from 'react';
import data from '../../public/data json files/contact.json';

const Contact = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Email: <a href={`mailto:${data.contact.email}`} className="text-blue-500 hover:underline">{data.contact.email}</a></p>
      <p>LinkedIn: <a href={data.contact.linkedin} className="text-blue-500 hover:underline">{data.contact.linkedin}</a></p>
      <p>GitHub: <a href={data.contact.github} className="text-blue-500 hover:underline">{data.contact.github}</a></p>
    </section>
  );
};

export default Contact;
