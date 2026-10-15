import { Component } from '@angular/core';

interface Habilidade_Ferramentas {
  imagem_ferramentas: string;
  titulo_ferramentas: string;
  descricao_ferramentas: string;
}

interface Habilidades_Back_End {
  titulo_back_end: string;
  Imagem_back_end: string;
  Descricao_back_end: string;
}

interface Habilidades_Front_End {
  titulo_front_end: string;
  Imagem_front_end: string;
  Descricao_front_end: string;
}
@Component({
  selector: 'app-habilidades',
  imports: [], //todas as dependencias
  templateUrl: './habilidades.html', //html relacionado ao elemento
})
export class Habilidades {
  public readonly habilidades_ferramentas: Habilidade_Ferramentas[] = [
    {
      imagem_ferramentas: 'https://skillicons.dev/icons?i=git',
      titulo_ferramentas: 'Git',
      descricao_ferramentas:
        'Versionamento de código e gerenciamento do histórico de alterações em projetos.',
    },

    {
      imagem_ferramentas: 'https://skillicons.dev/icons?i=docker',
      titulo_ferramentas: 'Docker',
      descricao_ferramentas:
        'Criação e gerenciamento de ambientes isolados e consistentes com contêineres.',
    },

    {
      imagem_ferramentas: 'https://skillicons.dev/icons?i=cypress',
      titulo_ferramentas: 'Cypress',
      descricao_ferramentas:
        'Automação de testes end-to-end para validar o funcionamento de aplicações web.',
    },

    {
      imagem_ferramentas: 'https://skillicons.dev/icons?i=azure',
      titulo_ferramentas: 'Microsoft Azure',
      descricao_ferramentas:
        'Plataforma de computação em nuvem para hospedar aplicações e utilizar serviços de infraestrutura.',
    },

    {
      imagem_ferramentas: 'https://skillicons.dev/icons?i=vscode',
      titulo_ferramentas: 'Visual Studio Code',
      descricao_ferramentas:
        'Edição, organização e depuração de código com extensões e ferramentas de desenvolvimento.',
    },

    {
      imagem_ferramentas: 'https://skillicons.dev/icons?i=visualstudio',
      titulo_ferramentas: 'Visual Studio',
      descricao_ferramentas:
        'Desenvolvimento, execução e depuração de aplicações com ferramentas integradas para programação e gerenciamento de projetos.',
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

  public readonly habilidades_front: Habilidades_Front_End[] = [
    {
      Imagem_front_end: 'https://skillicons.dev/icons?i=html',
      titulo_front_end: 'HTML',
      Descricao_front_end: 'Estruturação semântica e acessível do conteúdo de páginas web.',
    },

    {
      Imagem_front_end: 'https://skillicons.dev/icons?i=scss',
      titulo_front_end: 'SCSS',
      Descricao_front_end:
        'Criação de estilos organizados, reutilizáveis e responsivos com recursos avançados de CSS.',
    },

    {
      Imagem_front_end: 'https://skillicons.dev/icons?i=typescript',
      titulo_front_end: 'TypeScript',
      Descricao_front_end:
        'Desenvolvimento de aplicações JavaScript com tipagem estática e maior segurança no código.',
    },

    {
      Imagem_front_end: 'https://skillicons.dev/icons?i=angular',
      titulo_front_end: 'Angular',
      Descricao_front_end:
        'Construção de aplicações web utilizando componentes, serviços e TypeScript.',
    },

    {
      Imagem_front_end: 'https://skillicons.dev/icons?i=rxjs',
      titulo_front_end: 'RxJS',
      Descricao_front_end:
        'Gerenciamento de fluxos assíncronos e eventos utilizando programação reativa.',
    },

    {
      Imagem_front_end: 'https://skillicons.dev/icons?i=bootstrap',
      titulo_front_end: 'Bootstrap',
      Descricao_front_end:
        'Desenvolvimento de interfaces responsivas utilizando componentes e classes CSS reutilizáveis.',
    },
  ];
}
