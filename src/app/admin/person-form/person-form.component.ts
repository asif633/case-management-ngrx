import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person-store/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  @Output() personToEmit: EventEmitter<Person>;
  name: string;
  age: number;
  profession: string;

  constructor() {
    this.personToEmit = new EventEmitter<Person>();
  }

  ngOnInit() {
  }

  onclick(){
    this.personToEmit.emit({id: '1', name: this.name, age: this.age, profession: this.profession});
  }

}
