import React from "react";

const ResumeForm = ({ resumeData, setResumeData, back, nextStep }) => {
  const handleChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const handleArrayChange = (field, index, subField, value) => {
    const updatedArray = [...resumeData[field]];
    updatedArray[index][subField] = value;
    setResumeData({ ...resumeData, [field]: updatedArray });
  };

  const addField = (field, template) => {
    setResumeData({ ...resumeData, [field]: [...resumeData[field], template] });
  };

  return (
    <div className="col-span-2 bg-white p-6 rounded-md shadow-sm overflow-auto max-h-[90vh]">
      <h2 className="text-xl font-bold mb-4">Resume Details</h2>

      {/* Basic Info */}
      <input type="text" placeholder="Full Name" value={resumeData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)} className="w-full p-2 border rounded mb-3" />

      <input type="text" placeholder="Job Title" value={resumeData.jobTitle}
        onChange={(e) => handleChange("jobTitle", e.target.value)} className="w-full p-2 border rounded mb-3" />

      <input type="email" placeholder="Email" value={resumeData.email}
        onChange={(e) => handleChange("email", e.target.value)} className="w-full p-2 border rounded mb-3" />

      <input type="tel" placeholder="Phone" value={resumeData.phone}
        onChange={(e) => handleChange("phone", e.target.value)} className="w-full p-2 border rounded mb-3" />

      <input type="text" placeholder="Address" value={resumeData.address}
        onChange={(e) => handleChange("address", e.target.value)} className="w-full p-2 border rounded mb-3" />

      <textarea placeholder="Summary" value={resumeData.summary}
        onChange={(e) => handleChange("summary", e.target.value)}
        className="w-full p-2 border rounded h-24 mb-4" />

      {/* Work Experience */}
      <h3 className="font-semibold text-lg mt-6">Work Experience</h3>
      {resumeData.experience.map((exp, idx) => (
        <div key={idx} className="mb-3 p-2 border rounded">
          <input type="text" placeholder="Job Title"
            value={exp.title} onChange={(e) => handleArrayChange("experience", idx, "title", e.target.value)}
            className="w-full p-1 border rounded mb-1" />
          <input type="text" placeholder="Company"
            value={exp.company} onChange={(e) => handleArrayChange("experience", idx, "company", e.target.value)}
            className="w-full p-1 border rounded mb-1" />
          <input type="text" placeholder="Years"
            value={exp.years} onChange={(e) => handleArrayChange("experience", idx, "years", e.target.value)}
            className="w-full p-1 border rounded" />
        </div>
      ))}
      <button onClick={() => addField("experience", { title: "", company: "", years: "" })}
        className="text-sm text-blue-600 mb-4">+ Add Experience</button>

      {/* Education */}
      <h3 className="font-semibold text-lg mt-6">Education</h3>
      {resumeData.education.map((edu, idx) => (
        <div key={idx} className="mb-3 p-2 border rounded">
          <input type="text" placeholder="Degree"
            value={edu.degree} onChange={(e) => handleArrayChange("education", idx, "degree", e.target.value)}
            className="w-full p-1 border rounded mb-1" />
          <input type="text" placeholder="School"
            value={edu.school} onChange={(e) => handleArrayChange("education", idx, "school", e.target.value)}
            className="w-full p-1 border rounded mb-1" />
          <input type="text" placeholder="Years"
            value={edu.years} onChange={(e) => handleArrayChange("education", idx, "years", e.target.value)}
            className="w-full p-1 border rounded" />
        </div>
      ))}
      <button onClick={() => addField("education", { degree: "", school: "", years: "" })}
        className="text-sm text-blue-600 mb-4">+ Add Education</button>

      {/* Skills */}
      <h3 className="font-semibold text-lg mt-6">Skills</h3>
      {resumeData.skills.map((skill, idx) => (
        <input key={idx} type="text" placeholder="Skill"
          value={skill} onChange={(e) => {
            const updatedSkills = [...resumeData.skills];
            updatedSkills[idx] = e.target.value;
            handleChange("skills", updatedSkills);
          }}
          className="w-full p-2 border rounded mb-2" />
      ))}
      <button onClick={() => addField("skills", "")}
        className="text-sm text-blue-600 mb-4">+ Add Skill</button>

      {/* Projects */}
      <h3 className="font-semibold text-lg mt-6">Projects</h3>
      {resumeData.projects.map((proj, idx) => (
        <div key={idx} className="mb-3 p-2 border rounded">
          <input type="text" placeholder="Project Title"
            value={proj.title} onChange={(e) => handleArrayChange("projects", idx, "title", e.target.value)}
            className="w-full p-1 border rounded mb-1" />
          <textarea placeholder="Description"
            value={proj.description} onChange={(e) => handleArrayChange("projects", idx, "description", e.target.value)}
            className="w-full p-1 border rounded" />
        </div>
      ))}
      <button onClick={() => addField("projects", { title: "", description: "" })}
        className="text-sm text-blue-600 mb-4">+ Add Project</button>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button onClick={back} className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100">
          Back
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Preview
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
