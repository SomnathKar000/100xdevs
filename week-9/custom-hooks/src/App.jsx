// import { useTodos } from "./customHooks/dataFetchingHooks";
// import { useMouseTrack } from "./customHooks/mouseTrack";
// import { useOnline } from "./customHooks/userOnlineHook";
import { useState } from "react";
import { useDebounce } from "./customHooks/search-debouncer";

function App() {
  // const { todos, loading, fetchData } = useTodos();
  // const { isOnline } = useOnline();
  // const { mousePosition } = useMouseTrack();
  const [input, setInput] = useState("");
  const { debounce } = useDebounce(input, 1000);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div>
        <input
          placeholder="search..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>{debounce}</p>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
}

export default App;
