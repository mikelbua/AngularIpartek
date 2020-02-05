import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';

/**
 * definir las rutas de la aoo de angulas.
 * e path debe coincider con el [routerlink] del navbar
 * */
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'pokemon', component: PokemonRestComponent },
  { path: 'estilos', component: EstilosComponent },
  { path: 'juego', component: JuegoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
