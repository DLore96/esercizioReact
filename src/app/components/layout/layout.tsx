import { useOutlet } from "react-router-dom";
import { Header } from "./header/header";

export function Layout() {

    const outlet = useOutlet(); //tutte lepagine vengono messe qui
    return (
        <>
            <Header/>
            <br/>
            <main>
                {outlet}
            </main>
        </>
    );
}