import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person-store/person.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { Observable } from 'rxjs/Observable';
import { getPersons } from '../shared/person-store/person.state';
import { AddPerson, UpdatePerson, DeletePerson, LoadPersons } from '../shared/person-store/person.actions';

@Component({
  selector: 'app-person-manage-page',
  templateUrl: './person-manage-page.component.html',
  styleUrls: ['./person-manage-page.component.scss']
})
export class PersonManagePageComponent implements OnInit {
  persons: Observable<Person[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.persons = [
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'}
    // ];
    this.persons = this.store.select(getPersons);
    this.store.dispatch(new LoadPersons());
  }

  getPerson(event){
    console.log('event', event);
    this.store.dispatch(new AddPerson(event));
    console.log('event', this.persons);
  }

  toUpdate(event){
    this.store.dispatch(new UpdatePerson(event));
  }

  toDelete(event){
    console.log('event', event);
    this.store.dispatch(new DeletePerson(event));
  }

}
