import React from "react";

const Todos = () => {
    return (
        <ul className={'todos flex gap-24'}>
            <li className={"todos__item flex-33 flex-grow-0 border-2 border-blue-300 rounded-xl"}>
                <div className="todos__info flex justify-center relative border-b-2 p-30">
                    <div className="todos__close absolute top-0 left-0">x</div>
                    <div className="todos__title">Some title</div>
                </div>
                <div className="todos__message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, alias aliquid dolor
                    illo labore, omnis provident quas repudiandae sequi soluta voluptatibus? Consequuntur delectus
                    dolore esse inventore libero natus nisi!
                </div>
            </li>
            <li className={"todos__item flex-33 flex-grow-0"}>
                <div className="todos__info">
                    <div className="todos__close">x</div>
                    <div className="todos__title">Some title</div>
                </div>
                <div className="todos__message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, alias aliquid dolor
                    illo labore, omnis provident quas repudiandae sequi soluta voluptatibus? Consequuntur delectus
                    dolore esse inventore libero natus nisi!
                </div>
            </li>
        </ul>
    )
}
export default Todos;