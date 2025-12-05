import React, { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import { Check } from "lucide-react";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleNewFeedback = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-white mb-8">
          Customer Issue Tracker
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <FeedbackForm onSubmitFeedback={handleNewFeedback} />

          <div className="overflow-visible">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Check className="text-green-500" /> Dashboard ({feedbacks.length}
              )
            </h2>
            <FeedbackList feedbacks={feedbacks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
