// import React, { useContext } from "react";
// import {AuthContext} from '../../context/AuthProvider'

// const AllTask = () => {
//  const authData = useContext(AuthContext)

//  console.log(authData.employee)
//   return (
//     <div className="bg-[#1c1c1c] mt-5 rounded p-4 h-48 overflow-auto "> 
//      < div className="bg-blue-400 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
//         <h2 className="text-sm sm:text-base">Employee Name</h2>
//         <h3 className="text-sm sm:text-base">New Task</h3>
//         <h5 className="text-sm sm:text-base">Active Task</h5>
//         <h5 className="text-sm sm:text-base">Completed</h5>
//         <h5 className="text-sm sm:text-base">Failed</h5>
//       </div>
//       <div className="h-[80%] overflow-auto">
//       {authData.employee.map(function(elem){
//         return <div className="bg-emerald-800 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
//         <h2 className="text-sm sm:text-base w-1/3 text-white-600">{elem.firstName}</h2>
//         <h3 className="text-sm sm:text-base w-1/3 text-black-600">Task</h3>
//         <h5 className="text-sm sm:text-base w-1/5 text-yellow-400">Status</h5>
//         <h5 className="text-sm sm:text-base w-1/5 text-white-600">Status</h5>
//         <h5 className="text-sm sm:text-base w-1/5 text-red-600">Failed</h5>
//       </div>
//       })}    
//         </div>  
//     </div>
//   );
// };

// export default AllTask;


// import React, { useContext } from "react";
// import { AuthContext } from '../../context/AuthProvider';

// const AllTask = () => {
//     const authData = useContext(AuthContext);
    
//     // Check if employee is an array before mapping
//     const employees = Array.isArray(authData.employee) ? authData.employee : [];

//     return (
//         <div className="bg-[#1c1c1c] mt-5 rounded p-4 h-48 overflow-auto"> 
//             <div className="bg-blue-400 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
//                 <h2 className="text-sm sm:text-base">Employee Name</h2>
//                 <h3 className="text-sm sm:text-base">New Task</h3>
//                 <h5 className="text-sm sm:text-base">Active Task</h5>
//                 <h5 className="text-sm sm:text-base">Completed</h5>
//                 <h5 className="text-sm sm:text-base">Failed</h5>
//             </div>
//             <div className="h-[80%] overflow-auto">
//                 {employees.map((employee, index) => (
//                     <div key={index} className="bg-emerald-800 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
//                         <h2 className="text-sm sm:text-base w-1/5 text-white">{employee.firstName}</h2>
                        
//                         <div className="w-1/5">
//                             <h5 className="text-sm sm:text-base text-yellow-400">New Tasks</h5>
//                             {employee.tasks?.new?.map((task, taskIndex) => (
//                                 <div key={taskIndex} className="text-white">{task}</div>
//                             ))}
//                         </div>

//                         <div className="w-1/5">
//                             <h5 className="text-sm sm:text-base text-yellow-400">Active Tasks</h5>
//                             {employee.tasks?.active?.map((task, taskIndex) => (
//                                 <div key={taskIndex} className="text-white">{task}</div>
//                             ))}
//                         </div>

//                         <div className="w-1/5">
//                             <h5 className="text-sm sm:text-base text-yellow-400">Completed</h5>
//                             {employee.tasks?.completed?.map((task, taskIndex) => (
//                                 <div key={taskIndex} className="text-white">{task}</div>
//                             ))}
//                         </div>

//                         <div className="w-1/5">
//                             <h5 className="text-sm sm:text-base text-yellow-400">Failed</h5>
//                             {employee.tasks?.failed?.map((task, taskIndex) => (
//                                 <div key={taskIndex} className="text-white">{task}</div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllTask;



import React, { useContext } from "react";
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  console.log(authData.employee);

  return (
    <div className="bg-[#1c1c1c] mt-5 rounded p-4 h-48 overflow-auto">
      <div className="bg-blue-400 mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between">
        <h2 className="text-sm lg:text-lg lg:font-medium sm:text-base">Employee Name</h2>
        <h3 className="text-sm lg:text-lg lg:font-medium sm:text-base">New Task</h3>
        <h5 className="text-sm lg:text-lg lg:font-medium sm:text-base">Active Task</h5>
        <h5 className="text-sm lg:text-lg lg:font-medium sm:text-base">Completed</h5>
        <h5 className="text-sm lg:text-lg lg:font-medium sm:text-base">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {authData.employee.map((elem,idx) => (
          <div
            key={idx} // Assuming each employee has a unique ID
            className={`mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between ${elem.isActive ? 'bg-opacity-50' : 'bg-transparent'} transition duration-200`}
            style={{ backgroundColor: elem.isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
          >
            <h2 className="text-sm lg:text-lg lg:font-medium text-emerald-600 w-1/3">{elem.firstName}</h2>
            <h3 className="text-sm lg:text-lg lg:font-medium text-white w-1/3">{elem.taskCounts.new}</h3>
            <h5 className="text-sm lg:text-lg lg:font-medium text-yellow-400 w-1/5">{elem.taskCounts.active}</h5>
            <h5 className="text-sm lg:text-lg lg:font-medium text-green-600 w-1/5">{elem.taskCounts.completed}</h5>
            <h5 className="text-sm lg:text-lg lg:font-medium text-red-600 w-1/5">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
