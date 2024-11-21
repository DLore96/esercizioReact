import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { IAuthContext, User } from "../../../lib/interfaces";
import { FormUser } from "../../lib2/interfaces";
import userService from "../../services/userService";
import validationEsercitazioneService from "../../services/validationEsercitazioneService";
import toastService from "../../services/toastService";

export function LoginEsercitazione() {

    //const { handleSetAlert} = useContext(AlertContext) as IAlertContext;
    const [user, setUser] = useState<FormUser>({
        email: '',
        firstName: '',
        lastName:'',
        password:''
    });

    async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const validated = await validationEsercitazioneService.validateUserRegisterFormConObject(user);

        if (!validated) {
            toastService.toastError('Errore durante la validazione!');
            return console.log('failed');

        } else {
            userService.registerUser(user);
        }
        
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;  //Tipizzando andiamo a recuperare le info del mio input

        setUser({ ...user, [name]: value })


    }

    const HandleLogin = () => {
        Login();
    }

    async function Login() {
        //e.preventDefault();

        const validated = await validationEsercitazioneService.validateUserLoginFormConObject(user);

        if (!validated) {
            return console.log('failed');

        } else {
            userService.loginUser(user);
            
        }
      };

    return (

        <>
            <div className="flex justify-center">
                <div className="card bg-primary text-primary-content w-96 glass">
                    <div className="card-body">
                        <h1 className="card-title">DATI DI LOGIN</h1>
                        <div className="card-actions justify-center"></div>
                        <form onSubmit={HandleSubmit}>
                            <label className="input input-bordered flex items-center gap-2 bg-warning glass">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    color="currentcolor"
                                    className="h-4 w-4">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input className='input input-bordered w-full max-w-xs' type={'text'} name="email" id={'email'} value={user.email} onChange={handleChange} />
                            </label>
                            <br />
                            <label className="input input-bordered flex items-center gap-2 bg-warning glass">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input className='input input-bordered w-full max-w-xs' type={'text'} name="firstName" id={'firstname'} value={user.firstName} onChange={handleChange} />
                            </label>
                            <br />
                            <label className="input input-bordered flex items-center gap-2 bg-warning glass">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input className='input input-bordered w-full max-w-xs' type={'text'} name="lastName" id={'lastName'} value={user.lastName} onChange={handleChange} />
                            </label>
                            <br />
                            <label className="input input-bordered flex items-center gap-2 bg-warning glass">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="password" className="grow" value={user.password} name="password" id={'password'} onChange={handleChange}/>
                            </label>
                            <br />
                            <div className="card-actions justify-end">
                                <button className="btn ">Registrati</button>
                                
                            </div>
                        </form>
                        <button  type='button' className="btn " onClick={HandleLogin}>Accedi</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}