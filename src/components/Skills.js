import React from "react";
import "./Skills.css";

// Core: used to build and ship my main projects (ServiceCrown, the car dealership).
// Familiar: used in smaller projects and coursework.
const skillTiers = [
  {
    id: "core",
    label: "Core",
    note: "Used to build and ship my main projects",
    categories: [
      { label: "Languages", skills: ["Java", "JavaScript", "SQL"] },
      { label: "Backend", skills: ["Spring Boot", "Spring Security (JWT)", "REST APIs", "WebSocket (STOMP)"] },
      { label: "Frontend", skills: ["React", "HTML & CSS", "Vite"] },
      { label: "Data", skills: ["PostgreSQL", "Flyway"] },
      { label: "Testing", skills: ["JUnit", "Mockito", "Testcontainers", "React Testing Library"] },
      { label: "Cloud & delivery", skills: ["AWS (Elastic Beanstalk, RDS, S3, CloudFront)", "GitHub Actions", "Git & GitHub"] },
      { label: "APIs", skills: ["Stripe", "OpenAI API"] },
    ],
  },
  {
    id: "familiar",
    label: "Familiar",
    note: "Used in smaller projects and coursework",
    categories: [
      { label: "Python & ML", skills: ["Python (Flask)", "scikit-learn", "TensorFlow / Keras"] },
      { label: "Other cloud", skills: ["Docker", "Azure App Service"] },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label reveal">Technical Skills</div>
      <h2 className="section-title reveal">What I build with</h2>
      <p className="section-sub reveal">
        Split by depth: the core stack behind my main projects, and tools I've
        used in smaller projects and coursework.
      </p>

      <div className="skills-tiers">
        {skillTiers.map((tier) => (
          <div key={tier.id} className={`skills-tier tier-${tier.id} reveal`}>
            <div className="skills-tier-head">
              <h3 className="skills-tier-label">{tier.label}</h3>
              <p className="skills-tier-note">{tier.note}</p>
            </div>
            <dl className="skills-rows">
              {tier.categories.map((cat) => (
                <div key={cat.label} className="skills-row">
                  <dt>{cat.label}</dt>
                  <dd>
                    <ul className="skill-pills">
                      {cat.skills.map((skill) => (
                        <li key={skill} className="skill-pill">{skill}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
