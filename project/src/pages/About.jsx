import { useEffect } from "react";
import anime from "animejs";

function About() {
  useEffect(() => {
    // Animate sections
    anime({
      targets: ".about-section",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: anime.stagger(200),
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="max-w-3xl mx-auto mt-20 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center about-section">About Me</h1>

      <div className="mb-6 about-section">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>Bachelor of Technology, Computer Science & Engineering</p>
        <p>Uttarakhand Technical University</p>
      </div>

      <div className="mb-6 about-section">
        <h2 className="text-2xl font-semibold mb-2">Reference</h2>
        <p>Amartya Raturi, Amazon India</p>
        <p>+91 93683 47528</p>
      </div>

      <div className="mb-6 about-section">
        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
        <p>Native Hindi, Advanced English</p>
      </div>

      <div className="mb-6 about-section">
        <h2 className="text-2xl font-semibold mb-2">Certificates</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>HackerRank: Advanced Python, Intermediate SQL, and more</li>
          <li>Neurolink Hackathon: Web interface, top 100 rank</li>
          <li>Bakery Website: Responsive website, WooCommerce integration</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="text-2xl font-semibold mb-2">Training</h2>
        <p>Devslane Training: 4 months Web Development course + Internship</p>
      </div>
    </section>
  );
}

export default About;
