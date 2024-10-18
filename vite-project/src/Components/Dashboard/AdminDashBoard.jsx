import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashBoard;


{/* <div>
        <form action="" className="flex  flex-wrap w-full bg-red-200 items-start justify-between">
            <div className="w-1/2">
            <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="Make a ui Design" />
          </div>
         
          <div>
            <h3>Date</h3>
            <input type="date" />
          </div>

          <div>
            <h3>Assign To</h3>
            <input type="text" placeholder="Employee Name" />
          </div>
          <div>
            <h3>Category</h3>
            <input type="text" placeholder="Desighn or dev, etc" />
          </div>
            </div>
            <div className="w-1/2">
<h3>Description</h3>
<textarea name="" id="" cols="30" rows="10"></textarea>
</div>
          <button>Create Task</button>
        </form>
      </div> */}