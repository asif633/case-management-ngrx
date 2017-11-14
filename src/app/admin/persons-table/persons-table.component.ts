import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person-store/person.model';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsTableComponent implements OnInit {
  @Input() persons: Person[];
  selectedPerson: Person;
  displayDialog: boolean;
  @Output() personToUpdate: EventEmitter<Person>;
  @Output() personToDelete: EventEmitter<string>;

  constructor() {
    this.personToUpdate = new EventEmitter<Person>();
    this.personToDelete = new EventEmitter<string>();
  }

  ngOnInit(){

  }

  toUpdate(event) {
    this.displayDialog = false;
    this.personToUpdate.emit(event);
  }

  toDelete(event) {
    this.displayDialog = false;
    this.personToDelete.emit(event);
  }

  onRowSelect(event) {
    this.displayDialog = true;
    console.log('dia', event.data);
    this.selectedPerson = event.data;
  }

}
