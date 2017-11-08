import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import { Action } from '@ngrx/store';
import * as personActions from './person.actions';
import { PersonService } from './person.service';
import { UPDATE_PERSON, LOAD_PERSON, LOAD_SINGLE } from './person.actions';

@Injectable()
export class PersonEffectsService {
  constructor(private actions$: Actions, private personService: PersonService) { }

  @Effect()
  personAdd$: Observable<Action> = this.actions$
    .ofType<personActions.AddPerson>(personActions.ADD_PERSON)
    .map(action => action.payload)
    .switchMap((payload) => this.personService.add(payload).then(() => new personActions.SuccessAction('sucess')));

  @Effect()
  personUpdate$: Observable<Action> = this.actions$
    .ofType<personActions.UpdatePerson>(personActions.UPDATE_PERSON)
    .map(action => action.payload)
    .switchMap((payload) => this.personService.update(payload).then(() => new personActions.SuccessAction('Success')));

  @Effect()
  personDelete$: Observable<Action> = this.actions$
    .ofType<personActions.DeletePerson>(personActions.DELETE_PERSON)
    .map(action => action.payload)
    .switchMap((payload) => this.personService.delete(payload).then(() => new personActions.SuccessAction('Success')));

  @Effect()
  personLoadAll$: Observable<Action> = this.actions$
    .ofType<personActions.LoadPersons>(personActions.LOAD_PERSON)
    .switchMap(() => this.personService.projects.map((persons => new personActions.LoadPersonsSuccess(persons))));

  @Effect()
  personLoadPerson$: Observable<Action> = this.actions$
    .ofType<personActions.LoadPerson>(personActions.LOAD_SINGLE)
    .map(action => action.payload)
    .switchMap((personKey) => this.personService.getPerson(personKey).map((persons => new personActions.LoadPersonSuccess(persons))));

  // @Effect()
  // fetchpersonSpeakers$: Observable<Action> = this.actions$
  //   .ofType(personActions.FETCH_person_SPEAKERS)
  //   //.startWith(new personActions.FetchpersonSpeakers())
  //   .switchMap(() =>
  //     this.personService.events
  //       //this.db.query('books')
  //       //.toArray()
  //       .do((events) => console.log('events', events))
  //       .map((books) => new personActions.FetchpersonSpeakersSuccess(books))
  //   //.catch(error => of(new collection.LoadFailAction(error)))
  //   );

  // @Effect()
  // fetchProjects$: Observable<Action> = this.actions$
  //   .ofType(personActions.FETCH_PROJECTS)
  //   //.startWith(new personActions.FetchProjects())
  //   .switchMap(() =>
  //     this.personService.projects
  //       //this.db.query('books')
  //       //.toArray()
  //       .do((events) => console.log('events', events))
  //       .map((books) => new personActions.FetchProjectsSuccess(books))
  //   //.catch(error => of(new collection.LoadFailAction(error)))
  //   );
}