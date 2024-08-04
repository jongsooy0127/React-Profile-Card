import "./App.css";
import profilePicture from "./profile-picture.jpg";

const mySkill = [
  {
    skill: "HTML+CSS",
    color: "red",
  },
  {
    skill: "Javascript",
    color: "skyblue",
  },
  {
    skill: "Git+Github",
    color: "yellow",
  },
  {
    skill: "Python",
    color: "pink",
  },
  {
    skill: "SQL",
    color: "aquamarine",
  },
  {
    skill: "React",
    color: "firebrick",
  },
  {
    skill: "MariaDB",
    color: "gray",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src={profilePicture} alt="Profile" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Jong Soo Yoon</h1>
      <p>
        Full Stack Developer who is currently learning React. When not coding, I
        enjoy playing video games on my custom PC. I also enjoy singing at
        personal karaoke rooms during my free time to destress.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {mySkill.map((eachSkill, i) => (
        <li
          className="skill"
          key={i}
          style={{ backgroundColor: eachSkill.color }}
        >
          {eachSkill.skill}
        </li>
      ))}
    </ul>
  );
}
