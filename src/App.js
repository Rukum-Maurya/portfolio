import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 font-sans">
      <h1 className="text-4xl text-blue-600 font-bold">
  If this is blue and big, Tailwind works ✅
</h1>
      <header className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-2">Rukum Maurya</h1>
        <p className="text-lg">Python Developer & Data Analyst | Fresher</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/rukummaurya" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="mailto:rukummaurya2@gmail.com"><Mail /></a>
          <a href="https://github.com/rukummaurya" target="_blank" rel="noopener noreferrer"><Github /></a>
        </div>
      </header>

      <section className="mb-12" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Motivated Python Developer and Data Analyst skilled in building data pipelines and transforming data into insights using Python and visualization tools. Passionate about solving real-world problems through clean code and analytical thinking.
        </p>
      </section>

      <section className="mb-12" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["World GDP Analysis", "Black Friday Sale Insights", "Housing in Mexico"].map((title, i) => (
            <div key={i} className="border rounded-2xl p-4 shadow-sm bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm mt-2">Project description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12" data-aos="fade-right">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="grid md:grid-cols-3 gap-2 list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Python, Pandas, NumPy, Matplotlib, Seaborn</li>
          <li>scikit-learn, SQL, Excel, Tableau, Power BI</li>
          <li>MySQL, MongoDB, Flask, Django</li>
          <li>Git, GitHub, RESTful APIs, Web Scraping</li>
          <li>Jupyter Notebook, Google Colab, VS Code</li>
          <li>Analytical Thinking, Time Management, Communication</li>
        </ul>
      </section>

      <section className="mb-12" data-aos="fade-left">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Machine Learning and Data Science Program (Geeks For Geeks)</li>
          <li>Python for Everybody (Coursera)</li>
          <li>Microsoft Python Development (Coursera)</li>
        </ul>
      </section>

      <section className="mb-12" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:rukummaurya2@gmail.com" className="text-blue-500">rukummaurya2@gmail.com</a></p>
        <p>Phone: +91 73556 95032</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/rukummaurya" className="text-blue-500" target="_blank" rel="noreferrer">rukummaurya</a></p>
      </section>

      <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Rukum Maurya. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
