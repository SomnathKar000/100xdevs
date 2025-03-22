import "./App.css";
import { useTodos } from "./customHooks/dataFetchingHooks";
import { useMouseTrack } from "./customHooks/mouseTrack";
import { useOnline } from "./customHooks/userOnlineHook";

function App() {
  const { todos, loading, fetchData } = useTodos();
  const { isOnline } = useOnline();
  const { mousePosition } = useMouseTrack();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {isOnline ? "Online" : "OffLine"}
        <div>
          Mouse Position :{mousePosition.x} , {mousePosition.y}
        </div>
        <button onClick={fetchData}>Fetch Again</button>
        {todos.map((todo) => {
          return (
            <div style={{ padding: "10px" }} key={todo.id}>
              {todo.title} || {todo.completed ? "Complete" : "In Progress"}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
