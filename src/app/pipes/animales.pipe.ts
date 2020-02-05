import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})//Pipe
export class AnimalesPipe implements PipeTransform {

  transform(datos: any, busqueda: string ): any {

    console.debug(datos);
    console.debug(busqueda);

    busqueda = busqueda.toUpperCase();

    const resultado = datos.filter( (el) => {
       console.debug(el);
       const nombre = el.Nombre.toUpperCase();
       return nombre.includes(busqueda);
    });

    return resultado;
  }//transform

}//class
