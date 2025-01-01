import { useDispatch } from "react-redux";
import { Button } from "antd"; // Assuming Ant Design is being used
import { filterTasks } from "../features/task/taskSlice";

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (status) => {
    dispatch(filterTasks(status));
  };

  return (
    <div className="flex mt-4 lg:max-w-[700px] justify-between mx-auto p-4">
      <Button
        onClick={() => handleFilter("completed")}
        className="bg-green-500 font-bold"
      >
        Show Completed
      </Button>
      <Button
        onClick={() => handleFilter("active")}
        className="bg-zinc-700 text-white font-bold "
      >
        Show Active
      </Button>
      <Button
        onClick={() => handleFilter("all")}
        className="bg-yellow-500 font-bold "
      >
        Show All
      </Button>
    </div>
  );
};

export default TaskFilter;
