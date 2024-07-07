import './Button.css';

function Button({ link, text, isActive }: any) {
  const name = isActive ? 'active button' : 'button';

  return (
    <a href={link}>
      <button className={name}>{text}</button>
    </a>
  );
}

export default Button;
