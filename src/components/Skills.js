import React from "react";
import "./Skills.css";

const skillTiers = [
  {
    label: "Core — used in my main projects",
    categories: [
      {
        icon: "⚙️",
        label: "Backend",
        skills: ["Java", "Spring Boot", "Spring Security & JWT", "REST APIs", "WebSocket (STOMP)", "JUnit & Testcontainers"],
      },
      {
        icon: "🎨",
        label: "Frontend",
        skills: ["React", "JavaScript", "Vite", "React Router", "HTML & CSS", "Responsive Design", "PWA"],
      },
      {
        icon: "🗄️",
        label: "Data",
        skills: ["PostgreSQL", "SQL", "Flyway Migrations"],
      },
      {
        icon: "☁️",
        label: "Cloud & Delivery",
        skills: ["AWS Elastic Beanstalk", "AWS RDS", "AWS S3", "AWS CloudFront", "GitHub Actions CI/CD", "Git & GitHub"],
      },
      {
        icon: "🔗",
        label: "Integrations",
        skills: ["Stripe", "Xero API", "Jobber API", "OpenAI API"],
      },
    ],
  },
  {
    label: "Familiar — coursework and smaller projects",
    categories: [
      {
        icon: "🤖",
        label: "AI & Machine Learning",
        skills: ["Python", "Flask", "TensorFlow / Keras", "scikit-learn", "Pandas", "NumPy", "Pinecone"],
      },
      {
        icon: "🐳",
        label: "Other Cloud & Tools",
        skills: ["Docker", "Azure App Service", "Azure Container Registry", "Render", "Netlify", "Hugging Face Spaces"],
      },
      {
        icon: "💻",
        label: "Other Languages & Databases",
        skills: ["C#", "R", "MySQL"],
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label reveal">Technical Skills</div>
      <h2 className="section-title reveal">What I build with</h2>
      <p className="section-sub reveal">
        Split by depth: the core stack I've used to build and ship my main
        projects, and tools I've used in coursework and smaller projects.
      </p>

      {skillTiers.map((tier) => (
        <div key={tier.label} className="skills-tier">
          <h3 className="skills-tier-label reveal">{tier.label}</h3>
          <div className="skills-grid">
            {tier.categories.map((cat, i) => (
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
        </div>
      ))}
    </section>
  );
}

export default Skills;
