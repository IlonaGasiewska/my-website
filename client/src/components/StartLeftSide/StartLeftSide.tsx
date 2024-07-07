import SocialMedia from '../SocialMedia/SocialMedia';
import Button from '../Button/Button';

import './StartLeftSide.css';

function StartLeftSide() {
  return (
    <div className="start-left-side">
      <div className="header">
        <h1>Hi, I'm Ilona</h1>
        <h2>
          <span className="javascript-element">JavaScript</span> Developer
        </h2>
        <p>
          I'm a JavaScript developer with experience in creating dynamic web
          applications. I specialize in working with modern frameworks such as
          React and Node.js. My passion is building intuitive and responsive
          user interfaces. If you interesed to know me better - scroll down!
        </p>
      </div>
      <SocialMedia />
      <div className="buttons">
        <Button link={'#projects'} text={'SEE MY PROJECS'} isActive={false} />
        <Button
          link={'https://ilonagasiewska.github.io/my-cv-en/'}
          isActive={true}
          text={'SEE MY CV ONLINE'}
        />
      </div>
    </div>
  );
}

export default StartLeftSide;
