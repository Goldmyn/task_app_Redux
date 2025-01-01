import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskSlice";

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
