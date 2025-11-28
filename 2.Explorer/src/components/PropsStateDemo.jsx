import React, { useState } from 'react'

const PropsStateDemo = (props) => {

    const [count , setCount] = useState(0);

  return (
    <div className="text-center mt-10">

      <h2 className="text-3xl font-bold text-blue-300 underline underline-offset-8">
         Props & State
      </h2>


      <p className="mt-5 text-lg">
        Hello , My Name Is <b className="text-cyan-300">{props.name}</b>
      </p>

      <p className="mt-2 text-lg">
        Course : <b className="text-emerald-300">{props.course}</b>
      </p>


      <h2 className="mt-6 text-2xl font-semibold text-blue-200">
        Count : {count}
      </h2>

      <div className="flex justify-center gap-5 mt-4">
        <button
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white font-medium transition-all"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white font-medium transition-all"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default PropsStateDemo