import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Elemento } from '../models/elemento.model';
import { ElementosService } from '../services/elementos.service';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  } from '@ionic/angular';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  imports: [IonHeader, IonToolbar, IonBackButton, IonButtons,  IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})

export class DetalleComponent  implements OnInit {

  // Propiedades que utilizan inyección de dependencias angularjs
  private route = inject(ActivatedRoute);
  private elementosService = inject(ElementosService);

  /*
   * Elemento describe cómo es una película; elemento es la propiedad donde  * * guardaremos la película concreta que el usuario ha seleccionado; y ? * * * * indica que esa propiedad puede estar sin valor mientras esperamos * * * * * obtenerla.
   */
  elemento?: Elemento;

  // Constructor
  constructor() { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.elemento = this.elementosService.getElementById(id);
  }

}
