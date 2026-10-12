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
  public readonly itens: Habilidade[] = [
    {
      imagem: 'https://skillicons.dev/icons?i=cs',
      titulo: 'C#',
      descricao: 'Desenvolvimento de aplicações e soluções orientada a objetos.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=html',
      titulo: 'HTML',
      descricao: 'Estruturação semântica e acessível de páginas e aplicações Web.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=scss',
      titulo: 'SCSS',
      descricao: 'Criação de estilos organizados, reutilizávies e responsivos.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=typescript',
      titulo: 'TypeScript',
      descricao: 'Desenvolvimento de código JavaScript tipado e mais facil de manter.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=angular',
      titulo: 'Angular',
      descricao: 'Construção de aplicações web escaláveis com componentes e TypeScript.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=rxjs',
      titulo: 'RxJS',
      descricao: 'Composioção e gerenciamento de fluxos assíncronos e eventos.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=git',
      titulo: 'Git',
      descricao: 'Versionamento de código e colaboração em projetos software.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=docker',
      titulo: 'Docker',
      descricao: 'Criação de ambientes ísolados e consistentes para desenvolvimento e entrega.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=cypress',
      titulo: 'Cypress',
      descricao: 'Automação de testes de ponta a ponta para aplicações web.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=bootstrap',
      titulo: 'Bootstrap',
      descricao: '#################',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=vscode',
      titulo: 'Visual Studio Code',
      descricao: '#################',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=nodejs',
      titulo: 'NodeJs',
      descricao: '#################',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=net',
      titulo: '.Net',
      descricao: '#################',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=azure',
      titulo: 'Azure',
      descricao: '#################',
    },
  ];

  //24:42
}
