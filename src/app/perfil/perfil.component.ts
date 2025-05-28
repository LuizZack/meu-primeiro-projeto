import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  nome  = '';
  perfil = {
    username: "LuizZack",
    nome: "Luiz Zack Ferreira melo",
    local: "Manaus",
    idade: 19,
    profissao: "Desenvolvedor Web",
    empresa: "FpfTech",
    publicacoes: 105,
    seguidores: 1133,
    seguindo: 150,
  foto: 'https://img.freepik.com/vetores-premium/projeto-de-ilustracao-vetorial-face-avater-de-jovem_968209-13.jpg'
  };
}