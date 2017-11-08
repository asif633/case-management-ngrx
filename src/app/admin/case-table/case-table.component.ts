import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Case } from '../shared/case-store/case.model';

@Component({
  selector: 'app-case-table',
  templateUrl: './case-table.component.html',
  styleUrls: ['./case-table.component.css']
})
export class CaseTableComponent implements OnInit {

  @Input() cases: Case[];
  selectedCase: Case;
  @Output() selCase: EventEmitter<Case>;
  displayDialog: boolean;
  @Output() caseToUpdate: EventEmitter<Case>;
  @Output() caseToDelete: EventEmitter<string>;

  constructor() {
    this.caseToUpdate = new EventEmitter<Case>();
    this.caseToDelete = new EventEmitter<string>();
    this.selCase = new EventEmitter<Case>();
  }

  ngOnInit(){

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
    this.selectedCase = event.data;
    this.selCase.emit(event.data);
  }

}
