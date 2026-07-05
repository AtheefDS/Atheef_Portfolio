import React from 'react';

export default function Skills() {
  const skillSets = [
    { title: "💻 Languages", skills: ["Python", "JavaScript (ES6+)", "Java", "SQL", "PHP", "C"] },
    { title: "☁️ Cloud & DevOps", skills: ["AWS (EC2, S3)", "Docker", "Git / GitHub Actions", "Linux"] },
    { title: "🛠️ Frameworks & Tools", skills: ["React.js", "Node.js / Express", "MongoDB", "Postman"] } ,
    { title: "🔌 Hardware & IoT", skills: ["Arduino","ESP32","Raspberry Pi","Embedded Systems","Sensor Interfacing","Microcontrollers","Circuit Design","PCB Prototyping","IoT Development","Serial Communication","GPIO Programming"
  ]
},
  ];

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills-grid">
          {skillSets.map((set, index) => (
            <div key={index} className="skill-category">
              <h4>{set.title}</h4>
              <ul>
                {set.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}