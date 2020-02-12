import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples-search',
  templateUrl: './peoples-search.component.html',
  styleUrls: ['./peoples-search.component.css']
})
export class PeoplesSearchComponent {
  peoples = [
    { name: 'José da Silva', city: 'Osasco', state: 'SP', active: true },
    { name: 'Maria dos Santos', city: 'Americana', state: 'SP', active: false },
    { name: 'Fernando Souza', city: 'Santa Bárbara do Oeste', state: 'SP', active: true },
    { name: 'Marcos Francisco', city: 'Campinas', state: 'SP', active: true },
    { name: 'Rafael Oliveira', city: 'Valinhos', state: 'SP', active: false },
    { name: 'Jonas Felipe dos Santos', city: 'Sumaré', state: 'SP', active: false },
    { name: 'Adão Souza', city: 'Osasco', state: 'Nova Odessa', active: true },
  ]
}
