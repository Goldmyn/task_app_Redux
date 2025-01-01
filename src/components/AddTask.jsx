import { Input, Button, message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../features/task/taskSlice";

const { TextArea } = Input;

function CreateTask() {
  const [taskContent, setTaskContent] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  // handleCreateTask function
  const handleCreateTask = () => {
    // if the taskContent is empty, show an error message
    if (taskContent.trim() === "") {
      messageApi.error("Please enter a task");
      return;
    }
    // dispatch the addNewTask action with the taskContent as the payload to add a new task to the userTasks array in the Redux store and localStorage
    dispatch(addNewTask(taskContent.trim()));

    // show a success message
    messageApi.success("Task added successfully");

    // clear the taskContent
    setTaskContent("");
  };

  // return the JSX elements

  return (
    <>
      {contextHolder}
      <div className="grid mx-auto p-4 gap-2">
        <form
          action=""
          className="flex flex-col items-center lg:flex-row gap-4 border-b-3 pb-3"
        >
          <TextArea
            placeholder="Enter a task"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            className="w-12/12 lg:w-9/12 mx-auto border-blue-400 text-sm p-4 border-2 rounded-xl font-bold shadow-lg "
            size="large"
          />
          <Button
            type="primary"
            onClick={handleCreateTask}
            className="w-4/12 lg:w-4/12 flex bg-slate-600 mx-auto shadow-md shadow-amber-200"
          >
            Add Task
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateTask;
