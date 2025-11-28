import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    
    <div className="mt-10 p-6 bg-[#0f1a2b] rounded-2xl shadow-lg w-[100%] mx-auto">
      
      <h2 className="text-3xl font-bold text-indigo-300">
        Controlled Forms & Events
      </h2>
      <p className="text-gray-400 mt-2">
        The form input value is controlled by React state (`formData`).
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-300 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#111c2f] border border-gray-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#111c2f] border border-gray-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all"
        >
          Submit Form
        </button>
      </form>

      <div className="mt-6 bg-[#0b1528] p-4 rounded-lg text-green-300 font-mono text-sm">
        <h3 className="text-xl text-indigo-300 font-semibold mb-2">
          Real-Time State Mirror
        </h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>

      {submittedData && (
        <div className="mt-6 bg-[#0b1528] p-4 rounded-lg text-blue-300">
          <h3 className="text-xl font-semibold">Submitted Data</h3>
          <p>
            <b>Name:</b> {submittedData.name}
          </p>
          <p>
            <b>Email:</b> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormHandling;
