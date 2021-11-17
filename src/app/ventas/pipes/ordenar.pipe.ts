import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

  //Explicacion: compara con la funcion flecha recibiendo el
  //primer y el segundo parametro, y devuelve positivo si es mayor
  //y negativo si es menor, ordenando así el array.

    switch (ordenarPor) {
      case 'nombre':
        return heroes.sort( (a,b) => (a.nombre > b.nombre ) ? 1 : -1 );
      case 'vuela':
        return heroes.sort( (a,b) => (a.vuela > b.vuela ) ? -1 : 1 );
      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color ) ? 1 : -1 );
      default:
        return heroes;
    }
  }

}
