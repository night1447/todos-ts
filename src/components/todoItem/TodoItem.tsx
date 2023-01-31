import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeTodoActions, deleteTodoActions} from "../../store/reducers/todos/todoActions";
import {todoItem} from "../../store/reducers/todos/type/todo";

interface todoItemProps {
    todo: todoItem
}

const TodoItem = (props: todoItemProps) => {
    const [modify, setModify] = useState(false);
    const [title, setTitle] = useState(props.todo.title);
    const [description, setDescription] = useState(props.todo.description);
    const [importance, setImportance] = useState(props.todo.importance);
    const dispatch = useDispatch();
    const cancelModify = () => {
        setModify(false);
    };

    const saveChanges = () => {
        console.log(description);
        const todo = {
            title: title,
            description: description,
            importance: importance,
            id: props.todo.id,
            timestamps: {
                createdOn: new Date(),
                modifiedOn: new Date(),
                completedOn: {
                    date: new Date(),
                    state: false,
                }
            }
        };
        console.log(description);
        dispatch(changeTodoActions({
            id: todo.id,
            todo: todo,
        }));
        setModify(false);
    };

    return (
        <li className={"todos__item text-center shadow-lg"} key={`${props.todo.id}`}>
            <div className="todos__top">
                {modify ? <input className={'todos__title focus:outline-none'} type={"text"} value={title}
                                 onChange={(event) => setTitle(event.target.value)}/> :
                    <p className={"todos__title"}>{props.todo.title}</p>
                }
            </div>
            {modify ? <textarea
                             className={'todos__description_change resize-none focus:outline-none'}
                             onInput={(event: any) => setDescription(event.target.value)}
                             value={description}/>
                :
                <p className={"todos__description"}>{props.todo.description}</p>
            }
            <div className="todos__actions">
                <button
                    onClick={() => modify ? saveChanges() : setModify(true)}
                    className="todos__modify bg-blue-400 text-white transition-colors hover:bg-blue-500">
                    {modify ? "Сохранить" : "Изменить"}
                </button>
                <button className="todos__delete bg-red-500 text-white transition-colors hover:bg-red-600"
                        onClick={() => modify ? cancelModify() : dispatch(deleteTodoActions(props.todo.id))}> {modify ? "Отмена" : "Удалить"}
                </button>
            </div>
        </li>)
}
export default TodoItem;