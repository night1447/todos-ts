import React from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {addTodoActions} from "./store/reducers/todos/todoActions";
import {useTypedSelector} from "./hooks/useTypedSelector";
import TodoItem from "./components/todoItem/TodoItem";

const App = () => {
    const todos = useTypedSelector(state => state.todos);
    const todoDispatch = useDispatch();
    const addTodoHandler = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        event.target.reset();
        const todo = {
            title: `${formData.get("title")}`,
            description: `${formData.get("description")}`,
            importance: formData.get("importance") === 'on',
            id: Math.random(),
            timestamps: {
                createdOn: new Date(),
                modifiedOn: new Date(),
                completedOn: {
                    date: new Date(),
                    state: false,
                }
            }
        };
        todoDispatch(addTodoActions(todo));
    };

    return (
        <div className="container m-auto py-10">
            <h1 className={"adding__title text-2xl mb-5"}>Добавьте задание</h1>
            <form onSubmit={addTodoHandler}
                  className={"adding__form flex flex-col justify-center align-middle max-w-xl mx-auto"}>
                <label htmlFor={"name"} className={"adding__label relative"}>
                    <input type="text" id={"name"} name={"title"} required={true}
                           className={"adding__input border-2 border-blue-300 rounded-xl px-4 py-2 text-blue-400 mb-5 transition-colors"}/>
                    <span className={"adding__span block absolute font-serif"}>Заголовок</span>
                </label>
                <label htmlFor={"description"} className={"adding__label relative"}>
                <textarea name={"description"} id={"description"} required={true}
                          className={"adding__input border-2 border-blue-300 rounded-xl px-4 py-2 text-blue-400 mb-5  resize-none transition-colors"}></textarea>
                    <span className={"adding__span block absolute font-serif"}>Описание</span>
                </label>
                <label htmlFor={"importance"}
                       className={" relative flex flex-row-reverse align-middle justify-center mb-5"}>
                    <input type="checkbox" id={"importance"} name={"importance"}
                           className={"adding__input adding__input_important"}/>
                    <span className={"adding__span mr-4"}>Важность задачи</span>
                </label>
                <button type={"submit"}
                        className={"adding__button w-52 m-auto py-2 rounded-xl bg-blue-400 text-white transition-colors hover:bg-green-400 text-black"}>Добавить
                </button>
            </form>
            <ul className={"todos flex justify-center gap-7"}>
                {
                    todos.map(item =>
                        <TodoItem todo={item} key={item.id}/>)
                }
            </ul>
        </div>)
}
export default App;

