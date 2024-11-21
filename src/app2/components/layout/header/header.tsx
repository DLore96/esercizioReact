import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext";
import { IAuthContext } from "../../../../lib/interfaces";

export function Header() {

    const { user, handleSetUser } = useContext(AuthContext) as IAuthContext;

    return (
        <header>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <NavLink className="btn btn-ghost text-3xl" to='/'><h1>TodoListUI</h1></NavLink>
                        <ul
                            tabIndex={0}
                            className="menu menu-horizontal px-1">
                            <li><NavLink className="btn btn-ghost text-xl" to='/nuovo'>Inserisci</NavLink></li>
                            <li><NavLink className="btn btn-ghost text-xl" to='/list'>Elenco</NavLink></li>
                            <li><NavLink className="btn btn-ghost text-xl" to='/timer'>Cronometro</NavLink></li>
                            <li><NavLink className="btn btn-ghost text-xl" to={`/login`}>Log-in</NavLink></li>
                            <h1>{user.firstName} - {user.lastName} </h1>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-20 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src='src/assets/duck-bg.jpg' />
                        </div>
                    </div>
                    <ul 
                        tabIndex={0}
                        className="menu menu-vertical bg-primary dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            Utente: <b>{user.firstName} - {user.lastName}</b>
                        </li>
                        <li>
                        Email:<b>{user.email}</b> 
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </header>
    );
}