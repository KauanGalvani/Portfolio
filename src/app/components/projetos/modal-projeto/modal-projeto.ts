import { Component, input } from '@angular/core';
import { Projetos } from '../projetos';

interface ProjetoSelecionado {
  titulo: string;
  urlImagem: string;
}

@Component({
  imports: [],
  selector: 'app-modal-projeto',
  templateUrl: './modal-projeto.html',
})
export class ModalProjeto {
  public readonly projeto = input<ProjetoSelecionado | undefined>();
}
