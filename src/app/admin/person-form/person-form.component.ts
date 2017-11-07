import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../shared/person-store/person.model';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  @Output() personToEmit: EventEmitter<Person>;
  @Output() personToUpdate: EventEmitter<Person>;
  @Output() personToDelete: EventEmitter<string>;
  @Input() updatePerson: Person;
  name: string;
  age: number;
  profession: string;
  private id: string;

  constructor() {
    this.personToEmit = new EventEmitter<Person>();
    this.personToUpdate = new EventEmitter<Person>();
    this.personToDelete = new EventEmitter<string>();
  }

  ngOnInit() {
    if (this.updatePerson) {
      this.name = this.updatePerson.name;
      this.age = this.updatePerson.age;
      this.profession = this.updatePerson.profession;
      this.id = this.updatePerson.id;
    }
  }

  ngOnChanges() {
    if (this.updatePerson) {
      this.name = this.updatePerson.name;
      this.age = this.updatePerson.age;
      this.profession = this.updatePerson.profession;
      this.id = this.updatePerson.id;
    }
  }

  add() {
    this.personToEmit.emit({id: UUID.UUID(), name: this.name, age: this.age, profession: this.profession});
  }

  update() {
    this.personToUpdate.emit({id: this.id, name: this.name, age: this.age, profession: this.profession});
  }

  delete() {
    this.personToDelete.emit(this.id);
  }

}
