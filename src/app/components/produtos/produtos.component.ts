import { Component, inject } from '@angular/core';
import {ProdutoService} from '../../services/produto.service';
import {Produto} from '../../interfaces/produto'; 

@Component({
  selector: 'app-produtos',
  imports: [],
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  private produtoService = inject(ProdutoService);
  listaProduto:Produto[] = [];  
}
