import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  localStorage.clear()
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10 md:gap-4"
    >
      {/* <AcceptTask />
      <CompleteTask />

      <NewTask />

      <FailedTask /> */}

      {data.tasks.map((e,idx)=>{
if(e.active){
  return <AcceptTask key={idx} data={e} />
}
if(e.newTask){
  return <NewTask  key={idx} data={e}/>
}
if(e.completed){
  return <CompleteTask  key={idx} data={e}/>
}
if(e.failed){
  return <FailedTask  key={idx} data={e}/>
}
      })}
    </div>
  );
};

export default TaskList;
