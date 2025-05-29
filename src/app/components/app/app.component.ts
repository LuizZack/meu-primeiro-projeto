import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from "../perfil/perfil.component";
import {ProdutosComponent} from '../produtos/produtos.component';
@Component({
  selector: 'app-root',
  imports: [ProdutosComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
