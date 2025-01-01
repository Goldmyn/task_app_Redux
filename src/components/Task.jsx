import { useState, useEffect } from "react";
import { Button, Modal, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../features/task/taskSlice";

const { TextArea } = Input;

const EditTask = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContent, setNewContent] = useState("");

  const dispatch = useDispatch();

  // Selector to find the task by ID
  const task = useSelector((state) =>
    state.task.userTasks.find((task) => task.taskId === props.taskId)
  );
  // showModal function
  const showModal = () => {
    if (task) {
      setNewContent(task.task); // Populate with existing task content
    }
    setIsModalOpen(true);
  };
  // handleOk function
  const handleOk = () => {
    if (newContent.trim() === "") {
      message.error("Task content cannot be empty");
      return;
    }
    // Dispatch editTask action with task_update_id and task_update
    dispatch(
      editTask({
        task_update_id: props.taskId,
        task_update: newContent.trim(),
      })
    );

    message.success("Task updated successfully");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Reset newContent when task changes
    if (task) {
      setNewContent(task.task);
    }
  }, [task]);

  const completed = task ? task.completed : false; // Check if task is completed

  return (
    <>
      <Button
        className="bg-white"
        onClick={showModal}
        disabled={completed}
      >
        Edit
      </Button>
      <Modal
        title="Edit Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose // Optional: to clear form on modal close
      >
        <TextArea
          placeholder="Edit Task"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default EditTask;
