import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Case } from '../shared/case-store/case.model';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.css']
})
export class CaseFormComponent implements OnInit {
  @Output() caseToEmit: EventEmitter<Case>;
  @Output() caseToUpdate: EventEmitter<Case>;
  @Output() caseToDelete: EventEmitter<string>;
  @Input() updateCase: Case;
  caseNumber: string;
  dateOfCase: string;
  private id: string;

  constructor() {
    this.caseToEmit = new EventEmitter<Case>();
    this.caseToUpdate = new EventEmitter<Case>();
    this.caseToDelete = new EventEmitter<string>();
  }

  ngOnInit() {
    if (this.updateCase) {
      this.caseNumber = this.updateCase.caseNumber;
      this.dateOfCase = this.updateCase.dateOfCase;
      this.id = this.updateCase.id;
    }
  }

  ngOnChanges() {
    if (this.updateCase) {
      this.caseNumber = this.updateCase.caseNumber;
      this.dateOfCase = this.updateCase.dateOfCase;
      this.id = this.updateCase.id;
    }
  }

  add() {
    this.caseToEmit.emit({id: UUID.UUID(), caseNumber: this.caseNumber, dateOfCase: this.dateOfCase});
  }

  update() {
    this.caseToUpdate.emit({id: this.id, caseNumber: this.caseNumber, dateOfCase: this.dateOfCase});
  }

  delete() {
    this.caseToDelete.emit(this.id);
  }

}
