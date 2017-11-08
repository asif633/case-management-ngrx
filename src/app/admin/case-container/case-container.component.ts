import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Case } from '../shared/case-store/case.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import { selectAllCases } from '../shared/case-store/case.state';
import { AddCase, DeleteCase, UpdateCase, SelectCase } from '../shared/case-store/case.actions';

@Component({
  selector: 'app-case-container',
  templateUrl: './case-container.component.html',
  styleUrls: ['./case-container.component.css']
})
export class CaseContainerComponent implements OnInit {

  cases: Observable<Case[]>;

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
  }

  getcase(event) {
    console.log('event', event);
    this.store.dispatch(new AddCase(event));
    console.log('event', this.cases);
  }

  toUpdate(event) {
    this.store.dispatch(new UpdateCase(event));
  }

  toDelete(event) {
    this.store.dispatch(new DeleteCase(event));
  }

  getSelected(event){
    this.store.dispatch(new SelectCase(event));
  }

}
