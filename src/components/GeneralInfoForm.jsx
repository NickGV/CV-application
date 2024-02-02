import { useEffect, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "../hooks/useForm";
export const GeneralInfoForm = ({ onFormSubmit }) => {
  const initialForm = {
    name: "Your Name",
    email: "something@gmail.com",
    phone: "2718231",
  };

  const { formState, name, email, phone, onInputChange } = useForm(initialForm);

  const [isActive, setIsActive] = useState(false);

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
          <h1 className="title">Personal Info</h1>
          <button type="button" className="show-form-btn"></button>
        </div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={name}
            onChange={onInputChange}
            placeholder="Name"
            name="name"
          />
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            onChange={onInputChange}
            value={email}
            placeholder="Email"
            name="email"
          />
          <label htmlFor="phone">Phone #</label>
          <input
            type="number"
            onChange={onInputChange}
            value={phone}
            placeholder="Your Phone number"
            name="phone"
          />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};
