import { useEffect } from "react";
import anime from "animejs";
import { FaReact } from "react-icons/fa";

function Home() {
  useEffect(() => {
    // Animate heading
    anime({
      targets: ".home-title",
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutExpo",
    });

    // Animate logos
    anime({
      targets: ".logo",
      scale: [0, 1],
      duration: 2000,
      delay: anime.stagger(200, { start: 500 }),
      easing: "easeOutElastic",
    });

    // Animate paragraphs
    anime({
      targets: ".home-p",
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: anime.stagger(200, { start: 1000 }),
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="text-center mt-20 px-6">
      {/* Logos */}
      <div className="flex justify-center items-center gap-6">
        {/* React Logo */}
        <FaReact className="text-blue-400 logo" size={120} />

        {/* Vite Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          alt="Vite Logo"
          className="w-28 h-28 logo"
        />
      </div>

      <h1 className="text-5xl font-bold mt-6 mb-4 home-title">Zayed Khan</h1>
      <p className="text-xl text-gray-300 mb-4 home-p">
        Aspiring Web Developer & Data Analyst
      </p>
      <p className="text-gray-400 home-p">
        Skilled in WordPress, MERN Stack, Data Analytics, Python, SQL, Excel
      </p>
    </section>
  );
}

export default Home;
