export const PreviewCV = ({
  generalInfo,
  educationInfo,
  experienceInfo,
  skillsInfo,
}) => {
  const { name, email, phone } = generalInfo;

  const { school, study, dateFrom, dateTo } = educationInfo;

  const { company, position, tasks } = experienceInfo;

  const { skills } = skillsInfo;

  let taskList = [];
  let skillsList = [];

  if (tasks) {
    taskList = tasks.split(",");
  }

  if (skills) {
    skillsList = skills.split(",");
  }

  return (
    <>
      <div className="cv-container">
        <header className="personal">
          <img src="3" alt="" className="personal-img" />
          <div className="personal-text">
            <h1 className="personal-name">{name}</h1>
            <p className="personal-email">
              <strong>Email: </strong> {email}
            </p>
            <p className="personal-phone">
              <strong>Phone: </strong> {phone}
            </p>
          </div>
        </header>

        <section className="education">
          <h2 className="subtitle">Educación</h2>
          <div className="education-info">
            <div className="time-range">
              {dateFrom} <strong>to</strong> {dateTo}
            </div>
            <div>
              <p>{school}</p>
              <p>{study}</p>
            </div>
          </div>
        </section>

        <section className="experience">
          <h2 className="subtitle">Experience</h2>
          <div className="experience-info">
            <h3>{company}</h3>
            <p>
              <strong>Postion:</strong> {position}
            </p>
            <h4 className="">tasks:</h4>
            <ul className="task">
              {taskList.map((task, index) => (
                <li key={index}>{task.trim()}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="skills">
          <h2 className="subtitle">Habilidades</h2>
          <ul>
            {skillsList.map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};
