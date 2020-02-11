import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruenbaComponent } from './componentes/pruenba/pruenba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { SubrayarDirective } from './directives/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { RecetaFiltroPipePipe } from './pipes/receta-filtro-pipe.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { HelloDirective } from './directives/HelloDirective';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginComponent } from './paginas/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PruenbaComponent,
    BotonComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    PokemonRestComponent,
    EstilosComponent,
    JuegoComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    RecetasComponent,
    RecetaFiltroPipePipe,
    Error404Component,
    SaludarComponent,
    ComparadorComponent,
    TareasComponent,
    PrivadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//modulo para llamadas por HTTP
    FormsModule,//banaa in a box
    ReactiveFormsModule//para formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
