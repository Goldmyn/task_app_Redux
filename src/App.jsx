import CreateTask from "./components/AddTask";
import DisplayTask from "./components/ListTask";
import TaskFilter from "./components/FilterTask";

function App() {
  return (
    <>
      <TaskFilter />
      <CreateTask />
      <DisplayTask />
    </>
  );
}

export default App;
