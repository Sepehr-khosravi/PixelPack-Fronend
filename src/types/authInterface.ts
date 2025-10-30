//user Interface
import type {UserInterface} from "./userInterface.ts";

export interface AuthInterface{
    user : UserInterface | null;
    loading : boolean;
    login : (token : string, user : UserInterface) => void;
    logout : () => void;
    isAuthenticated: boolean;
}