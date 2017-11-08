import { Person } from './person.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../../shared/store/state';

export interface PersonState {
    selectedPerson: Person;
    persons: Person[];
}

export interface State extends AppState {
    'personState': PersonState;
}

export const initialState: PersonState = {
    persons: [],
    selectedPerson: null
};

export const getPersonState = createFeatureSelector<PersonState>('personState');
export const getPersons = createSelector(
    getPersonState,
    state => state.persons
);
export const getSelectedPerson = createSelector(
    getPersonState,
    state => state.selectedPerson
);
