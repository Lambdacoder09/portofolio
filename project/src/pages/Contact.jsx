function Contact() {
  const phoneNumber = "917017853730"; // WhatsApp number

  return (
    <section className="max-w-4xl mx-auto mt-20 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-lg">
          <input className="p-3 rounded-md bg-gray-700 text-white" type="text" placeholder="Name" />
          <input className="p-3 rounded-md bg-gray-700 text-white" type="email" placeholder="Email" />
<textarea
  className="p-3 rounded-md bg-gray-700 text-white resize-none h-20"
  placeholder="Message"
></textarea>          <button className="bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition">
            Send
          </button>
        </form>

        {/* OR Separator */}
        <div className="text-4xl font-bold text-gray-400">OR</div>

        {/* WhatsApp Contact */}
        <div className="flex-1 flex flex-col items-center justify-center bg-green-500 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Talk on WhatsApp</h2>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-500 font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Chat Now
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
