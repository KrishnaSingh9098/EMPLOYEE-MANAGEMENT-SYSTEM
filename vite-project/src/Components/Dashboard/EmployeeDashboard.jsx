import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskLict from '../TaskList/TaskLict';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-5 bg-[#1c1c1c] h-screen'>
      <Header data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskLict data={props.data} />
    </div>
  );
}

export default EmployeeDashboard;
