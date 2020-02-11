import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './paginas/login/login.component';
/**
 * definir las rutas de la aoo de angulas.
 * e path debe coincider con el [routerlink] del navbar
 * */
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'pokemon', component: PokemonRestComponent },
  { path: 'estilos', component: EstilosComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'filtros', component: FiltrosComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'tareas', component: TareasComponent },
  //Vamos a proteger esta RUTA con una guarda(GUARD)
  { path: 'privado', component: PrivadoComponent , canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent },
  //los  dos puntos (:) :pNombre sirven para indicar que espera un parametro
  { path: 'saludar/:pNombre', component: SaludarComponent },
  { path: '**', component: Error404Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
