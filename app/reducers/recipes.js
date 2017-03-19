import createReducers from '../lib/createReducer';
import * as types from '../actions/types';

export const searchRecipes = createReducers({}, {

});

export const recipeCount = createReducers(0, {
    [types.ADD_RECIPE](state, action) {
        return state + 1;
    },

    [types.SUB_RECIPE](state, action) {
        return state - 1;
    }
})