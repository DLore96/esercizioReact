import { useState, useEffect } from "react";
import { TodoItem } from "../../../lib/types";
import validationService from "../../../services/validationService";

export function TodoForm({ eventSubmitted }: any) {

    const [todoForm, setTodoForm] = useState<TodoItem>({
        completed: false,
        title: '',
        id: 1
    });
    const [confirm, setConfirm] = useState<boolean>(false);

    useEffect(() => {
        console.log("Verifico stato localstorage");

        const parseItem = localStorage.getItem('todos');
        let currentTodos: TodoItem[] = parseItem ? JSON.parse(parseItem) : null;
        console.log(currentTodos);



    }, [confirm]);


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) { //dobbiamo prevenire il comportamento di default della form, definiamo il tipo
        e.preventDefault(); //gestiamo il comportamento di default
        console.log(todoForm);
        const validated = await validationService.validateTodoFormConObject(todoForm);


        if (!validated) {
            return console.log('failed');

        }
        const parseItem = localStorage.getItem('todos');
        let currentTodos: TodoItem[] = parseItem ? JSON.parse(parseItem) : null;


        if (currentTodos !== null && currentTodos.length > 0) {

            if (currentTodos.findIndex((value) => value.id === todoForm.id) === -1) {
                currentTodos.push(todoForm);
                console.log("Elemento non trovato");
                localStorage.setItem('todos', JSON.stringify(currentTodos));
                setConfirm(true);

            } else {
                console.log('elemento trovato');
            }

        } else {
            currentTodos = [];
            currentTodos.push(todoForm);
            localStorage.setItem('todos', JSON.stringify(currentTodos));
            setConfirm(true);
        }


    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;  //Tipizzando andiamo a recuperare le info del mio input
        if (type === 'checkbox') {
            setTodoForm({ ...todoForm, [name]: checked });
        } else {
            setTodoForm({ ...todoForm, [name]: value })

        }
    }
    /* function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
         const { name, value, type,  } = e.target;  //Tipizzando andiamo a recuperare le info del mio input
         
             setRegisterForm({ ...registerForm, [name]: value });
        
     }*/
    return (
        <>
            <div className="card bg-primary text-primary-content glass">
                <div className="card-body">
                    <h1 className="card-title">Inserimento</h1>
                    <div className="card-actions justify-center">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="id">Id</label>
                                <input type="number" name="id" value={todoForm.id} onChange={handleChange} id="" className="input input-bordered w-full max-w-xs" />

                            </div>
                            <div>
                                <label htmlFor="title">Nome</label>
                                <input type="text" name="title" value={todoForm.title} onChange={handleChange} id="" className="input input-bordered w-full max-w-xs" />

                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="label-text text-yellow-600">Completato?</span>
                                    <input type="checkbox" name="completed" id="completed" checked={todoForm.completed} onChange={handleChange} className="checkbox checkbox-warning" />
                                </label>
                            </div>
                            <div>
                                <button>Registrati</button>
                                <button>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}