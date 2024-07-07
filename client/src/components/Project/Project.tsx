import './Project.css';

function Project(props: any) {
  return (
    <div className='project'>
      <div>
        <h3 className='number'>{props.index + 1}</h3>
        <h2>{props.name}</h2>
        <img
          className="project-photo project-photo1"
          src={props.img}
          alt={props.imgAlt}
        />
        <p>{props.description}</p>
      </div>
      <a href={props.link}><i className="fa-solid fa-arrow-right"></i></a>
    </div>
  );
}

export default Project;
