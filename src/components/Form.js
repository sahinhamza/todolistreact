import { useState} from "react";

function Form({todos, setTodos}) {
    const [form, setForm] = useState("");

    const onChangeInput = (e) => {
        setForm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(form === ''){
          return false;
        };

        setTodos([...todos, 
            {text: form, 
            done: false, 
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0}
        ]);

        setForm("");
      };
    return(
        <div className="header">
		    <h1>todos</h1>
		    <form onSubmit={onSubmit} >
			    <input 
                value={form}
                className="new-todo" 
                placeholder="What needs to be done?" 
                onChange={onChangeInput}
                autoFocus/>
		    </form>
	    </div>
    );
};

export default Form;