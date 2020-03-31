import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-search',
  templateUrl: './releases-search.component.html',
  styleUrls: ['./releases-search.component.css']
})
export class ReleasesSearchComponent {

  releases = [
    { type: 'DESPESA', description: 'Compra de pão', dueDate: new Date(2020, 1, 10),
      paymentDate: new Date(2020, 1, 10), value: 4.55, person: 'Padaria do José' },
    { type: 'RECEITA', description: 'Venda de software', dueDate: new Date(2020, 1, 30),
      paymentDate: null, value: 80000, person: 'Atacado Brasil' },
    { type: 'DESPESA', description: 'Impostos', dueDate: new Date(2020, 1, 30),
      paymentDate: new Date(2020, 1, 10), value: 400.00, person: 'Ministério da Fazenda' },
    { type: 'DESPESA', description: 'Mensalidade da Escola', dueDate: new Date(2020, 1, 30),
      paymentDate: new Date(2020, 1, 10), value: 40.00, person: 'Escola Abelha Rainha' },
    { type: 'RECEITA', description: 'Venda de Carro', dueDate: new Date(2020, 1, 30),
      paymentDate: new Date(2020, 1, 10), value: 500.00, person: 'Sebastião Souza' },
    { type: 'DESPESA', description: 'Aluguel', dueDate: new Date(2020, 1, 30),
      paymentDate: new Date(2020, 1, 10), value: 2000.00, person: 'Casa Nova Imóveis' },
    { type: 'DESPESA', description: 'Musculação', dueDate: new Date(2020, 1, 10),
      paymentDate: new Date(2020, 1, 10), value: 59.00, person: 'UpFit Academia' },
  ];

}
