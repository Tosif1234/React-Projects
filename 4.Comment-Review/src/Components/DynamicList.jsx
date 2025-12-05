import React, { useState } from "react";
import { Trash2, PlusCircle } from "lucide-react";

const DynamicList = ({ label, items, onAdd, onRemove }) => {
  const [currentInput, setCurrentInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (currentInput.trim() !== "") {
      onAdd(currentInput);
      setCurrentInput("");
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-300 mb-1">{label}</label>

      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder={`Add new ${label.toLowerCase()}...`}
          className="flex-1 bg-gray-700 border border-gray-600 text-white p-2 rounded"
        />
        <button onClick={handleAdd} className="bg-blue-900 text-blue-200 px-3 rounded">
          <PlusCircle size={20} />
        </button>
      </div>

      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between bg-gray-700 p-2 rounded">
            <span className="text-sm text-gray-200">{index + 1}. {item}</span>
            <button onClick={() => onRemove(index)} className="text-red-400">
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
