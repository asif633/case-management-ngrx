import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css']
})
export class PersonsTableComponent implements OnInit {
  persons: Person[];

  constructor() { }

  ngOnInit() {
    this.persons = [
      {id: '1', name: 'Asif', age: 32, profession: 'SW'},
      {id: '1', name: 'Asif', age: 32, profession: 'SW'},
      {id: '1', name: 'Asif', age: 32, profession: 'SW'},
      {id: '1', name: 'Asif', age: 32, profession: 'SW'},
      {id: '1', name: 'Asif', age: 32, profession: 'SW'},
      {id: '1', name: 'Asif', age: 32, profession: 'SW'},
      {id: '1', name: 'Asif', age: 32, profession: 'SW'}
    ];
  }

}
