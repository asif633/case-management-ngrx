import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Case } from '../shared/case-store/case.model';
import { UUID } from 'angular2-uuid';
import { Person } from '../shared/person-store/person.model';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.scss']
})
export class CaseFormComponent implements OnInit {
  @Output() caseToEmit: EventEmitter<Case>;
  @Output() caseToUpdate: EventEmitter<Case>;
  @Output() caseToDelete: EventEmitter<Case>;
  @Input() updateCase: Case;
  @Input() persons: Person[];
  selectedPersons: Person[];
  casePersons: Person[];
  caseNumber: string;
  dateOfCase: string;
  private id: string;

  constructor() {
    this.caseToEmit = new EventEmitter<Case>();
    this.caseToUpdate = new EventEmitter<Case>();
    this.caseToDelete = new EventEmitter<Case>();
  }

  ngOnInit() {
    if (this.updateCase) {
      this.caseNumber = this.updateCase.caseNumber;
      this.dateOfCase = this.updateCase.dateOfCase;
      this.id = this.updateCase.id;
      this.casePersons = this.updateCase.persons;
    }
  }
  
  ngOnChanges() {
    if (this.updateCase) {
      this.caseNumber = this.updateCase.caseNumber;
      this.dateOfCase = this.updateCase.dateOfCase;
      this.id = this.updateCase.id;
      this.casePersons = this.updateCase.persons;
    }
  }

  add() {
    this.caseToEmit.emit({id: UUID.UUID(), caseNumber: this.caseNumber, dateOfCase: this.dateOfCase, persons: this.selectedPersons});
  }

  update() {
    this.caseToUpdate.emit({$key: this.updateCase.$key ,id: this.id, caseNumber: this.caseNumber, dateOfCase: this.dateOfCase, persons: this.selectedPersons});
  }

  delete() {
    this.caseToDelete.emit(this.updateCase);
  }

}
