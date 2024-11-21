import { EAlertType } from "../app2/lib2/utilityInterfaces"

export interface User {
    firstName: string,
    lastName: string,
    email: string 
    role: string
}

export interface IAuthContext {
    user: User,
    handleSetUser: any
}

export interface Alert {
    type: EAlertType,
    msg: string
}

export interface IAlertContext {
    alert: Alert,
    handleSetAlert: any
}