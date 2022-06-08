
function Todo({todos, setTodos, hide}) {
    const isCompleted = (e) => setTodos(todos.map((item) => 
    item.id == e.target.id ? {...item, done:!item.done}: item));

    const deleteItem= (e) => setTodos(todos.filter(item => item.id != e.target.id));

	const isDone = (e) => {
		if (e.done === true && hide === "All") {
		  return "completed";
		} else if (e.done === true && hide === "Active") {
		  return "completed hidden";
		} else if (e.done === false && hide === "Completed") {
		  return "hidden";
		}
	  };
    
    return(
        <div className="main">
		    <input className="toggle-all" type="checkbox"/>
		    <label htmlFor="toggle-all">
			    Mark all as complete
		    </label>

		    <ul className="todo-list">
                {todos.map((item) => (
                <li key={item.id} className={`${isDone(item)}`}>
				    <div className="view">
					    <input className="toggle" type="checkbox"  onClick={isCompleted} id={item.id}/>
					    <label>{item.text}</label>
					    <button className="destroy" id={item.id} onClick={deleteItem}></button>
				    </div>
			    </li> ))}
			    
            </ul>
	    </div>
    );

};

export default Todo;