import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaFiltroPipe'
})
export class RecetaFiltroPipePipe implements PipeTransform {

  transform(recetas: Array<any>, checkGluten: boolean, busqueda : string): any {

    console.debug(checkGluten);
    console.debug(busqueda);

    let resultado = recetas;

    if(checkGluten){
      
      resultado = resultado.filter(el => el.isGlutenFree);
    }
    //filtrp por nombre de reces,de cociner, o ingrediente
    if(busqueda && busqueda !== ''){

      busqueda = busqueda.toLocaleLowerCase();
      resultado = resultado.filter((el) => {

      const ingredientes = el.ingredientes.reduce((c,p) => c + p , '');
      const encontrar = (el.nombre + el.cocinero + ingredientes).toLocaleLowerCase();
      console.debug('encontrar : ' + encontrar);
      return encontrar.includes(busqueda);
    
    });

    }//ifBusqueda



    return resultado;
  }//transform

}
