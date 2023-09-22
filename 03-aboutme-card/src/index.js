import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Art",
    level: "advanced",
    color: "#C3DCAF",
  },

  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="hero.jpg" alt="about me " />;
}
function Intro() {
  return (
    <div>
      <h1>Nisha Patar</h1>
      <p>
        Full-stack web developer. When not coding , I like to make art, watch
        anime, to cook.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/* <Skill skill="React" />
      <Skill skill="Javascript" />
      <Skill skill="HTML+CSS" />
      <Skill skill="Art" /> */}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <React.Fragment key="color">
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "advanced" && "💪"}
          {level === "intermediate" && "👍"}
          {level === "beginner" && "👶"}
        </span>
      </div>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
