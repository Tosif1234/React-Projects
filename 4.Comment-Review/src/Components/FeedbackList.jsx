import React from "react";
import { AlertCircle } from "lucide-react";
import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ feedbacks }) => {
  if (feedbacks.length === 0) {
    return (
      <div className="text-center p-10 bg-gray-800 rounded-lg border-2 border-dashed border-gray-700 text-gray-400">
        <AlertCircle size={32} className="mx-auto mb-2" />
        <p>No feedback submitted yet</p>
      </div>
    );
  }

  return (
    <div className="pr-2 overflow-visible">
      {feedbacks.map((item) => (
        <FeedbackCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
