import { useOutlet } from "react-router-dom";
import { Header } from "./header/header";
import { ToastContainer } from "react-toastify";


export function LayoutEsercitazione() {

    const outlet = useOutlet(); //tutte lepagine vengono messe qui
    return (
        <>
            <Header/>
            <br/>
            <main>
                {outlet}
            </main>
            <ToastContainer />
        </>
    );
}