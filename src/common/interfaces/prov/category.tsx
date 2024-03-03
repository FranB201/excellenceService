import { Articulo } from "./item";

export interface Categoria {
    nombre: string;
    articulos: Articulo[];
    id:string;
  }