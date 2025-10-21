import { FaReact } from "react-icons/fa";

function Home() {
  return (
    <section className="text-center mt-20 px-6">
      {/* Logos */}
      <div className="flex justify-center items-center gap-6">
        {/* React Logo */}
        <FaReact className="text-blue-400" size={120} />

        {/* Vite Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          alt="Vite Logo"
          className="w-28 h-28"
        />
      </div>

      <h1 className="text-5xl font-bold mt-6 mb-4">Zayed Khan</h1>
      <p className="text-xl text-gray-300 mb-4">
        Aspiring Web Developer & Data Analyst
      </p>
      <p className="text-gray-400">
        Skilled in WordPress, MERN Stack, Data Analytics, Python, SQL, Excel
      </p>
    </section>
  );
}

export default Home;
