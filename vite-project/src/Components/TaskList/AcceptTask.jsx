import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full p-5 bg-blue-400 rounded-xl md:w-[80%]">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.taskCategory}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
       {data.taskDescription}
      </p>
      <div className="flex justify-between mt-4">
        <button className=" bg-green-500 px-1 py-2 text-sm">
          Mark As Completed
        </button>
        <button className=" bg-red-500 px-1 py-2 text-sm">
          Mark AS Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
