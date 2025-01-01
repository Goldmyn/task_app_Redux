import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { deleteTask } from "../features/task/taskSlice";
import { toggleTask } from "../features/task/taskSlice";
import EditTask from "./Task";

function DisplayTask() {
  const dispatch = useDispatch();
  const { userTasks } = useSelector((state) => state.task);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // handleToggleTask function
  const handleToggleTask = (taskId) => {
    // dispatch the toggleTask action with the taskId as the payload to toggle the completed status of the task
    dispatch(toggleTask(taskId));
  };

  // return the JSX elements
  return (
    <div className=" grid lg:grid-cols-2 mx-auto p-4 gap-4 ">
      {userTasks.map((item) => (
        <div key={item.taskId}>
          <div className="bg-gray-800 rounded-lg">
            <div
              className={`flex justify-between px-4 py-2 ${
                item.completed
                  ? "text-green-400 border-2 border-green-600 bg-lime-300 rounded-lg"
                  : "bg-black rounded-lg"
              }`}
            >
              <Button
                onClick={() => handleDeleteTask(item.taskId)}
                className="bg-rose-400 font-bold text-white"
              >
                Delete
              </Button>
              <Button
                type="primary"
                onClick={() => handleToggleTask(item.taskId)}
                className={item.completed ? "bg-green-500" : "bg-red-500"}
              >
                {item.completed ? "Completed" : "Incomplete"}
              </Button>
              <EditTask taskId={item.taskId} />
            </div>
            <div className="px-4  min-h-[100px] grid  bg-gray-700">
              <p className="text-white font-bold text-lg">{item.task}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayTask;
