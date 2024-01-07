import { act } from "react-test-renderer";
import { LoginData } from "../common/interfaces/userInterface";

export interface AuthState {

    status: 'checking' | 'authenticated' | 'not-authenticated';

    errorMessage: string;
    user: LoginData | null;

}


type AuthAction = 
   | { type: 'signIn', payload: { user: LoginData } }
   | { type: 'addError', payload: string }
   | { type: 'removeError' } 
   | { type: 'logOut' } 


   export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

        switch (action.type) {

            case 'addError':
                return{
                    ...state,
                    user: null,
                    status: 'not-authenticated',
                    errorMessage: action.payload
                };
                
            case 'removeError':
                return{
                    ...state,
                    errorMessage: ''
                }

            case 'signIn':
              
                return{
                    ...state,
                    errorMessage:'',
                    status:'authenticated',
                    user: action.payload.user
                }

            case 'logOut':
                return{
                    ...state,
                    status: 'not-authenticated',
                    user: null,
                }
            
            default:
                return state;
        }

   }