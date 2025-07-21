import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className="bg-white shadow p-4 rounded-md text-sm">
      <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">Live Resume Preview</h2>

      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-xl font-bold">{data.fullName}</h1>
          <p className="text-gray-500">{data.jobTitle}</p>
          <p>{data.email} | {data.phone} | {data.address}</p>
        </div>

        <hr />

        <div>
          <h3 className="font-semibold text-gray-700">Summary</h3>
          <p>{data.summary}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Work Experience</h3>
          {data.experience.map((exp, i) => (
            <div key={i}>
              <strong>{exp.title}</strong>, {exp.company} ({exp.years})
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Education</h3>
          {data.education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.degree}</strong>, {edu.school} ({edu.years})
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Skills</h3>
          <ul className="list-disc list-inside">
            {data.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Projects</h3>
          {data.projects.map((proj, i) => (
            <div key={i}>
              <strong>{proj.title}</strong>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ResumePreview;
