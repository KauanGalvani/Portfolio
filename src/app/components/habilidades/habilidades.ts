import { Component } from '@angular/core';

interface Habilidade {
  imagem: string;
  titulo: string;
  descricao: string;
}

interface Habilidades_Back_End {
  titulo_back_end: string;
  Imagem_back_end: string;
  Descricao_back_end: string;
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
      descricao: 'Desenvolvimento de aplicações utilizando programação orientada a objetos.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=html',
      titulo: 'HTML',
      descricao: 'Estruturação semântica e acessível do conteúdo de páginas web.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=scss',
      titulo: 'SCSS',
      descricao:
        'Criação de estilos organizados, reutilizáveis e responsivos com recursos avançados de CSS.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=typescript',
      titulo: 'TypeScript',
      descricao:
        'Desenvolvimento de aplicações JavaScript com tipagem estática e maior segurança no código.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=angular',
      titulo: 'Angular',
      descricao: 'Construção de aplicações web utilizando componentes, serviços e TypeScript.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=rxjs',
      titulo: 'RxJS',
      descricao: 'Gerenciamento de fluxos assíncronos e eventos utilizando programação reativa.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=git',
      titulo: 'Git',
      descricao: 'Versionamento de código e gerenciamento do histórico de alterações em projetos.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=docker',
      titulo: 'Docker',
      descricao: 'Criação e gerenciamento de ambientes isolados e consistentes com contêineres.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=cypress',
      titulo: 'Cypress',
      descricao: 'Automação de testes end-to-end para validar o funcionamento de aplicações web.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=bootstrap',
      titulo: 'Bootstrap',
      descricao:
        'Desenvolvimento de interfaces responsivas utilizando componentes e classes CSS reutilizáveis.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=vscode',
      titulo: 'Visual Studio Code',
      descricao:
        'Edição, organização e depuração de código com extensões e ferramentas de desenvolvimento.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=nodejs',
      titulo: 'Node.js',
      descricao:
        'Execução de JavaScript no servidor para desenvolver aplicações e serviços back-end.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=net',
      titulo: '.NET',
      descricao: 'Desenvolvimento de aplicações e serviços utilizando a plataforma .NET.',
    },

    {
      imagem: 'https://skillicons.dev/icons?i=azure',
      titulo: 'Microsoft Azure',
      descricao:
        'Plataforma de computação em nuvem para hospedar aplicações e utilizar serviços de infraestrutura.',
    },
  ];

  public readonly habilidade_back: Habilidades_Back_End[] = [
    {
      Imagem_back_end: 'https://skillicons.dev/icons?i=cs',
      titulo_back_end: 'C#',
      Descricao_back_end:
        'Desenvolvimento de aplicações utilizando programação orientada a objetos.',
    },

    {
      Imagem_back_end: 'https://skillicons.dev/icons?i=net',
      titulo_back_end: '.NET',
      Descricao_back_end: 'Desenvolvimento de aplicações e serviços utilizando a plataforma .NET.',
    },

    {
      Imagem_back_end: 'https://skillicons.dev/icons?i=nodejs',
      titulo_back_end: 'Node.js',
      Descricao_back_end:
        'Execução de JavaScript no servidor para desenvolver aplicações e serviços back-end.',
    },
  ];
}
