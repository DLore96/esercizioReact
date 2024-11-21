import { useState } from "react";
import { Alert } from "../lib/interfaces";
import { EAlertType } from "../app2/lib2/utilityInterfaces";
import { AlertContext } from "./alertContext";

export function AlertContextProvider({children}: {children: React.ReactNode}) {

    const [alert, setAlert] = useState<Alert>(
        {
            type: EAlertType.INFO,
            msg:''
        }
    );

    function handleSetAlert(data: Alert) {
        setAlert(data);
    }

    return (
        <AlertContext.Provider value={{alert, handleSetAlert}}>
            {children}
        </AlertContext.Provider>
    );
}