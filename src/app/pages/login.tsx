import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { IAuthContext, User } from "../../lib/interfaces";
import validationService from "../../services/validationService";

export function Login() {

    const { handleSetUser } = useContext(AuthContext) as IAuthContext;
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    });

    async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const validated = await validationService.validateUserLoginFormConObject(user);

        if (!validated) {
            return console.log('failed');

        }
        handleSetUser(user);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;  //Tipizzando andiamo a recuperare le info del mio input

        setUser({ ...user, [name]: value })


    }

    return (
        <>
            <div className="card bg-primary text-primary-content glass">
                <div className="card-body">
                    <h1 className="card-title">Inserimento</h1>
                    <div className="card-actions justify-center"></div>
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <label htmlFor="firstName">Nome</label>
                            <input className='input input-bordered w-full max-w-xs text-white' type={'text'} name="firstName" id={'firstname'} value={user.firstName} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="lastName">Cognome</label>
                            <input className='input input-bordered w-full max-w-xs text-white' type={'text'} name="lastName" id={'lastName'} value={user.lastName} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input  className='input input-bordered w-full max-w-xs text-white' type={'text'} name="email" id={'email'} value={user.email} onChange={handleChange} />

                        </div>

                        <button>Registrati</button>
                    </form>
                </div>
            </div>
        </>
    );
}