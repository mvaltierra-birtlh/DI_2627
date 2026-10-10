import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Elemento } from '../models/elemento.model';
import { ElementosService } from '../services/elementos.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonList, IonLabel, IonFooter, ToastController, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonList, IonLabel, IonButton, IonFooter, FormsModule],
})


export class HomePage implements OnInit {

  // TA02 TODO Modificar el constructor para inyectar Router y ToastController con inject
  
  private toastController = inject(ToastController);
  private router = inject(Router);
  private elementosService = inject(ElementosService);
  
  constructor(){}

  // TA02 Variable enlazada al campo de búsqueda (ion-input)
  busqueda: string = '';


  // TA02 Array al menos 5 elementos para la  

  elementos: Elemento[] = [];
  
  /*elementos: Elemento[] = [
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
  ];*/


  // TA02  Devuelve true si hay elementos en la lista
    get hayElementos(): boolean {
      return this.elementos.length > 0;
    }
  

  // TA02 Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    if(!this.busqueda.trim()) {
      return this.elementos;
    }
    return this.elementos.filter(elemento =>
      elemento.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }


  //TA02  Muestra un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
  
    const toast = await this.toastController.create({
      message: 'Lista de peliculas cargada correctamente',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();    
  }


  // TA03 -> TODO Detalle (Apartado 2 – Navegación) : 
  // Desarrollar el método verDetalle que recibirá un Elemento como parámetro
  // Navegar a /detalle con el elemento seleccionado
 
  verDetalle(elemento: Elemento):void {
    this.router.navigate(['/detalle', elemento.id]);
  }

  // Para obtener los elementos del objeto declarados ahora en la carpeta services
  ngOnInit():void {
    this.elementos = this.elementosService.getElements();
  }
  
}
