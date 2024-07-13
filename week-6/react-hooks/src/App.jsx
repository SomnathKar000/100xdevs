import Wrapper from "./Wrapper";
import Todo from "./Todo";
import Counter from "./Counter";
import { useState } from "react";

function App() {
  const list = [
    { title: "Title 1", description: "description 1" },
    { title: "Title 2", description: "description 2" },
  ];
  const [todo, setTodo] = useState(list);
  return (
    <>
      <Counter />
      <Wrapper>
        <Todo todo={todo} setTodo={setTodo} />
      </Wrapper>
    </>
  );
}

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My title");
//   function handleChangeTitle() {
//     setTitle("My title " + Math.random());
//   }
//   return (
//     <>
//       <button onClick={handleChangeTitle}>Change title</button>
//       <Header title={title} />
//     </>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// const MemoHeader = memo(Header);

export default App;
