import { useEffect, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "../hooks/useForm";
export const ExperienceForm = ({ onFormSubmit }) => {
  const [isActive, setIsActive] = useState(false);

  const initialForm = {
    company: "Google",
    position: "Software Engineer",
    tasks: "make projects, change color a bottom",
  };

  const { formState, company, position, tasks, onInputChange } =
    useForm(initialForm);

  const showForm = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formState);

    console.log(formState);
  };

  useEffect(() => {
    onFormSubmit(formState);
  }, []);

  return (
    <>
      <div className={`form-container ${isActive ? "active" : ""}`}>
        <div className="label" onClick={showForm}>
          <h1 className="title">Experience</h1>
          <button type="button" className="show-form-btn"></button>
        </div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            value={company}
            onChange={onInputChange}
            placeholder="Google"
            name="company"
          />
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            value={position}
            onChange={onInputChange}
            placeholder="Front-end developer"
            name="position"
          />
          <label htmlFor="task">Tasks: </label>
          <textarea
            type="textarea"
            value={tasks}
            onChange={onInputChange}
            placeholder="Make  the website responsive, write unit tests..."
            name="tasks"
            cols={25}
            rows={3}
          />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};
