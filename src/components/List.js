import Todo from "./Todo";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function List() {
    const [todos, setTodos] = useState(
        [{text: "Learn JavaScript", done: false, id:1},
        {text: "Learn React", done: false, id:2},
        {text: "Have a Life", done: false, id:3}
    ]);    

    const [hide, setHide] = useState("All");

    return(
        <div className="todoapp">
            <Form todos={todos} setTodos={setTodos}/>
            <Todo todos={todos} setTodos={setTodos} hide={hide}/>
            <Footer todos={todos} setTodos={setTodos} setHide={setHide}/>
        </div>
    );  
};

export default List;