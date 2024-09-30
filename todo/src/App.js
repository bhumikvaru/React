import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
