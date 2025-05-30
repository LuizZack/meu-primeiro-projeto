import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone:true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.scss'
})
export class NomeComponenteComponent {
  nome:string = "Luiz Zack ";
  profissao:string = "Engenheiro de Software e Desenvolvedor WEB";
  hobbies:string [] = ["Jogar, Academia, Tecnologia, Lutar."]


}
