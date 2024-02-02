import { useState } from "react";
import {
  GeneralInfoForm,
  ExperienceForm,
  EducationForm,
  SkillsForm,
  PreviewCV,
} from "./components";
function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState({});
  const [skillsInfo, setSkillsInfo] = useState({});
  return (
    <>
      <main>
        <div className="forms-container">
          <GeneralInfoForm onFormSubmit={setGeneralInfo} />
          <EducationForm onFormSubmit={setEducationInfo} />
          <ExperienceForm onFormSubmit={setExperienceInfo} />
          <SkillsForm onFormSubmit={setSkillsInfo} />
        </div>

        <PreviewCV
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          skillsInfo={skillsInfo}
        />
      </main>
    </>
  );
}

export default App;
