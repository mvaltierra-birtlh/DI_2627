/*
-- Esto es con lo que se crea el fichero --
import { Service } from '@angular/core';
@Service()
export class Elementos {
}
*/

/* Este fichero es un servicio que será compartido a toda la aplicación 
*  En este caso el objeto Elemento de la lista que se muestra al pintarla en la *  web.
*/

import { Injectable } from '@angular/core';
import { Elemento } from '../models/elemento.model';

@Injectable({
  providedIn: 'root'
})

export class ElementosService {


    // Objeto común de datos a toda la aplicación
    elementos: Elemento[] = [
    {
      id: 1,
      nombre: 'Interstellar',
      descripcion: 'Una misión espacial para encontrar un nuevo hogar para la humanidad',
      categoria: 'Ciencia ficción'
    },
    {
      id: 2,
      nombre: 'El Señor de los Anillos',
      descripcion: 'Una aventura épica para destruir un poderoso anillo',
      categoria: 'Fantasía'
    },
    {
      id: 3,
      nombre: 'Matrix',
      descripcion: 'Un hacker descubre que la realidad no es lo que parece',
      categoria: 'Ciencia ficción'
    },
    {
      id: 4,
      nombre: 'Toy Story',
      descripcion: 'Los juguetes cobran vida cuando los humanos no están presentes',
      categoria: 'Animación'
    },
    {
      id: 5,
      nombre: 'Gladiator',
      descripcion: 'Un general romano busca vengarse después de ser traicionado',
      categoria: 'Acción'
    }
  ];

  // Mostrará-Buscará todos los elementos del objeto
  getElements(): Elemento[] {
    return this.elementos;
  }

  // Mostrará-Buscará el elemento correspondiente por id
  getElementById(id: number): Elemento | undefined {
    return this.elementos.find(elemento => elemento.id === id);
  } 
}
