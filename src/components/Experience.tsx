import { motion } from "framer-motion";
import { Timeline } from "antd";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Front End Developer",
    company: "Ali Square",
    period: "Feb-2024 - Present",
    description:
      "Experienced Frontend Developer specializing in building scalable and high-performance web applications using Next.js, React.js, and TypeScript. Proficient in Docker and AWS for seamless deployment and cloud management, with a strong focus on responsive design, user experience, and modern web standards",
  },
  {
    title: "Trainee Consultant ",
    company: "Systems Limited",
    period: "Oct-2022 - Feb-2024",
    description:
      "Frontend Developer with expertise in Next.js, React.js, JavaScript, and TypeScript, delivering dynamic and efficient web solutions. Skilled in deploying and managing applications using Docker and AWS, ensuring robust, scalable, and secure applications in cloud environments.",
  },
  {
    title: "Front-End-Developer",
    company: "Falcon IT Consulting",
    period: "Feb-2022 - Oct-2022",
    description:
      "Frontend Developer adept at crafting modern web applications with Next.js, React.js, and TypeScript. Experienced in using Docker for containerization and AWS for cloud deployments, ensuring optimized performance, scalability, and smooth user experiences across all platforms.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Timeline
            mode="alternate"
            className="hidden sm:flex flex-col"
            items={experiences.map((exp, index) => ({
              children: (
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-text-secondary text-sm mb-2">
                    {exp.period}
                  </p>
                  <p className="text-text-secondary">{exp.description}</p>
                </motion.div>
              ),
              dot: <Briefcase className="text-primary" />,
            }))}
          />
          {/* Fallback for mobile */}
          <div className="sm:hidden space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-text-secondary text-sm mb-2">{exp.period}</p>
                <p className="text-text-secondary">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
