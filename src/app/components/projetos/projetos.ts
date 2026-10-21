import { Component, signal } from '@angular/core';
import { ModalProjeto } from './modal-projeto/modal-projeto';

interface Projeto {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}
@Component({
  imports: [ModalProjeto],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})
export class Projetos {
  public readonly projetoSelecionado = signal<Projeto | undefined>(undefined);

  public readonly projetos: Projeto[] = [
    {
      titulo: 'Gerador de Certificados Online',
      descricao:
        'A aplicação permite cadastrar cursos e alunos, gerar certificados em lote de forma assíncrona e acompanhar o processamento dos certificados. O projeto utiliza autenticação JWT, persistência relacional e mensageria para organizar o fluxo de geração e download dos arquivos.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/PingDev-51/Gerador-de-Certificados-API',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'SQL Server',
      ],
    },

    {
      titulo: 'Controle De Bar',
      urlImagem: 'img/controleDeBar.gif',
      urlRepositorio: 'https://github.com/PingDev-51/Controle-De-Bar',
      tecnologias: ['C#', 'ASP.NET', 'EF Core', 'MCV', 'Testes Automatizados'],
      descricao: `A aplicação permite que donos de estabelecimentos gerenciem mesas, garçons, produtos, contas e pedidos de forma prática, com cálculo automático do total das contas e do faturamento diário do bar.`,
    },

    {
      titulo: 'E-Agenda-Testes',
      urlImagem: 'img/teste.gif',
      urlRepositorio: 'https://github.com/PingDev-51/E-Agenda-Teste',
      tecnologias: [
        'C#',
        'ASP.NET',
        'EF Core',
        'MVC',
        'SQL Server',
        'Azure',
        'Testes Unitários',
        'Testes de Integração',
        'Testes E2E',
      ],
      descricao:
        'Sistema web de gerenciamento pessoal desenvolvido em C# e .NET 10, com funcionalidades para organizar contatos, compromissos, despesas e tarefas, incluindo testes automatizados para validar o funcionamento e a confiabilidade das funcionalidades.',
    },

    {
      titulo: 'Escola-De-Cursos',
      urlImagem: '',
      urlRepositorio: 'https://github.com/PingDev-51/Escola-De-Cursos-Web',
      tecnologias: [
        'C#',
        'ASP.NET MVC',
        'Entity Framework Core',
        'SQL Server',
        'Bootstrap',
        'HTML',
        'CSS',
      ],
      descricao:
        'Sistema web de gerenciamento educacional desenvolvido em C# e ASP.NET MVC, com funcionalidades para administrar cursos, categorias, instrutores, módulos, alunos, turmas e matrículas, utilizando Entity Framework Core e regras de negócio para validação de dados.',
    },
  ];

  public selecionarProjeto(projeto: Projeto): void {
    this.projetoSelecionado.set(projeto);

    console.log(projeto);
  }
}
