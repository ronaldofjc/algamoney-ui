import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-releases-grid',
  templateUrl: './releases-grid.component.html',
  styleUrls: ['./releases-grid.component.css']
})
export class ReleasesGridComponent {

  @Input() releases = [];

}
