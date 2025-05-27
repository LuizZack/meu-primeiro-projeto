import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone:true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.scss'
})
export class NomeComponenteComponent {
  nome:string = "Rosivaldo da Fonseca";
  profissao:string = "Desenvolvedor WEB";
  hobbies:string [] = ["Leitura,'Passear', 'Tecnologia', 'Jogar Bola"]


}
