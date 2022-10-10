import logo from "./logo.svg";
import Todos from "./Components/Todos";
import NewTodoForm from "./Components/NewTodoForm";

function App() {
  return (
    <div className="App">
      <Todos></Todos>
      <NewTodoForm />
    </div>
  );
}

export default App;
