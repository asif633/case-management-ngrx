import { ActionReducer } from '@ngrx/store';
import { PersonState, initialState } from './person.state';
import * as personActions from './person.actions';

export const personReducer: ActionReducer<PersonState> = (state = initialState, action: personActions.Actions): PersonState => {
    switch (action.type) {
      case personActions.LOAD_PERSON: {
        return {
          ...state
         }
       }
      case personActions.LOAD_PERSON_SUCCESS: {
        return {
         ...state,
          persons: action.payload
        }
      }
      case personActions.SELECT_PERSON: {
        return {
         ...state,
          selectedPerson: action.payload
        }
      }
      case personActions.ADD_PERSON: {
        console.log('payload', action.payload);
          return {
            ...state,
              persons: [...state.persons, action.payload]
          }
      }
      default: {
       return state;
      }
   }
 };