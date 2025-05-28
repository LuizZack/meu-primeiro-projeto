import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from "./perfil/perfil.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PerfilComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
