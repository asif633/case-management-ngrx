import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../shared/person-store/person.model';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsTableComponent implements OnInit {
  @Input() persons: Person[];

  constructor() { }

  ngOnInit() {
    
  }

}
