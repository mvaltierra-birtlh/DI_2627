import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Elemento } from '../models/elemento.model';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonList, IonLabel, IonFooter, ToastController, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonList, IonLabel, IonButton, IonFooter, FormsModule],
})


export class HomePage {

  // TODO Modificar el constructor para inyectar Router y ToastController con inject
  constructor(
    private router: Router, 
    private toastController: ToastController){}
  

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
  // Puedes cambiar los campos según tu dominio (películas, libros, países, etc.)
  elementos: Elemento[] = [
    // Ejemplo:
    // { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción breve', categoria: 'Cat A' },
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

  // TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
   /* get hayElementos(): boolean {
      return this.elementos;
      //return false; //Modificar
    } */

    get hayElementos(): boolean {
      return this.elementos.length > 0;
    }
  

  // TODO (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  /*get elementosFiltrados(): Elemento[] {
    // Implementa el filtro (this.elementos.filter): devuelve solo los elementos cuyo nombre
    // incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas -> .toLowerCase())
    return this.elementos;
  }*/

  get elementosFiltrados(): Elemento[] {
    return this.elementos.filter(
      elemento =>
      elemento.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }


  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consulta la teoría: apartado "ion-toast vs ion-alert"
    const toast = await this.toastController.create({
      message: 'Lista de peliculas cargada correctamente',
      duration: 2000,
      position: 'bottom'
    });

  await toast.present();    
  }
  
}
