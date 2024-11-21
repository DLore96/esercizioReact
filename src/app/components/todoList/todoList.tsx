import { useEffect, useState } from "react";
import { CustomButtonProps, TodoItem } from "../../../lib/types";
import { TodoElement } from "../todoElement/todoElement";
import { Menu } from "../menu/menu";
import { Cronomentro } from "../cronomentro/cronometro";
import { TodoForm } from "../todoForm/todoForm";
import { useNavigate } from "react-router-dom";


export function TodoList() {

    const [toDoList, setTodoList] = useState<TodoItem[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    const navigate = useNavigate();


    useEffect(() => {
        //localStorage.clear();
        const todoLocalStorage = localStorage.getItem('todos') || null; //in assenza di backend lo usiamo come db
        const todos: TodoItem[] = todoLocalStorage !== null ? JSON.parse(todoLocalStorage) : [];
        todos.forEach(value => console.log(value));
        if (todos.length > 0) {
            setTodoList(todos)
        } else {
            setTodoList([]);
        }

        return () => { //altra forma, che scatta quando viene smontato il component
            console.log('Mo lo smonto:');

        }
    }, [reload])

    const handleRemove = (id: number | undefined) => {
        console.log("stai cancellando uno degli elementi:");
        console.log(id);
        const newTodos: TodoItem[] = toDoList.filter(value => value.id !== id);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setTodoList(newTodos);
    }

    const handleReload = () => {
        console.log("stai per refreshare");
        localStorage.removeItem('todos');
        setReload(!reload);
    }

    const navigateToInserimento = () => {
        navigate('/nuovo');
    }

    const eventButtonToParent = (id: number | undefined) => {
        console.log("stai modificando uno degli elementi:");
        console.log(id);

        const currentTodoIndex = toDoList.findIndex((todo) => todo.id === id);
        const updatedTodo: TodoItem = { ...toDoList[currentTodoIndex], completed: !toDoList[currentTodoIndex].completed };
        const newTodos = [...toDoList];
        newTodos[currentTodoIndex] = updatedTodo;
        setTodoList(newTodos);
    }

    return (
        <>
            <div className="w-2/3">
                <Menu eventReload={handleReload} eventNew={navigateToInserimento}></Menu>
            </div>
            <br />
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {toDoList.map((value) =>
                    <>
                        <TodoElement completeEventButton={eventButtonToParent} deleteEventButton={handleRemove} id={value.id} completed={value.completed} title={value.title} key={value.id}></TodoElement>
                    </>

                )}
            </div>
        </>

    );
}