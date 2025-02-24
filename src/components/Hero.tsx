import { Button } from "antd";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/document/Cv.pdf";
    link.download = "Cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/document/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Front End Developer";
  const typingSpeed = 100;
  const deletingSpeed = 100;

  useEffect(() => {
    let timer;
    if (!isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => {
          const newText = fullText.substring(0, prev.length + 1);
          if (newText === fullText) setIsDeleting(true);
          return newText;
        });
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => {
          const newText = prev.substring(0, Math.max(prev.lastIndexOf(" "), 0));
          if (newText === "") setIsDeleting(false);
          return newText;
        });
      }, deletingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="section-container bg-white bg-opacity-70 p-8 rounded-xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-10 md:mt-0">
              Hi, I'm <span className="text-primary">Asim Ghaffar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4 h-[4vh]">
              {text}
            </h2>
            <p className="text-xl text-text-secondary mb-4">
              A passionate Front-End Developer building modern web applications
              that users love.
            </p>
            <p className="text-xl text-primary mb-4">2+ Years of Experience</p>
            <div className="flex gap-4">
              <Button
                onClick={handleDownloadResume}
                size="large"
                className="mb-4 bg-blue-500 text-white"
              >
                Download Resume
              </Button>
              <Button
                onClick={handleDownloadCv}
                size="large"
                className="mb-4 bg-blue-500 text-white"
              >
                Download CV
              </Button>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mr-AsimGhaffar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/asim-ghaffar-4a60921b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:asim.ghaffar71@gmail.com"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/picture.jpg"
              alt="Profile"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
