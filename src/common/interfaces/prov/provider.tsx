import { Categoria } from "./Category";

export interface Proveedor {
    id: string;
    nombre: string;
    categorias: Categoria[];
  }