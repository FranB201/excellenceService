import React, { createContext, useReducer } from "react";
import { LoginData, LoginResponse, RegisterData } from '../common/interfaces/userInterface';
import { AuthState, authReducer } from "./AuthReducer";
import restApiNetwork from "../common/network/rest_api.network";


type AuthContextProps = {

    errorMessage: string;
    user: LoginData | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const AuthInitialState: AuthState = {

    status:'checking',
    user: null,
    errorMessage: ''

}

export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children } : any) => {

    const [ state, dispatch ] = useReducer(authReducer, AuthInitialState);
    
    const signIn = async ({ email, password }: LoginData) => {
        try {
            console.log('entro')
          // Aquí puedes validar el usuario y la contraseña en lugar de realizar una solicitud a la base de datos
          if (email === 'admin' && password === '1234') {
            // Usuario válido
            const { data = { email: 'admin', password: '1234' } } = {};

            dispatch({
                type:'signIn',
                payload: {
                    user: data,
                }
            });

          } else {
            // Usuario o contraseña incorrectos
            dispatch({
              type: 'addError',
              payload: 'Usuario o contraseña incorrectos',
            });
          }
        } catch (error) {
          console.log('Mensaje de error:', error);
          dispatch({
            type: 'addError',
            payload: 'Error al iniciar sesión',
          });
        }
      };

    const logOut = () => {
        dispatch({ type: 'logOut' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return(
        <AuthContext.Provider value={{

            ...state,
            signIn,
            logOut,
            removeError,

        }}>
            { children }
        </AuthContext.Provider>
    )

}
