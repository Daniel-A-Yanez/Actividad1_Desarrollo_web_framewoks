import { Component } from '@angular/core';
import { SaludoComponent } from './saludo/saludo.component';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from "./hero/hero.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SaludoComponent, CommonModule, AccordionComponent, TarjetaComponent, FormularioComponent, FooterComponent, HeaderComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Actividad1';
}