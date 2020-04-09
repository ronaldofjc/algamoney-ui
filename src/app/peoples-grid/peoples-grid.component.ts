import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-peoples-grid',
  templateUrl: './peoples-grid.component.html',
  styleUrls: ['./peoples-grid.component.css']
})
export class PeoplesGridComponent {

  @Input() peoples = [];

}
