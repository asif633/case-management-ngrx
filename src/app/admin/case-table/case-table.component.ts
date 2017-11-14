import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Case } from '../shared/case-store/case.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { getSelectedCase } from '../shared/case-store/case.state';
import { Observable } from 'rxjs/Rx';
import { Person } from '../shared/person-store/person.model';

@Component({
  selector: 'app-case-table',
  templateUrl: './case-table.component.html',
  styleUrls: ['./case-table.component.scss']
})
export class CaseTableComponent implements OnInit {

  @Input() cases: Case[];
  selectedCase: Observable<Case>;
  @Output() selCase: EventEmitter<Case>;
  displayDialog: boolean;
  @Output() caseToUpdate: EventEmitter<Case>;
  @Output() caseToDelete: EventEmitter<string>;
  @Input() persons: Person[];

  constructor(private store: Store<AppState>) {
    this.caseToUpdate = new EventEmitter<Case>();
    this.caseToDelete = new EventEmitter<string>();
    this.selCase = new EventEmitter<Case>();
  }

  ngOnInit(){
    this.selectedCase = this.store.select(getSelectedCase);
  }

  toUpdate(event) {
    this.displayDialog = false;
    this.caseToUpdate.emit(event);
  }

  toDelete(event) {
    this.displayDialog = false;
    this.caseToDelete.emit(event);
  }

  onRowSelect(event) {
    this.displayDialog = true;
    console.log('dia', event.data);
    //this.selectedCase = event.data;
    this.selCase.emit(event.data);
  }

}
