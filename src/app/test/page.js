"use client";
import { useState } from "react";

const SlideUpDemo = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setShow(!show)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {show ? "Hide" : "Show"} Content
      </button>

      <div
        className={`
            transform transition-all duration-500 ease-out
            ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 pointer-events-none"
            }
          `}
      >
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Animated Content</h3>
          <p className="text-gray-600">
            This content slides up from the bottom when shown and slides down
            when hidden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideUpDemo;
