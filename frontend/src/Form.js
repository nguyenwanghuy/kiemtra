import { useState } from "react";

const Form = (props) => {
  const { addTodo } = props

  const [todo, setTodo] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo) {
      addTodo(todo)
    }
    setTodo()
  }
  console.log(todo)
  return (
    <form className="form">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter task ..." />
      <button onClick={handleSubmit} type="Submit">Submit</button>
    </form>
  );
};

export default Form;
