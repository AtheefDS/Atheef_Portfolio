import React from 'react';

export default function Projects() {
  const projectData = [
    {
      tag: "AWS & DevOps",
      title: "Automated Cloud Infrastructure",
      desc: "Deployed a highly available, fault-tolerant 2-tier web architecture on AWS using VPC, EC2, and an Application Load Balancer.",
      tech: ["AWS", "Terraform", "Linux"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      tag: "Full-Stack",
      title: "RESTful Network Monitoring API",
      desc: "Built a robust backend service to log system metrics, ping network devices, and alert administrators via email if servers go offline.",
      tech: ["Node.js", "Express", "MongoDB"],
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h3 className="section-title">Featured Projects</h3>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-info">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => <span key={idx}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.codeLink}>Code</a>
                  {project.demoLink && <a href={project.demoLink}>Live Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}