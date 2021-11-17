import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Laura';
  genero: string = 'femenino';

  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i10nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan','Hernandez', 'Fernandez'];

  clientesObj = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {

    if( this.nombre === 'Laura') {
      this.nombre = 'Héctor';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Laura';
      this.genero = 'femenino';
    }

  }

  borrarCliente() {

    if(this.clientes.length >= 1) {
      
      this.clientes.pop();

    }
   
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Héctor',
    edad: 31,
    direccion: 'Murcia, España'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Flash',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000); // 0, 1, 2, 3...

  valorPromesa = new Promise( (resolve) => {

    setTimeout(() => {
      resolve('Devuelve promesa');
    }, 3500);

  });



}
