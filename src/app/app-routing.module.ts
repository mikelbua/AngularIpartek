import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';

/**
 * definir las rutas de la aoo de angulas.
 * e path debe coincider con el [routerlink] del navbar
 * */
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ArraysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
