import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    icon: "💻",
    label: "Languages",
    skills: ["Python", "Java", "JavaScript", "C#", "SQL"],
  },
  {
    icon: "🎨",
    label: "Frontend",
    skills: ["React", "HTML & CSS", "Vite", "React Router", "Responsive Design"],
  },
  {
    icon: "⚙️",
    label: "Backend & Databases",
    skills: ["Spring Boot", "Node.js", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    icon: "🤖",
    label: "AI & Machine Learning",
    skills: ["TensorFlow", "scikit-learn", "OpenAI API", "Flask", "Pandas", "NumPy"],
  },
  {
    icon: "🚀",
    label: "DevOps & Tools",
    skills: ["GitHub", "Git LFS", "Render", "Netlify", "REST API", "WebSocket"],
  },
  {
    icon: "🧠",
    label: "Concepts",
    skills: ["Data Structures", "Algorithms", "JWT Auth", "Spring Security", "STOMP / SockJS"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label reveal">Technical Skills</div>
      <h2 className="section-title reveal">What I build with</h2>
      <p className="section-sub reveal">
        A practical toolkit shaped by building real production systems —
        not just tutorials.
      </p>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.label}
            className={`skill-category reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ""}`}
          >
            <div className="skill-cat-icon">{cat.icon}</div>
            <div className="skill-cat-label">{cat.label}</div>
            <div className="skill-pills">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
