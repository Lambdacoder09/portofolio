import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiWordpress, SiTableau, SiNetlify } from "react-icons/si";
import TechCard from "../components/TechCard";


function TechStack() {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-6 flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center mb-10">My Tech Stack</h1>

      {/* MERN Stack */}
      <TechCard
        logos={[FaReact, SiExpress, FaNodeJs, SiMongodb]}
        title="MERN Stack"
        description="Build full-stack applications using MongoDB, Express.js, React.js, Node.js."
        techs={[
          { name: "MongoDB", color: "#4DB33D" },
          { name: "Express.js", color: "#000000" },
          { name: "React.js", color: "#61DBFB" },
          { name: "Node.js", color: "#3C873A" },
        ]}
      />

      {/* WordPress */}
      <TechCard
        logos={[SiWordpress]}
        title="WordPress"
        description="Experienced in WordPress theme/plugin customization, Elementor, WooCommerce, SEO, and performance optimization."
        techs={[{ name: "WordPress", color: "#21759B" }]}
      />

      {/* Python & Data Analytics */}
      <TechCard
        logos={[FaPython]}
        title="Python & Data Analytics"
        description="Experienced in Python (NumPy, Pandas, Matplotlib), SQL, Excel, Tableau/Power BI for data cleaning and visualization."
        techs={[
          { name: "Python", color: "#3776AB" },
          { name: "SQL", color: "#F29111" },
          { name: "Excel", color: "#217346" },
          { name: "Tableau", color: "#E97627" },
        ]}
      />
       {/* Netlify */}
      <TechCard
        logos={[SiNetlify]}
        title="Netlify"
        description="Deploy static and dynamic websites quickly. I use Netlify to host React, WordPress, and other web projects with CI/CD support."
        techs={[{ name: "Netlify", color: "#00C7B7" }]}
      />

      {/* Tailwind CSS */}
      <TechCard
        logos={[SiTailwindcss]}
        title="Tailwind CSS"
        description="Build responsive and modern front-end designs using Tailwind CSS utility classes."
        techs={[{ name: "Tailwind CSS", color: "#38B2AC" }]}
      />
    </section>
  );
}

export default TechStack;
