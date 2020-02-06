import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})//Pipe
export class AnimalesPipe implements PipeTransform {
/**
 * 
 * @param animales Array<any> con animales que es en el que iteramos en el html antes de escribir el pipe '|'.
 * @param busqueda palbra  buscar.
 * @param tipoSeleccionado para filtrar por tipo de animal.
 * @see animales.ts json con los datos de las animales.
 */
  transform(animales: any, busqueda: string , tipoSeleccionado: string): any {

    console.debug('AnimalesPipe datos %o', animales);
    console.debug('AnimalesPipe tipo %s', tipoSeleccionado);
    console.debug('AnimalesPipe busqueda %s', busqueda);


    let resultado = animales;

    // filtrar por tipo
    if(tipoSeleccionado && tipoSeleccionado !== "Todos")
    {
        resultado = animales.filter( (el) => {
          console.debug(el);
          const tipo = el.Tipo;
          return tipo.includes(tipoSeleccionado);
        });
    }

    // filtrar por nombre busqueda
    if(busqueda && busqueda !== ''){
        busqueda = busqueda.toUpperCase();

        resultado = resultado.filter( (el) => {
          console.debug(el);
          const nombre = el.Nombre.toUpperCase();
          return nombre.includes(busqueda);
        });
    }//if busqueda

    return resultado;
  }//transform

}//class
