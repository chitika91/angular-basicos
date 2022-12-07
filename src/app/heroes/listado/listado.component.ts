import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];
  heroeBorrado: string = '';

  borrarHeroe ()
  {
    this.heroeBorrado =this.heroes.shift() || ''; //shift() es un método propio de los arreglos el cual elimina el primer elemento de un arreglo
  }
  
}
