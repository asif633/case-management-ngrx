import { Action } from '@ngrx/store';
import { Case } from './case.model';

export const LOAD_Case = '[Case] LOAD_Case';
export const LOAD_Case_SUCCESS = '[Case] LOAD_Case_SUCCESS';
export const LOAD_SINGLE = '[Person] LOAD_SINGLE';
export const LOAD_SINGLE_SUCCESS = '[Person] LOAD_SINGLE_SUCCESS';
export const ADD_Case = '[Case] ADD_Case';
export const DELETE_Case = '[Case] DELETE_Case';
export const UPDATE_Case = '[Case] UPDATE_Case';
export const SELECT_Case = '[Case] SELECT_Case';
export const SUCCESS_ACTION = '[Person] SUCCESS_ACTION';
export const FAILURE_ACTION = '[Person] FALIURE_ACTION';

export class LoadCases implements Action {
    readonly type = LOAD_Case;
    constructor() {}
}

export class LoadCasesSuccess implements Action {
    readonly type = LOAD_Case_SUCCESS;
    constructor(public payload: Case[]) {}
}

export class LoadCase implements Action {
    readonly type = LOAD_SINGLE;
    constructor(public payload: string) {}
}

export class LoadCaseSuccess implements Action {
    readonly type = LOAD_SINGLE_SUCCESS;
    constructor(public payload: Case) {}
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
    constructor(public payload: Case) {}
}

export class SelectCase implements Action {
    readonly type = SELECT_Case;
    constructor(public payload: Case) {}
}

export class SuccessAction implements Action {
    readonly type = SUCCESS_ACTION;
    constructor(public payload: string) {}
}

export class FailureAction implements Action {
    readonly type = FAILURE_ACTION;
    constructor(public payload: string) {}
}

export type Actions = LoadCases | LoadCasesSuccess | AddCase | SelectCase | UpdateCase | DeleteCase;