import React from "react";

const TemplateSelector = ({ nextStep }) => {
  return (
    <div className="bg-white shadow-sm p-6 rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose a Resume Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((template) => (
          <div key={template} className="border p-4 rounded hover:border-blue-600 transition-all">
            <img src={`https://placehold.co/200x280?text=Template+${template}`} alt={`Template ${template}`} className="mb-2 mx-auto" />
            <button
              onClick={nextStep}
              className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Use Template {template}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
