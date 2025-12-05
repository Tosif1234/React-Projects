import React from "react";

const FeedbackCard = ({ data }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-white">{data.category}</h3>

        <span className={`px-2 py-1 rounded text-xs font-bold border ${
          data.priority === "High" ? "bg-red-900/50 text-red-200 border-red-800" :
          data.priority === "Medium" ? "bg-yellow-900/50 text-yellow-200 border-yellow-800" :
          "bg-green-900/50 text-green-200 border-green-800"
        }`}>
          {data.priority} Priority
        </span>
      </div>

      <p className="text-gray-300 mb-2">{data.description}</p>

      {data.feedbackMessage && (
        <p className="text-blue-300 italic mb-2">✨ Feedback: {data.feedbackMessage}</p>
      )}

      <div className="text-sm text-gray-400 border-t border-gray-700 pt-2">
        <p><strong className="text-gray-200">Reporter:</strong> {data.name} ({data.email})</p>

        {data.steps.length > 0 && (
          <div className="mt-2">
            <p className="font-semibold text-gray-300">Steps to Reproduce:</p>
            <ul className="list-disc pl-5 text-gray-400">
              {data.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {data.screenshot && (
          <div className="mt-2 text-blue-400">
            <a href={data.screenshot} target="_blank" rel="noreferrer">📷 View Screenshot</a>
          </div>
        )}

        {data.notes && (
          <p className="italic text-gray-500 mt-1">Note: {data.notes}</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackCard;
