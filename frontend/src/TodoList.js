import React, { useState } from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import TodoListHeader from './TodoListHeader'; // Import the TodoListHeader component

const TodoList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Build some websites', done: false },
    { id: 2, title: 'Do exercises', done: false },
    { id: 3, title: 'Go shopping', done: false },
    { id: 4, title: 'House cleaning', done: true },
  ]);

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const undoneTasks = tasks.filter((task) => !task.done);
  const undoneTasksCount = undoneTasks.length; // Calculate undone tasks count

  const { todos, handleCheckTodo } = props;

  return (
    <div className='todo-list-container'>
      <TodoListHeader undoneTasksCount={undoneTasksCount} />{' '}
      {/* Include TodoListHeader with undoneTasksCount prop */}
     {tasks.map((task) => (
        <div
          key={task.id}
          className={`todo-item-container ${task.done ? 'done' : ''}`}
        >
          <div onClick={() => handleTaskCompletion(task.id)}>
            {task.done ? (
              <FaRegCheckCircle color='#9a9a9a' className='item-done-button' />
            ) : (
              <FaRegCircle className='item-done-button' color='#9a9a9a' />
            )}
          </div>
          <div className='item-title'>{task.title}</div>
        </div>
      ))}
      {todos?.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item-container ${todo.isActive ? 'done' : ''}`}
        >
          <div onClick={() => handleCheckTodo(todo)}>
            {todo.isActive ? (
              <FaRegCheckCircle color='#9a9a9a' className='item-done-button' />
            ) : (
              <FaRegCircle className='item-done-button' color='#9a9a9a' />
            )}
          </div>
          <div className='item-title'>{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;