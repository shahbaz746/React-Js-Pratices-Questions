import { useActionState, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, settodos] = useState([
    { title: "Learn React", desc: "Learn the basics of React" },
    { title: "Learn Vite", desc: "Learn how to use Vite for development" },
    {
      title: "Learn Shahbaz",
      desc: "Learn how to use Shahbaz for development",
    },
  ]);
  const Todo = ({ todo }) => {
    return (
      <>
        {/* <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div> */}
      </>
    );
  };

  return (
    <>
     {todos.map(todo=>{
          // return <Todo key={todo.title} todo={todo} />
          return <div key={todo.title} className="m-4 border border-1 border-purpal-400">
            <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
          </div>
        })}
    </>
  );
}

export default App;
