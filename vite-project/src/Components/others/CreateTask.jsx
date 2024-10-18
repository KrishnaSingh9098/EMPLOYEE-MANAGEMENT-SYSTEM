import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
            />
          </div>
          
          <div className="w-full sm:w-2/5 mb-4 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="Design or Dev, etc"
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 mb-4">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            placeholder="Enter task description..."
            rows="10"
          ></textarea>
          <button className="w-full mt-4 text-sm py-3 rounded bg-emerald-500 hover:bg-emerald-600">
          Create Task
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;



// import React from "react";

// const CreateTask = () => {
//   return (
//     <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
//       <form className="flex flex-wrap w-full items-start justify-between">
//         <div className="w-full sm:w-1/2">
//           <div className="mb-4">
//             <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
//             <input
//               type="text"
//               placeholder="Make a UI Design"
//               className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
//             />
//           </div>

//           <div className="mb-4">
//             <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
//             <input
//               type="date"
//               className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
//             />
//           </div>

//           <div className="mb-4">
//             <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
//             <input
//               type="text"
//               placeholder="Employee Name"
//               className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
//             />
//           </div>
          
//           <div className="w-full sm:w-2/5 mb-4 flex flex-col items-start">
//             <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//             <input
//               type="text"
//               placeholder="Design or Dev, etc"
//               className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
//             />
//           </div>
//         </div>

//         <div className="w-full sm:w-1/2 mb-4 lg:mb-0 lg:ml-4">
//           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//           <textarea
//             className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
//             placeholder="Enter task description..."
//             rows="10"
//           ></textarea>
//         </div>

//         <button className="w-full mt-4 text-sm py-3 rounded bg-emerald-500 hover:bg-emerald-600">
//           Create Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
