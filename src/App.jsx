import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone, Linkedin, Menu, X } from 'lucide-react';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Rukum Maurya</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {showMenu && (
          <nav className="flex flex-col md:hidden mt-4 space-y-2">
            <a href="#about" onClick={() => setShowMenu(false)} className="hover:text-indigo-600">About</a>
            <a href="#projects" onClick={() => setShowMenu(false)} className="hover:text-indigo-600">Projects</a>
            <a href="#skills" onClick={() => setShowMenu(false)} className="hover:text-indigo-600">Skills</a>
            <a href="#contact" onClick={() => setShowMenu(false)} className="hover:text-indigo-600">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hey, I’m Rukum 👋</h2>
        <p className="text-lg md:text-xl mb-6">Python Developer & Data Analyst</p>
        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/rukummaurya"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            <span>LinkedIn</span>
          </a>
          <a
  href="https://drive.google.com/uc?export=download&id=1HipV8AFztsbUpxI5e9XzyXSrzjCrDTEF"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition"
>
  📄 Download Resume
</a>



        </div>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-700 leading-7">
          I'm a motivated Python Developer and Data Analyst skilled in building data pipelines and transforming data into insights using Python and visualization tools. Passionate about solving real-world problems through clean code and analytical thinking.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 py-16 px-6" data-aos="fade-right">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">World GDP Analysis</h4>
              <p className="text-gray-600">Analyzed global GDP data using Python & Pandas. Created data visualizations with Matplotlib & Tableau.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">Black Friday Sale Insights</h4>
              <p className="text-gray-600">Analyzed sales trends with SQL & Excel. Created actionable dashboards with Tableau.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">Housing in Mexico</h4>
              <p className="text-gray-600">Built regression models to analyze housing data using Python & Scikit-learn. Delivered clear visual reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-6" data-aos="zoom-in">
        <h3 className="text-3xl font-bold mb-6 text-center">Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center text-white">
          {["Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Seaborn", "Scikit-learn", "Tableau",
            "Excel", "MongoDB", "MySQL", "Power BI", "Flask", "Git", "Jupyter", "Django", "VS Code"].map(skill => (
              <span key={skill} className="bg-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-16 px-6" data-aos="fade-up">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Feel free to reach out for collaborations or job opportunities!</p>
          <div className="flex flex-col items-center gap-3 text-gray-800 font-semibold">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-600" />
              rukummaurya2@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-indigo-600" />
              +91 73556 95032
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-indigo-600" />
              <a
                href="https://www.linkedin.com/in/rukummaurya"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/rukummaurya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        © 2025 Rukum Maurya. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

