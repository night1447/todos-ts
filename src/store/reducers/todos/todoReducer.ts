import {addTODO, changeTODO, deleteTodo} from "./todoTypes";
import {actionInterface} from "./type/todo";

export const todoReducer = (state: any[] = [], action: actionInterface): any[] => {
    if (action.type === deleteTodo) {
        return state.filter(item => item["id"] !== action.id);
    }
    if (action.type === addTODO) {
        return [...state, action.todo];
    }
    if (action.type === changeTODO) {
        return state.map(item => item["id"] === action.id ? action.todo : item)
    }
    return state;
}