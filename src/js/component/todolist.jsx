import React, { useState } from "react";




export const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div className="container">
            <h1>todos</h1>
            <ul>
                <li>
                    <input type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                setTodos(todos.concat([inputValue]))
                                setInputValue("");
                            }
                        }}
                        placeholder="What needs to be done?" />
                </li>
                {todos.map((item, index) => (
                    <li className="icon">
                        {item}{""}
                        <i class="fa-duotone fa-solid fa-xmark"
                            onClick={() =>
                                setTodos(
                                    todos.filter(
                                        (t, currentIndex) =>
                                            index != currentIndex))}></i>
                    </li>
                ))}

            </ul>
            <div className="items-left" > {todos.length} items left</div>
        </div>
    );

}