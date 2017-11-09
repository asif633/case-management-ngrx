import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as caseActions from './case.actions';
import { Case } from './case.model';
import { UPDATE_Case, LOAD_Case } from './case.actions';

export interface CaseState extends EntityState<Case> {
    selectedCase: Case;
}

export const caseAdapter: EntityAdapter<Case> = createEntityAdapter<Case>(
    // {
    //     selectedCase: Case,
    //     sortComparer: false,
    // }
);

export const initialState: CaseState = caseAdapter.getInitialState({
    selectedCase: null
});

export function caseReducer(
    state: CaseState = initialState,
    action: caseActions.Actions
) {
    switch (action.type) {
        case caseActions.LOAD_Case: {
            return {
              ...state
            };
          }
          case caseActions.LOAD_Case_SUCCESS: {
            return {
                ...caseAdapter.addMany(action.payload, state),
                selectedCase: state.selectedCase,
            };
          }
        case caseActions.ADD_Case:
            return {
                ...caseAdapter.addOne(action.payload, state),
                selectedCase: state.selectedCase
            };
        case caseActions.UPDATE_Case:
            const pay = action.payload;
            return {
                ...caseAdapter.updateOne(
                    { id: action.payload.id, changes: pay },
                    state
                ),
                selectedCase: state.selectedCase
            };
        case caseActions.DELETE_Case:
            return {
                ...caseAdapter.removeOne(action.payload, state),
                selectedCase: state.selectedCase
            };
        case caseActions.SELECT_Case:
            return {
                ...state,
                selectedCase: action.payload
            };
        default:
            return state;
    }
}
