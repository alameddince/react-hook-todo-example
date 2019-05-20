import React,{useState} from 'react';
import './App.css';


function TodoForm({addTodo}){
    const [value, setValue]=useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={ e => setValue(e.target.value)}/>
        </form>
    )
}

function App() {
    const [todos, setTodos]=useState([
        {
            text: "Ornek 1",
            isCompleted: false
        },
        {
            text: "Ornek 12",
            isCompleted: false
        },
        {
            text: "Ornek 13",
            isCompleted: false
        }
    ]);
    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }

    const Todo = ({todo,index,completedTodo}) => (
        <div className="todo">{todo.text} <button onClick={()=>todo.isCompleted?removeTodo(index):completeTodo(index)}>{todo.isCompleted?"Finished":"Complete"}</button></div>
    );
    return ( <div className="app">
        <div className="todo-list">
            {todos.map((todo,index)=>(
                <Todo key={index} index={index} completedTodo={completeTodo} todo={todo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    </div> )
}

export default App;
