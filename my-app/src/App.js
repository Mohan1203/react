import RenderBody from "./componet/notebody";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import { useEffect, useState } from "react";
import Addtodo from "./componet/addtodo";

function App() {
  let initTodo;
  if (localStorage.getItem === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  let onDelete = (todo) => {

    setTodo(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem('todos', JSON.stringify(todo));
  }

  const addTodo = (title, desc) => {
    // let idNo = todos.length+1;
    let idNo = todos.length + 1;
    let todoItem = {
      id: idNo,
      title: title,
      desc: desc
    }
    setTodo([...todos, todoItem])
    console.log(todoItem)

  }


  let [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Header />
      <Addtodo addtodo={addTodo} />
      <div className="grid grid-cols-1">
        {todos.length === 0 ? <p className="text-center text-[1.5rem]">Here is no todo list</p> : <RenderBody todoS={todos} onDelete={onDelete} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
