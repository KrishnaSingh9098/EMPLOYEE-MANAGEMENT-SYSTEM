import React from "react";

const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] mt-5 rounded p-4 h-48 overflow-auto">
      <div className="bg-blue-400 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
        <h2 className="text-sm sm:text-base">Krishna</h2>
        <h3 className="text-sm sm:text-base">Make a UI</h3>
        <h5 className="text-sm sm:text-base">Status</h5>
      </div>
      <div className="bg-green-400 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
        <h2 className="text-sm sm:text-base">Krishna</h2>
        <h3 className="text-sm sm:text-base">Make a UI</h3>
        <h5 className="text-sm sm:text-base">Status</h5>
      </div>
      <div className="bg-yellow-400 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
        <h2 className="text-sm sm:text-base">Krishna</h2>
        <h3 className="text-sm sm:text-base">Make a UI</h3>
        <h5 className="text-sm sm:text-base">Status</h5>
      </div>
      <div className="bg-red-400 py-2 px-4 flex flex-col sm:flex-row justify-between mb-2">
        <h2 className="text-sm sm:text-base">Krishna</h2>
        <h3 className="text-sm sm:text-base">Make a UI</h3>
        <h5 className="text-sm sm:text-base">Status</h5>
      </div>
    </div>
  );
};

export default AllTask;
