import { skills } from '../../consts/skills';

import './About-me.css';

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-img-holder">
        <img src="../../images/Avatar2.png" alt="autor" />
      </div>
      <div className="holder">
        <h1>About me</h1>
        <article>
          <p>
            I am a graduate of postgraduate studies at Białystok University of
            Technology in JavaScript Developer specialization. I completed a
            three-month internship as a Fullstack Developer, during which I
            collaborated with a team using technologies such as Node.js,
            Express, PostgreSQL, TypeScript, React, Redux or Storybook. The
            entire internship was conducted in English and based on Agile
            methodology.
          </p>
          <p>
            Additionally, I have experience as a programming teacher for
            children and teenagers, where I conducted Python programming
            classes. My passion is learn new programming skills and sharing
            knowledge with others.
          </p>
        </article>
        <ul className="skills-list">
          {skills.map((skill) => (
            <i key={skill} className={skill}></i>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
