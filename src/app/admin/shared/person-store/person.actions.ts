import { Action } from '@ngrx/store';
import { Person } from './person.model';

export const LOAD_PERSON = '[Person] LOAD_PERSON';
export const LOAD_PERSON_SUCCESS = '[Person] LOAD_PERSON_SUCCESS';
export const LOAD_SINGLE = '[Person] LOAD_SINGLE';
export const LOAD_SINGLE_SUCCESS = '[Person] LOAD_SINGLE_SUCCESS';
export const ADD_PERSON = '[Person] ADD_PERSON';
export const DELETE_PERSON = '[Person] DELETE_PERSON';
export const UPDATE_PERSON = '[Person] UPDATE_PERSON';
export const SELECT_PERSON = '[Person] SELECT_PERSON';
export const SUCCESS_ACTION = '[Person] SUCCESS_ACTION';
export const FAILURE_ACTION = '[Person] FALIURE_ACTION';

export class LoadPersons implements Action {
    readonly type = LOAD_PERSON;
    constructor() {}
}

export class LoadPersonsSuccess implements Action {
    readonly type = LOAD_PERSON_SUCCESS;
    constructor(public payload: Person[]) {}
}
export class LoadPerson implements Action {
    readonly type = LOAD_SINGLE;
    constructor(public payload: string) {}
}

export class LoadPersonSuccess implements Action {
    readonly type = LOAD_SINGLE_SUCCESS;
    constructor(public payload: Person) {}
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

export class SuccessAction implements Action {
    readonly type = SUCCESS_ACTION;
    constructor(public payload: string) {}
}

export class FailureAction implements Action {
    readonly type = FAILURE_ACTION;
    constructor(public payload: string) {}
}

export type Actions =
 LoadPersons | 
 LoadPersonsSuccess | 
 AddPerson | 
 SelectPerson | 
 UpdatePerson | 
 DeletePerson |
 SuccessAction |
 FailureAction |
 LoadPerson |
 LoadPersonSuccess;