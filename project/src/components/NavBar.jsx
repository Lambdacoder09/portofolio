import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">Zayed Khan</div>

      <div className="flex gap-6 items-center">
        <Link className="hover:text-yellow-400 transition" to="/">Home</Link>
        <Link className="hover:text-yellow-400 transition" to="/about">About</Link>
        <Link className="hover:text-yellow-400 transition" to="/projects">Projects</Link>
        <Link className="hover:text-yellow-400 transition" to="/contact">Contact</Link>

        {/* Tech Stack Button */}
        <Link
          to="/techstack"
          className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Tech Stack
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
