import React, { useEffect, useState } from "react";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);


  useEffect(() => {
    console.log("📌 Component Mounted");

    return () => {
      console.log("❌ Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("🔄 Component Updated (count changed):", count);
  }, [count]);


  useEffect(() => {
    const timer = setInterval(() => {
      console.log("⏳ Side Effect Running (interval)");
    }, 2000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className="mt-14 w-[100%] mx-auto p-6 bg-[#1a2433] rounded-2xl shadow-md text-center">

      <h2 className="text-3xl font-bold text-indigo-300  underline-offset-8">
        Lifecycle & useEffect Demo
      </h2>

      <h3 className="text-2xl mt-5 text-cyan-300 font-semibold">
        Count: {count}
      </h3>

      <div className="flex justify-center gap-5 mt-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-lg text-white font-medium transition-all"
        >
          Increment
        </button>

        <button
          onClick={() => setShow(!show)}
          className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded-lg text-white font-medium transition-all"
        >
          Toggle Component
        </button>
      </div>

      {show && <Child />}
    </div>
  );
};

export default LifecycleDemo;

const Child = () => {
  useEffect(() => {
    console.log("👶 Child Mounted");

    return () => {
      console.log("🧹 Child Unmounted (Cleanup)");
    };
  }, []);

  return <h3>Child Component Active</h3>;
};
