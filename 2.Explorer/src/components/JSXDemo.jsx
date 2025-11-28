import React from 'react'
import "tailwindcss";

const JsxDemo = () => {

  const Message = () => {
    return (
      <p className="text-green-400 mt-4 bg-green-900/20 p-3 rounded-xl border border-green-600/40">
        This is a nested component!
      </p>
    );
  };

  const name = "Tosif Kureshi";
  const age = 21;

  return (
    <div className="text-center mt-10 px-4">
      
      <h2 className="text-3xl font-bold text-blue-300 underline underline-offset-8">
        JSX Example
      </h2>

      <p className="mt-5 text-lg">
        Hello, my name is <b className="text-cyan-300">{name}</b>.
      </p>

      <p className="mt-2 text-lg">
        <b className="text-blue-400">My Age: {age}</b> — In 5 years, I will be 
        <span className="text-emerald-300 font-semibold"> {age + 5}</span> years old.
      </p>

      <Message />
    </div>
  );
};

export default JsxDemo
 