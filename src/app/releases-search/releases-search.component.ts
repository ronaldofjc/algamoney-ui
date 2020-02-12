import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-search',
  templateUrl: './releases-search.component.html',
  styleUrls: ['./releases-search.component.css']
})
export class ReleasesSearchComponent {

  releases = [
    { type: 'DESPESA', description: 'Compra de pão', dueDate: '01/02/2020',
      paymentDate: '01/02/2020', value: 4.55, person: 'Padaria do José' },
    { type: 'RECEITA', description: 'Venda de software', dueDate: '01/01/2020',
      paymentDate: null, value: 44.55, person: 'Atacado Brasil' },
    { type: 'DESPESA', description: 'Impostos', dueDate: '05/02/2020',
      paymentDate: '01/02/2020', value: 400.00, person: 'Ministério da Fazenda' },
    { type: 'DESPESA', description: 'Mensalidade da Escola', dueDate: '10/01/2020',
      paymentDate: '01/02/2020', value: 40.00, person: 'Escola Abelha Rainha' },
    { type: 'RECEITA', description: 'Venda de Carro', dueDate: '12/02/2020',
      paymentDate: '01/02/2020', value: 500.00, person: 'Sebastião Souza' },
    { type: 'DESPESA', description: 'Aluguel', dueDate: '25/01/2020',
      paymentDate: '01/02/2020', value: 2000.00, person: 'Casa Nova Imóveis' },
    { type: 'DESPESA', description: 'Musculação', dueDate: '01/02/2020',
      paymentDate: '01/02/2020', value: 59.00, person: 'UpFit Academia' },
  ];

}
