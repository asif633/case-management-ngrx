import { Action } from '@ngrx/store';
import { Case } from './case.model';

export const LOAD_Case = '[Case] LOAD_Case';
export const LOAD_Case_SUCCESS = '[Case] LOAD_Case_SUCCESS';
export const ADD_Case = '[Case] ADD_Case';
export const DELETE_Case = '[Case] DELETE_Case';
export const UPDATE_Case = '[Case] UPDATE_Case';
export const SELECT_Case = '[Case] SELECT_Case';

export class LoadCases implements Action {
    readonly type = LOAD_Case;
    constructor() {}
}

export class LoadCasesSuccess implements Action {
    readonly type = LOAD_Case_SUCCESS;
    constructor(public payload: Case[]) {}
}

export class AddCase implements Action {
    readonly type = ADD_Case;
    constructor(public payload: Case) {}
}

export class UpdateCase implements Action {
    readonly type = UPDATE_Case;
    constructor(public payload: Case) {}
}

export class DeleteCase implements Action {
    readonly type = DELETE_Case;
    constructor(public payload: string) {}
}

export class SelectCase implements Action {
    readonly type = SELECT_Case;
    constructor(public payload: Case) {}
}

export type Actions = LoadCases | LoadCasesSuccess | AddCase | SelectCase | UpdateCase | DeleteCase;