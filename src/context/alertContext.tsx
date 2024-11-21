import { createContext } from "react";
import { IAlertContext } from "../lib/interfaces";

export const AlertContext = createContext<IAlertContext | null>(null);