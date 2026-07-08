import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    icon: "💻",
    label: "Languages",
    skills: ["Python", "Java", "JavaScript", "C#", "SQL", "R"],
  },
  {
    icon: "🎨",
    label: "Frontend",
    skills: ["React 19", "Vite", "React Router", "HTML & CSS", "Framer Motion", "WebSocket (SockJS/STOMP)", "PWA", "Responsive Design"],
  },
  {
    icon: "⚙️",
    label: "Backend & Databases",
    skills: ["Spring Boot 3", "Spring Security", "Spring WebFlux", "Node.js", "PostgreSQL", "MySQL", "Firebase", "JWT Auth", "REST API"],
  },
  {
    icon: "🤖",
    label: "AI & Machine Learning",
    skills: ["TensorFlow / Keras", "scikit-learn", "OpenAI GPT-4o-mini", "Pinecone (RAG)", "CNN", "Random Forest", "NLP", "Flask", "Pandas", "NumPy"],
  },
  {
    icon: "☁️",
    label: "Cloud — AWS",
    skills: ["EC2", "Elastic Beanstalk", "RDS (PostgreSQL)", "S3", "CloudFront", "IAM", "ACM (SSL)", "CloudWatch", "VPC & Security Groups"],
  },
  {
    icon: "🌐",
    label: "Cloud — Azure & DevOps",
    skills: ["Azure App Service", "Azure Container Registry", "Docker", "GitHub Actions CI/CD", "Render", "Netlify", "Git LFS"],
  },
  {
    icon: "🔗",
    label: "Integrations",
    skills: ["Xero OAuth2 API", "Stripe Payments", "Brevo SMTP", "OpenPDF", "Hugging Face Spaces"],
  },
  {
    icon: "🧠",
    label: "Concepts & Architecture",
    skills: ["Multi-Tenant SaaS", "Multi-Role Auth", "Real-Time Messaging", "Microservices", "OOP", "System Design", "Data Structures & Algorithms"],
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
