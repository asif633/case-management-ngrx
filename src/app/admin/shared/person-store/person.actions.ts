import { Action } from '@ngrx/store';
import { Person } from './person.model';

export const LOAD_PERSON = '[Person] LOAD_PERSON';
export const LOAD_PERSON_SUCCESS = '[Person] LOAD_PERSON_SUCCESS';
export const ADD_PERSON = '[Person] ADD_PERSON';
export const SELECT_PERSON = '[Person] SELECT_PERSON';

export class LoadPersons implements Action{
    readonly type = LOAD_PERSON;
    constructor(){}
}

export class LoadPersonsSuccess implements Action{
    readonly type = LOAD_PERSON_SUCCESS;
    constructor(public payload: Person[]){}
}

export class AddPerson implements Action {
    readonly type = ADD_PERSON;
    constructor(public payload: Person){}
}

export class SelectPerson implements Action {
    readonly type = SELECT_PERSON;
    constructor(public payload: Person){}
}

export type Actions = LoadPersons | LoadPersonsSuccess | AddPerson | SelectPerson;