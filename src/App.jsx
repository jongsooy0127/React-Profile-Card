import "./App.css";
import profilePicture from "./profile-picture.jpg";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <ul className="skill-list">
          <SkillList color="red" skill="HTML+CSS" />
          <SkillList color="skyblue" skill="Javscript" />
          <SkillList color="yellow" skill="Git+Github" />
          <SkillList color="pink" skill="Python" />
          <SkillList color="aquamarine" skill="SQL" />
          <SkillList color="firebrick" skill="React" />
          <SkillList color="gray" skill="MariaDB" />
        </ul>
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

function SkillList(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.skill} 👍
    </li>
  );
}
