import GitHubButton from "../components/GithubLink";

function Projects() {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* E-Commerce Store */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
        <h2 className="text-2xl font-bold mb-2">E-Commerce Store</h2>
        <p className="text-gray-300 flex-grow">
          Built an online store with product catalog, cart, checkout system, integrated payment gateway, coupon modules, and improved site performance.
        </p>
        <GitHubButton url="https://github.com/yourusername/ecommerce-store" />
      </div>

      {/* Bakery Website */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
        <h2 className="text-2xl font-bold mb-2">Bakery Website</h2>
        <p className="text-gray-300 flex-grow">
          Developed a responsive bakery website with Elementor, WooCommerce, optimized site speed & SEO.
        </p>
        <GitHubButton url="https://github.com/yourusername/bakery-website" />
      </div>

      {/* Devslane Training Projects */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
        <h2 className="text-2xl font-bold mb-2">Devslane Training Projects</h2>
        <p className="text-gray-300 flex-grow">
          Completed 4 months web development training and internship. Built multiple web applications using MERN stack (React, Node.js, MongoDB).
        </p>
        <GitHubButton url="https://github.com/yourusername/devslane-projects" />
      </div>

      {/* Canva & AI Projects */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
        <h2 className="text-2xl font-bold mb-2">Canva & AI Projects</h2>
        <p className="text-gray-300 flex-grow">
          Created graphics and marketing visuals using Canva and AI-based image generation tools for projects, websites, and portfolio.
        </p>
        <GitHubButton url="https://github.com/yourusername/canva-ai-projects" />
      </div>

    </section>
  );
}

export default Projects;
