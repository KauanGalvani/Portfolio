import { Component, signal } from '@angular/core';

interface Projeto {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}
@Component({
  imports: [],
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
      titulo: 'DeliveryApp',
      urlImagem: '',
      urlRepositorio: '',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'PostgreSQL',
        'JWT',
      ],
      descricao: `A API REST gerencia clientes, estabelecimentos e cardápios de uma plataforma de pedidos e entregas. O sistema oferece autenticação JWT, cadastro de produtos e complementos, ativação de estabelecimentos e consulta pública do cardápio vigente.`,
    },

    {
      titulo: 'Controle De Bar',
      urlImagem: '/img/controleDeBar.gif',
      urlRepositorio: '',
      tecnologias: ['C#', 'ASP.NET', 'EF Core', 'MCV', 'Testes Automatizados'],
      descricao: `A aplicação permite que donos de estabelecimentos gerenciem mesas, garçons, produtos, contas e pedidos de forma prática, com cálculo automático do total das contas e do faturamento diário do bar.`,
    },

    {
      titulo: 'E-Agenda',
      urlImagem: '/img/teste.gif',
      urlRepositorio: '',
      tecnologias: ['C#', 'ASP.NET', 'EF Core', 'MCV', 'SQL Server', 'Azure'],
      descricao: '########',
    },
  ];

  public selecionarProjeto(projeto: Projeto): void {
    this.projetoSelecionado.set(projeto);

    console.log(projeto);
  }
}
