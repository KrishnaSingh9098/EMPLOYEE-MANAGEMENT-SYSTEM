import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10 md:gap-4"
    >
      <div className="flex-shrink-0 w-[300px] h-full p-5 bg-blue-400 rounded-xl md:w-[80%]">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20-feb-2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
          porro ea id sed enim.
        </p>
      </div>
      <div className="flex-shrink-0 w-[300px] h-full p-5 bg-green-400 rounded-xl md:w-[80%]">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20-feb-2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
          porro ea id sed enim.
        </p>
      </div>
      <div className="flex-shrink-0 w-[300px] h-full p-5 bg-yellow-400 rounded-xl md:w-[80%]">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20-feb-2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
          porro ea id sed enim.
        </p>
      </div>
      <div className="flex-shrink-0 w-[300px] h-full p-5 bg-red-400 rounded-xl md:w-[80%]">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20-feb-2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
          porro ea id sed enim.
        </p>
      </div>
     
    </div>
  );
};

export default TaskList;
