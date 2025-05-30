import { Component, inject } from '@angular/core';
import { TarefaService } from '../../service/tarefa.services';
import { Tarefa } from '../../interfaces/tarefas';

@Component({
  selector: 'app-tarefas',
  imports: [],
  standalone: true, 
  templateUrl: './tarefas.component.html',
  styleUrl: '../tarefas/tarefas.component.scss'
})
export class TarefasComponent {
  private tarefaServico = inject(TarefaService);
  listaTarefas: Tarefa[] = [];
  ngOnInit(){
    this.listaTarefas = this.tarefaServico.getTarefas();
  }
  toggleConcluido(tarefa:Tarefa){
    tarefa.concluido = !tarefa.concluido
  }

}
