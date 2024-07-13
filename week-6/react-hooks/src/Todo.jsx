/* eslint-disable react/prop-types */
import React from "react";

const Todo = ({ todo, setTodo }) => {
  const api = "https://sum-server.100xdevs.com/todos";
  const [apiTodos, setApiTodoList] = React.useState([]);

  function fetchTodos() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setApiTodoList(data.todos));
  }
  React.useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <Input setTodo={setTodo} />
      {todo.map(({ title, description }, i) => (
        <ListItem key={i} title={title} description={description} />
      ))}

      <h1>Api todo list</h1>
      <button onClick={fetchTodos}> fetch api todos</button>
      {apiTodos.map((todo) => (
        <ListItem
          key={todo?.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
};

function ListItem({ title, description }) {
  return (
    <>
      <h3>Title: {title}</h3>
      <p>Description: {description}</p>
    </>
  );
}

function Input({ setTodo }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit() {
    setTodo((e) => [...e, { title, description }]);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Todo;
