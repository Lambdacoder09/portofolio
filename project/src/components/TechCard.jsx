function TechCard({ logos, title, description, techs }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col md:flex-row items-center gap-6">
      <div className="flex gap-4 justify-center md:justify-start w-full md:w-1/4">
        {logos.map((Logo, index) => (
          <Logo key={index} className="text-6xl" /> // ✅ must be capitalized
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-300">{description}</p>
        {techs && (
          <div className="flex flex-wrap gap-3 mt-2">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-white font-semibold shadow"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TechCard;
