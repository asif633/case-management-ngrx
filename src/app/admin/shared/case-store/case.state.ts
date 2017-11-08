import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
} from '@ngrx/store';
import * as fromCase from './case.reducer';
import { CaseState } from './case.reducer';

export const selectCaseState = createFeatureSelector<fromCase.CaseState>('case');

export const { selectAll: selectAllCases } = fromCase.caseAdapter.getSelectors(
    selectCaseState
);

export const getSelectedCase = createSelector(
    selectCaseState,
    state => state.selectedCase
);
