import { Component } from '@angular/core';

interface Habilidade {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-habilidades',
  imports: [], //todas as dependencias
  templateUrl: './habilidades.html', //html relacionado ao elemento
})
export class Habilidades {
  public itens: Habilidade[] = [{ imagem: '#', titulo: '#', descricao: '#' }];
}
