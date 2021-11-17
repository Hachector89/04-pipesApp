import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayus: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Warmachine',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Mr.Fantastico',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Dr.Strange',
      vuela: true,
      color: Color.azul
    }
  ]
 
  cambiarMayus(){

        this.enMayus = !this.enMayus;
  }

  cambiarOrden ( valor: string ){

    this.ordenarPor = valor;

  }



}
