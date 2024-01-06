
export interface LoginData{
    email: string;
    password: string;
 }

 export interface RegisterData{
    email: string;
    password: string;
    name: string;
 }


export interface LoginResponse {
    userId:      number;
    name:        string;
    surname:     string;
    email:       string;
    password:    string;
    phoneNumber: string;
}
