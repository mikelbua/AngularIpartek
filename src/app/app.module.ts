import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruenbaComponent } from './componentes/pruenba/pruenba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    PruenbaComponent,
    BotonComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    PokemonRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
