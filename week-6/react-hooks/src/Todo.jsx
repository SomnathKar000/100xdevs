import React from "react";

const Todo = ({ todo, setTodo }) => {
  return (
    <div>
      <Input setTodo={setTodo} />
      {todo.map(({ title, description }, i) => (
        <ListItem key={i} title={title} description={description} />
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
