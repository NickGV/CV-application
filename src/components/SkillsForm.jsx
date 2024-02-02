import { useEffect, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "../hooks/useForm";
export const SkillsForm = ({ onFormSubmit }) => {
  const [isActive, setIsActive] = useState(false);

  const { formState, skills, onInputChange } = useForm({
    skills: "Html,Css,Javascript",
  });

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
          <h1 className="title">Skills</h1>
          <button type="button" className="show-form-btn"></button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <textarea
            type="textarea"
            value={skills}
            onChange={onInputChange}
            placeholder="Write your skills separated by commas"
            name="skills"
            cols={25}
            rows={3}
          />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};
