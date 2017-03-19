import createReducers from '../lib/createReducer';
import * as types from '../actions/types';

export const searchRecipes = createReducers({}, {

});

export const recipeCount = createReducers(0, {
    /*
     *
     * RECIPE COUNT REDUCER FOR ADD AND SUBSTRACT THE STATE
     * 
     */
    [types.ADD_RECIPE](state, action) {
        return state + 1;
    },

    [types.SUB_RECIPE](state, action) {
        return state - 1;
    }
})