
import { useState } from "react";

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    education: "",
    skills: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* 📝 Input Form */}
      <div>
        <h2 className="text-xl font-bold">Resume Form</h2>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} />
        <textarea name="education" placeholder="Education" onChange={handleChange} />
        <input name="skills" placeholder="Skills" onChange={handleChange} />
      </div>

      {/* 👀 Live Preview */}
      <div>
        <h2 className="text-xl font-bold">Live Preview</h2>
        <div className="border p-4 shadow">
          <h1 className="text-2xl font-semibold">{formData.name}</h1>
          <p>{formData.email}</p>
          <h3 className="font-bold mt-2">Experience</h3>
          <p>{formData.experience}</p>
          <h3 className="font-bold mt-2">Education</h3>
          <p>{formData.education}</p>
          <h3 className="font-bold mt-2">Skills</h3>
          <p>{formData.skills}</p>
        </div>
      </div>
    </div>
  );
}
