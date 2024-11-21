import { CircleAlert, CircleCheckBig } from "lucide-react";
import { NavLink } from "react-router-dom";
import { TodoItem } from "../../../lib/types";
import { useContext } from "react";
import { IAuthContext } from "../../../lib/interfaces";
import { AuthContext } from "../../../context/authContext";

export function TodoElement({ id, completed, title, completeEventButton, deleteEventButton }: TodoItem) {

    const { user } = useContext(AuthContext) as IAuthContext;

    const handleCompleteButton = (id: number) => {
        console.log(user);
        
        if (user.firstName === 'Lorenzo') {
            completeEventButton(id);
        } else {
            console.log('NON SEI AUTORIZZATO');

        }
    }

    const handleDeleteButton = (id: number) => {
        if (user.firstName === 'Lorenzo') {
            deleteEventButton(id);
        } else {
            console.log('NON SEI AUTORIZZATO');

        }
    }

    return (
        <>
            <div className="card bg-primary text-primary-content w-96 shadow-xl">
                <figure>
                    {id === 2
                        ? completed ? <img src='src/assets/duck-bg.jpg' alt="Logo" className="card-img-top"></img>
                            : <img src='src/assets/imageNotFound.jpg' alt="Logo" className="card-img-top"></img>
                        : <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />}

                </figure>
                <div className="card-body">

                    <h2 className="card-title">{completed ? <CircleCheckBig color="#fcd703 " /> : <CircleAlert color="#e91636" />}  {title} - {completed ? 'COMPLETATO' : 'IN CORSO'}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={() => handleCompleteButton(id)}>{completed ? 'Riapri' : 'Completa'}</button>
                        <button className="btn" onClick={() => handleDeleteButton(id)}>Cancella</button>
                        <NavLink className="btn" to={`/list/dettaglio/${id}`}>Dettaglio</NavLink>
                    </div>
                </div>
            </div>
        </>
    );

}