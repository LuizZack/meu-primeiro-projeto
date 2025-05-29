import { Injectable } from '@angular/core';
import {Produto} from '../interfaces/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

getProdutos(): Produto [] {
  return [
    {nome: 'notebook', promocao: true},
    {nome: 'Mouse', promocao: false},
    {nome: 'Pc gamer ', promocao: false},
    {nome: 'mouse sem fio ', promocao: false},
    {nome: 'mouse sem fio ', promocao: false},
  ]
    }
  
}
