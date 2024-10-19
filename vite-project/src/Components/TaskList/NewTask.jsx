import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full p-5 bg-yellow-400 rounded-xl md:w-[80%]">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.taskCategory}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
        {data.taskDescription}
        </p>
        <div className='mt-4'>
<button>Accept-Task</button>
        </div>
      </div>
  )
}

export default NewTask