import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoItem } from "../../../lib/types";

export function TodDoDetail() {

    const { id } = useParams();
    const [toDo, setTodo] = useState<TodoItem>();

    useEffect(() => {

        const parseItem = localStorage.getItem('todos');
        let currentTodos: TodoItem[] = parseItem ? JSON.parse(parseItem) : null;
        const indexedEl = currentTodos.findIndex(el => el.id === Number(id));
        setTodo(currentTodos[indexedEl]);

        fetch('test')
            .then((res => {
                console.log('ok');

            }))
    }, [])

    return (
        <>
            <div className="justify-center">
                <div className="card bg-success text-primary-content w-96">
                    <div className="card-body">
                    <h2 className="card-title">{toDo?.title}</h2>
                        <div className="card"><p>Some text of example</p></div>
                        <div className="divider lg:divider-vertical">Completato?</div>
                        <div className="place-items-center">{toDo?.completed ? 'SI' : 'NO'}</div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}