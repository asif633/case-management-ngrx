import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Case } from '../shared/case-store/case.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { selectAllCases } from '../shared/case-store/case.state';
import { AddCase, DeleteCase, UpdateCase, SelectCase, LoadCases, LoadCase } from '../shared/case-store/case.actions';
import { Person } from '../shared/person-store/person.model';
import { getPersons } from '../shared/person-store/person.state';
import { LoadPersons } from '../shared/person-store/person.actions';

@Component({
  selector: 'app-case-container',
  templateUrl: './case-container.component.html',
  styleUrls: ['./case-container.component.scss']
})
export class CaseContainerComponent implements OnInit {

  cases: Observable<Case[]>;
  persons: Observable<Person[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.cases = [
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'},
    //   {id: '1', name: 'Asif', age: 32, profession: 'SW'}
    // ];
    this.cases = this.store.select(selectAllCases);
    this.persons = this.store.select(getPersons);
    this.store.dispatch(new LoadCases());
    this.store.dispatch(new LoadPersons());
  }

  getcase(event) {
    console.log('event', event);
    this.store.dispatch(new AddCase(event));
    console.log('event', this.cases);
  }

  toUpdate(event) {
    console.log('eve', event);
    this.store.dispatch(new UpdateCase(event));
  }

  toDelete(event) {
    console.log('eve', event);
    this.store.dispatch(new DeleteCase(event));
  }

  getSelected(event){
    this.store.dispatch(new LoadCase(event.$key));
  }

}
