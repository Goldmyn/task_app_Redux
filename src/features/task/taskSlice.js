import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",

  // store the initial state of the task using the localStorage
  initialState: {
    userTasks: JSON.parse(localStorage.getItem("tasks")) || [],
  },

  //declare reducers: they are functions that define how the state changes

  reducers: {
    // addNewTask: this reducer will add a new task to the userTasks array
    addNewTask: (state, action) => {
      // get the current date
      const date = new Date();
      // add the new task to the userTasks array
      state.userTasks = [
        {
          taskId: Math.floor(Math.random() * 9999),
          task: action.payload,
          completed: false,
          createdAt: date.toLocaleDateString(),
        },
        // add the previous tasks to the new task
        ...state.userTasks,
      ];
      // store the new task in the localStorage

      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    // toggleTask: this reducer will toggle the completed status of a task

    toggleTask: (state, action) => {
      // map through the userTasks array
      state.userTasks = state.userTasks.map((task) => {
        // if the task id is equal to the action payload
        if (task.taskId === action.payload) {
          // toggle the completed status of the task
          return { ...task, completed: !task.completed };
        }
        // return the task as it is if the id is not equal to the action payload
        return task;
      });
      // store the new userTasks array in the localStorage
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    // deleteTask: this reducer will delete a task from the userTasks array

    deleteTask: (state, action) => {
      // filter the userTasks array to remove the task with the id equal to the action payload
      state.userTasks = state.userTasks.filter(
        (task) => task.taskId !== action.payload
      );
      // store the new userTasks array in the localStorage
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    // editTask: this reducer will edit a task in the userTasks array by changing the task property of the task with the id equal to the action payload

    editTask: (state, action) => {
      // map through the userTasks array to find the task with the id equal to the action payload
      state.userTasks = state.userTasks.map((item) => {
        // if the task id is equal to the action payload task_update_id
        if (item.taskId === action.payload.task_update_id) {
          // change the task property of the task to the new task
          item.task = action.payload.task_update;
        }
        // return the task as it is if the id is not equal to the action payload
        return item;
      });
      // store the new userTasks array in the localStorage
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },
  },
});

// export the actions

export const { addNewTask, toggleTask, deleteTask, editTask } =
  taskSlice.actions;

// export the reducer

export default taskSlice.reducer;
