import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonNote,
  IonButton,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonBadge,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonNote,
    IonButton,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonBadge,
  ],
})
export class HomePage {
  constructor() {}

  // INTERPOLACIÓN: Valores que se mostrarán en el template con  {{ }}

  // variables en TS
  titulo: string = 'DI01-TA01 - Segunda Aplicación';
  descripcion: string = 'Aprendiendo Ionic & Angular';

  // PROPERTY BINDING:
  colorBoton: string = 'primary';
  botonDeshabilitado: boolean = false;

  // EVEN BINDING:
  contador: number = 0;
  incrementar(): void {
    this.contador++;
    this.colorBoton = this.contador >= 5 ? 'danger' : 'primary';
  }

  reiniciar(): void {
    this.contador = 0;
    this.colorBoton = 'primary';
  }

  // ION-LIST Y LÓGICA

  alumnos = [
    { nombre: 'Luís Martínez', nota: 9 },
    { nombre: 'Ana García', nota: 7 },
    { nombre: 'María López', nota: 8 },
    { nombre: 'Pedro Sáchez', nota: 5 },
  ];

  colorNota(nota: number): string {
    if (nota >= 9) return 'success';
    if (nota >= 6) return 'warning';
    return 'danger';
  }
}
