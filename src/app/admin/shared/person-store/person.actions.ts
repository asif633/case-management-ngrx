import { Action } from '@ngrx/store';
import { Person } from './person.model';

export const LOAD_PERSON = '[Person] LOAD_PERSON';
export const LOAD_PERSON_SUCCESS = '[Person] LOAD_PERSON_SUCCESS';
export const ADD_PERSON = '[Person] ADD_PERSON';
export const DELETE_PERSON = '[Person] DELETE_PERSON';
export const UPDATE_PERSON = '[Person] UPDATE_PERSON';
export const SELECT_PERSON = '[Person] SELECT_PERSON';

export class LoadPersons implements Action {
    readonly type = LOAD_PERSON;
    constructor() {}
}

export class LoadPersonsSuccess implements Action {
    readonly type = LOAD_PERSON_SUCCESS;
    constructor(public payload: Person[]) {}
}

export class AddPerson implements Action {
    readonly type = ADD_PERSON;
    constructor(public payload: Person) {}
}

export class UpdatePerson implements Action {
    readonly type = UPDATE_PERSON;
    constructor(public payload: Person) {}
}

export class DeletePerson implements Action {
    readonly type = DELETE_PERSON;
    constructor(public payload: string) {}
}

export class SelectPerson implements Action {
    readonly type = SELECT_PERSON;
    constructor(public payload: Person) {}
}

export type Actions = LoadPersons | LoadPersonsSuccess | AddPerson | SelectPerson | UpdatePerson | DeletePerson;