import { useEffect, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "../hooks/useForm";
export const EducationForm = ({ onFormSubmit }) => {
  const [isActive, setIsActive] = useState(false);

  const initialForm = {
    school: "IU Digital",
    study: "Tecnology",
    dateFrom: "2023-07-22",
    dateTo: "2025-05-11",
  };

  const { formState, school, study, dateFrom, dateTo, onInputChange } =
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
          <h1 className="title">Education</h1>
          <button type="button" className="show-form-btn"></button>
        </div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="school">School: </label>
          <input
            type="text"
            value={school}
            onChange={onInputChange}
            placeholder="school"
            name="school"
          />
          <label htmlFor="study">Study: </label>
          <input
            type="text"
            value={study}
            onChange={onInputChange}
            placeholder="Engineer"
            name="study"
          />
          <label htmlFor="dateFrom">from </label>
          <input
            type="date"
            value={dateFrom}
            onChange={onInputChange}
            placeholder="22/01/2024"
            name="dateFrom"
          />
          <label htmlFor="dateTo">To</label>
          <input
            type="date"
            value={dateTo}
            onChange={onInputChange}
            name="dateTo"
          />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};
