import { Proveedor } from "../../common/interfaces/prov/provider";


export const proveedores: Proveedor[] = [
    {
      id: '1',
      nombre: 'Proveedor A',
      categorias: [
        {
          id:"1",
          nombre: 'Bebidas Alcohólicas',
          articulos: [
            {
              id: 'a1',
              nombre: 'Vino Tinto',
              tipo: 'bebida_alcoholica',
              categoria: 'Vinos',
            },
            {
              id: 'a3',
              nombre: 'Vino Blanco',
              tipo: 'bebida_alcoholica',
              categoria: 'Vinos',
            },
            {
              id: 'a5',
              nombre: 'Champagne',
              tipo: 'bebida_alcoholica',
              categoria: 'Espumosos',
            },
            {
              id: 'a7',
              nombre: 'Cerveza Lager',
              tipo: 'bebida_alcoholica',
              categoria: 'Cervezas',
            },
            {
              id: 'a9',
              nombre: 'Cerveza Stout',
              tipo: 'bebida_alcoholica',
              categoria: 'Cervezas',
            },
          ],
        },
        {
          id:"1",
          nombre: 'Refrescos',
          articulos: [
            {id: 'a2', nombre: 'Coca Cola', tipo: 'refresco', categoria: 'Colas'},
            {id: 'a4', nombre: 'Pepsi', tipo: 'refresco', categoria: 'Colas'},
            {id: 'a6', nombre: '7 Up', tipo: 'refresco', categoria: 'Limonadas'},
            {
              id: 'a8',
              nombre: 'Fanta Naranja',
              tipo: 'refresco',
              categoria: 'Naranjadas',
            },
            {
              id: 'a10',
              nombre: 'Sprite Zero',
              tipo: 'refresco',
              categoria: 'Limonadas',
            },
          ],
        },
        // Más categorías si son necesarias...
      ],
    },
    {
      id: '2',
      nombre: 'Proveedor B',
      categorias: [
        {
  
          id:"445",
          nombre: 'Destilados',
          articulos: [
            {
              id: 'b1',
              nombre: 'Whisky Escocés',
              tipo: 'bebida_alcoholica',
              categoria: 'Whiskys',
            },
            {
              id: 'b3',
              nombre: 'Ginebra',
              tipo: 'bebida_alcoholica',
              categoria: 'Ginebras',
            },
            {
              id: 'b5',
              nombre: 'Ron Caribeño',
              tipo: 'bebida_alcoholica',
              categoria: 'Rones',
            },
            {
              id: 'b7',
              nombre: 'Vodka Ruso',
              tipo: 'bebida_alcoholica',
              categoria: 'Vodkas',
            },
            {
              id: 'b9',
              nombre: 'Tequila',
              tipo: 'bebida_alcoholica',
              categoria: 'Tequilas',
            },
          ],
        },
        {
  
          id:"17",
          nombre: 'Energizantes y Aguas',
          articulos: [
            {
              id: 'b2',
              nombre: 'Mountain Dew',
              tipo: 'refresco',
              categoria: 'Energizantes',
            },
            {id: 'b4', nombre: 'Dr Pepper', tipo: 'refresco', categoria: 'Sodas'},
            {
              id: 'b6',
              nombre: 'Tonic Water',
              tipo: 'refresco',
              categoria: 'Aguas Tónicas',
            },
            {
              id: 'b8',
              nombre: 'Red Bull',
              tipo: 'refresco',
              categoria: 'Energizantes',
            },
            {
              id: 'b10',
              nombre: 'Monster Energy',
              tipo: 'refresco',
              categoria: 'Energizantes',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      nombre: 'Proveedor C',
      categorias: [
        {
          id:"15",
          nombre: 'Importados',
          articulos: [
            {
              id: 'c1',
              nombre: 'Sake Japonés',
              tipo: 'bebida_alcoholica',
              categoria: 'Sakes',
            },
            {
              id: 'c3',
              nombre: 'Cava Español',
              tipo: 'bebida_alcoholica',
              categoria: 'Cavas',
            },
            {
              id: 'c5',
              nombre: 'Brandy',
              tipo: 'bebida_alcoholica',
              categoria: 'Brandys',
            },
            {
              id: 'c7',
              nombre: 'Mezcal',
              tipo: 'bebida_alcoholica',
              categoria: 'Mezcales',
            },
            {
              id: 'c9',
              nombre: 'Cóctel Mojito',
              tipo: 'bebida_alcoholica',
              categoria: 'Cócteles',
            },
          ],
        },
        {
  
          id:"1545",
          nombre: 'Sin Alcohol',
          articulos: [
            {
              id: 'c2',
              nombre: 'Agua Mineral',
              tipo: 'refresco',
              categoria: 'Aguas',
            },
            {
              id: 'c4',
              nombre: 'Limonada',
              tipo: 'refresco',
              categoria: 'Limonadas',
            },
            {
              id: 'c6',
              nombre: 'Iced Tea',
              tipo: 'refresco',
              categoria: 'Tés Helados',
            },
            {
              id: 'c8',
              nombre: 'Ginger Ale',
              tipo: 'refresco',
              categoria: 'Gaseosas',
            },
            {
              id: 'c10',
              nombre: 'Gatorade',
              tipo: 'refresco',
              categoria: 'Bebidas Deportivas',
            },
          ],
        },
      ],
    },
    // Más proveedores si son necesarios...
  ];