import { createContext } from "react"; // contenitore per il context
import { IAuthContext, User } from "../lib/interfaces";

export const AuthContext = createContext<IAuthContext | null>(null);