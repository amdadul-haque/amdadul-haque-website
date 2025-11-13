import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="layout flex flex-col md:flex-row gap-10 items-center">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <FaCode className="text-red-400 text-3xl" />
            <p className="text-white text-lg">Website Development</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMobileAlt className="text-red-400 text-3xl" />
            <p className="text-white text-lg">App Development</p>
          </div>
          <div className="flex items-center gap-4">
            <FaServer className="text-red-400 text-3xl" />
            <p className="text-white text-lg">Website Hosting</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-4xl font-heading mb-6">About me</h2>
          <p className="text-gray-300 mb-10 max-w-xl">
            I started my software journey from photography. Through that, I
            learned to love the process of creating from scratch. Since then,
            this has led me to software development as it fulfills my love for
            learning and building things.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-red-400">120+</p>
              <p className="text-gray-300 text-sm">Completed Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-400">95%</p>
              <p className="text-gray-300 text-sm">Client satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-400">10+</p>
              <p className="text-gray-300 text-sm">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
