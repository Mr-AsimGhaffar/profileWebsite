import { motion } from "framer-motion";
import { Timeline } from "antd";
import { Briefcase } from "lucide-react";
import experienceData from "../data/data.json";

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
          <h2 className="text-4xl font-bold mb-4">
            {experienceData.experiences.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {experienceData.experiences.description}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Timeline
            mode="alternate"
            className="hidden sm:flex flex-col"
            items={experienceData.experiences.projectsList.map(
              (exp, index) => ({
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
              })
            )}
          />
          {/* Fallback for mobile */}
          <div className="sm:hidden space-y-4">
            {experienceData.experiences.projectsList.map((exp, index) => (
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
