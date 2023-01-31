import {addTODO, changeTODO, deleteTodo} from "./todoTypes";
import {IChangeTodo, todoItem} from "./type/todo";

export const addTodoActions = (todo: todoItem) => ({
    type: addTODO,
    todo: todo,
})
export const changeTodoActions = (change: IChangeTodo) => ({
    type: changeTODO,
    id: change.id,
    todo: change.todo,
})
export const deleteTodoActions = (id: number) => ({
    type: deleteTodo,
    id: id,
})