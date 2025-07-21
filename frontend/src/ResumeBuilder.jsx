import React, { useRef } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import { useReactToPrint } from "react-to-print";

const ResumeBuilder = () => {
  const [step, setStep] = React.useState(1);
  const [resumeData, setResumeData] = React.useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    experience: [{ title: "", company: "", years: "" }],
    education: [{ degree: "", school: "", years: "" }],
    skills: [""],
    projects: [{ title: "", description: "" }],
  });

  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
    documentTitle: "resume",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {step === 1 && (
          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            nextStep={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <>
            <div className="md:col-span-2">
              <ResumePreview data={resumeData} ref={previewRef} />
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setStep(1)}
                className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Edit Details
              </button>
              <button
                onClick={handlePrint}
                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Download as PDF
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
