import { Button } from "antd";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import data from "../data/data.json";

const Hero = () => {
  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = data.profile.title;
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
  }, [text, isDeleting, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${data.images.background}')` }}
    >
      <div className="section-container bg-white bg-opacity-70 p-8 rounded-xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-10 md:mt-0">
              Hi, I'm <span className="text-primary">{data.profile.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4 h-[4vh]">
              {text}
            </h2>
            <p className="text-xl text-text-secondary mb-4">
              {data.profile.description}
            </p>
            <p className="text-xl text-primary mb-4">
              {data.profile.experience}
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() =>
                  handleDownload(
                    data.documents.resume,
                    "Asim_Ghaffar_Resume.pdf"
                  )
                }
                size="large"
                className="mb-4 bg-blue-500 text-white"
              >
                Download Resume
              </Button>
              <Button
                onClick={() =>
                  handleDownload(data.documents.cv, "Asim_Ghaffar_Cv.pdf")
                }
                size="large"
                className="mb-4 bg-blue-500 text-white"
              >
                Download CV
              </Button>
            </div>
            <div className="flex space-x-4">
              <a
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={data.socialLinks.email}
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
              src={data.images.profile}
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
