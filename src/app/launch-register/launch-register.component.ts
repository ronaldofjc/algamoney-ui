import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-register',
  templateUrl: './launch-register.component.html',
  styleUrls: ['./launch-register.component.css']
})
export class LaunchRegisterComponent implements OnInit {

  types = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categories = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 }
  ];

  peoples = [
    { label: 'João da Silva', value: 1 },
    { label: 'Sebastião Souza', value: 2 },
    { label: 'Maria Abadia', value: 3 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
