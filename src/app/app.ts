import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ItemNavbar {
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App //startup / raiz do projeto
{
  public readonly itens: ItemNavbar[] = [
    { titulo: 'Sobre', url: '#sobre', icone: 'bi bi-person' },

    { titulo: 'Habilidades', url: '#habilidades', icone: 'bi bi-award' },

    { titulo: 'Portfólio', url: '#portfolio', icone: 'bi bi-card-list' }
  ]
}
