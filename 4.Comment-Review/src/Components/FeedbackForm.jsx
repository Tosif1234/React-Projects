import React, { useState } from "react";
import { Send, FileText } from "lucide-react";
import DynamicList from "./DynamicList";

const FeedbackForm = ({ onSubmitFeedback }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Bug",
    priority: "Low",
    description: "",
    feedbackMessage: "",
    steps: [],
    suggestions: [],
  });

  const [errors, setErrors] = useState({});

  let screenshotRef = null;
  let notesRef = null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Enter your name";
    if (!formData.email.includes("@")) newErrors.email = "Enter valid email";
    if (formData.description.length < 10)
      newErrors.description = "Description must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newFeedback = {
      id: Date.now(),
      ...formData,
      screenshot: screenshotRef?.value,
      notes: notesRef?.value,
    };

    onSubmitFeedback(newFeedback);

    setFormData({
      name: "",
      email: "",
      category: "Bug",
      priority: "Low",
      description: "",
      feedbackMessage: "",
      steps: [],
      suggestions: [],
    });

    if (screenshotRef) screenshotRef.value = "";
    if (notesRef) notesRef.value = "";
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <FileText className="text-blue-400" /> Submit Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-white">
        {/* TWO COLUMN ROW */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="bg-gray-700 p-2 rounded text-white"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="bg-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* CATEGORY + PRIORITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-gray-700 p-2 rounded text-white"
          >
            <option>Bug</option>
            <option>Suggestion</option>
            <option>Complaint</option>
            <option>Other</option>
          </select>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="bg-gray-700 p-2 rounded text-white"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the issue..."
          className="w-full bg-gray-700 p-2 rounded text-white"
          rows="3"
        />

        {/* DYNAMIC LISTS */}
        <DynamicList
          label="Steps to Reproduce"
          items={formData.steps}
          onAdd={(v) =>
            setFormData({ ...formData, steps: [...formData.steps, v] })
          }
          onRemove={(i) =>
            setFormData({
              ...formData,
              steps: formData.steps.filter((_, x) => x !== i),
            })
          }
        />

        <DynamicList
          label="Suggested Improvements"
          items={formData.suggestions}
          onAdd={(v) =>
            setFormData({
              ...formData,
              suggestions: [...formData.suggestions, v],
            })
          }
          onRemove={(i) =>
            setFormData({
              ...formData,
              suggestions: formData.suggestions.filter((_, x) => x !== i),
            })
          }
        />

        {/* UNCONTROLLED FIELDS */}
        <input
          ref={(el) => (screenshotRef = el)}
          placeholder="Screenshot URL"
          className="bg-gray-700 p-2 rounded w-full text-white"
        />

        <textarea
          ref={(el) => (notesRef = el)}
          placeholder="Additional Notes"
          className="bg-gray-700 p-2 rounded w-full text-white"
          rows="2"
        />

        {/* SUBMIT BUTTON */}
        <button className="w-full bg-blue-600 py-3 rounded-lg text-white font-bold flex justify-center items-center gap-2 hover:bg-blue-500">
          <Send size={18} /> Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
