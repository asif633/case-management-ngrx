import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import { Action } from '@ngrx/store';
import * as CaseActions from './case.actions';
import { CaseService } from './case.service';
import { UPDATE_Case, LOAD_Case, LOAD_SINGLE, LoadCase, LoadCaseSuccess, SelectCase } from './case.actions';
import { SuccessAction } from '../person-store/person.actions';
import { Case } from './case.model';

@Injectable()
export class CaseEffectsService {
    constructor(private actions$: Actions, private caseService: CaseService) { }

    @Effect()
    caseAdd$: Observable<Action> = this.actions$
        .ofType<CaseActions.AddCase>(CaseActions.ADD_Case)
        .map(action => action.payload)
        //.do(payload => { const { persons, ...noA } = payload; console.log('pp', persons, noA) })
        .switchMap(({ persons, ...noA }) =>
            this.caseService.add(noA).then((data) => persons.map(person => this.caseService.addCasePersons(data.key, person.$key)))
                .then(() => new SuccessAction('done')));

    @Effect()
    caseUpdate$: Observable<Action> = this.actions$
        .ofType<CaseActions.UpdateCase>(CaseActions.UPDATE_Case)
        .map(action => action.payload)
        .do(payload => { const { persons, ...noA } = payload; console.log('pp', persons, noA) })
        .switchMap(({ persons, ...noA }) =>
            this.caseService.update(noA).then(() => persons.map(person => {
                this.caseService.deleteCasePersons(noA.$key).then(() =>
                    this.caseService.addCasePersons(noA.$key, person.$key));
            }))
                .then(() => new SuccessAction('done')));

    @Effect()
    caseDelete$: Observable<Action> = this.actions$
        .ofType<CaseActions.DeleteCase>(CaseActions.DELETE_Case)
        .map(action => action.payload.$key)
        .switchMap((payload) => this.caseService.delete(payload).then(() =>
            this.caseService.deleteCasePersons(payload)
        ).then(() =>
            new CaseActions.SuccessAction('Success')));

    @Effect()
    caseLoadAll$: Observable<Action> = this.actions$
        .ofType<CaseActions.LoadCases>(CaseActions.LOAD_Case)
        .switchMap(() =>
            this.caseService.cases.map(cases => new CaseActions.LoadCasesSuccess(cases)));

    @Effect()
    caseLoadCase$: Observable<Action> = this.actions$
        .ofType<CaseActions.LoadCase>(CaseActions.LOAD_SINGLE)
        .map(action => action.payload)
        .do(cases => console.log('cc', cases))
        .switchMap((caseKey) => {
            return this.caseService.getCase(caseKey)
                .map(cases => {
                    return this.caseService.getPeros(cases.$key)
                        .map(xx => ({ ...cases, persons: xx }))
                })
        })
        .mergeMap(vg => vg)
        .map(cd => new CaseActions.SelectCase(cd));

}