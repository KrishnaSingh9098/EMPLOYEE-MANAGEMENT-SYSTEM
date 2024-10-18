// import React from 'react';

// const TaskListNumber = ({data}) => {
//   return (
//     <div className='flex flex-wrap mt-10 justify-between gap-5 screen'>
//       <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-blue-400'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts}</h2>
//         <h3 className='text-xl font-medium'>New Task</h3>
//       </div>
//       <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-green-400'>
//         <h2 className='text-3xl font-semibold'>3</h2>
//         <h3 className='text-xl font-medium'>Completed</h3>
//       </div>
//       <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-yellow-400'>
//         <h2 className='text-3xl font-semibold'>0</h2>
//         <h3 className='text-xl font-medium'>Accepted</h3>
//       </div>
//       <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-red-400'>
//         <h2 className='text-3xl font-semibold'>0</h2>
//         <h3 className='text-xl font-medium'>Task Failed</h3>
//       </div>
//     </div>
//   );
// };

// export default TaskListNumber;


import React from 'react';

const TaskListNumber = ({ data }) => {
  if (!data || !data.taskCounts) {
    return <div>No task counts available.</div>;
  }

  return (
    <div className='flex flex-wrap mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.new}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='rounded-xl w-full md:w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Tasks Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;

