export interface Articulo {
    id: string;
    nombre: string;
    tipo: 'bebida_alcoholica' | 'refresco' | 'otro';
    categoria: string;
  }