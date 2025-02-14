import { motion } from "framer-motion";
import { Code2, Globe } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Frontend Development",
    description:
      "I am a frontend developer with expertise in React.js, Next.js, JavaScript, and TypeScript, building responsive and dynamic web applications. Skilled in modern tools and frameworks like Tailwind CSS, Ant Design, MUI, ShadCN, Docker, ESLint, Husky, and version control with Git & GitHub.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Cloud Services",
    description: "Deploying and managing applications on AWS",
  },
];

const technicalSkills = [
  "React Js",
  "Next Js",
  "JavaScript",
  "TypeScript",
  "EsLint",
  "Husky",
  "Docker",
  "TailwindCss",
  "MUI",
  "Ant Design",
  "Shadecn/ui",
  "Git & GitHub",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Dynamic and detail-oriented Software Engineer with expertise in
            React.js, Next.js, and JavaScript, TypeScript, seeking to leverage
            innovative solutions and robust coding practices to contribute to
            impactful projects and enhance user experiences. Passionate about
            delivering high-quality, scalable, and efficient software solutions
            in a collaborative team environment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
              >
                <p className="text-center text-text-secondary">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 flex justify-center">
                {skill.title}
              </h3>
              <p className="text-text-secondary flex justify-center">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
