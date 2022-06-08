import {useState} from 'react';

function Footer({todos, setTodos, setHide}) {

const [select, setSelect] = useState("selected", "", "");

const unCompleted = todos.filter(todo => todo.done == false);

const completed = todos.filter(todo => todo.done == true);

const clearCompleted= (e)=>{
    e.preventDefault();
    setTodos(todos.filter(todo => todo.done == false));
};

const filterHandler = (e) => {
    switch(e.target.id){
        case 'completed':
            setSelect(["", "", ""]);
            setHide("Completed");
            break;
        case 'active':
            setSelect(["", "selected", ""]);
            setHide("Active");
            break;
        case "all":
            setSelect(["selected", "", ""]);
            setHide("All");
            break;
        default:
    };
  };
 


  return (
   
<footer className="footer">

    <span className="todo-count">
        <strong>{unCompleted.length} </strong>
        items left
    </span>

    <ul className="filters">
        <li>
            <a onClick={filterHandler} className={select[0]} id = "all">All</a>
        </li>
        <li>
            <a onClick={filterHandler} className={select[1]} id = "active">Active</a>
        </li>
        <li>
            <a onClick={filterHandler} className={select[2]} id = "completed">Completed</a>
        </li>
    </ul>

    <button className={completed == 0 ? "hidden": "clear-completed"} onClick={clearCompleted}>
        Clear completed
    </button>

    <section class="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </section>
</footer>
    
  );
};

export default Footer;