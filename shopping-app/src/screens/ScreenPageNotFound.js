import React, { useReducer, useState } from 'react'
import { Link } from 'react-router-dom'

const ACTION = {
    ACTION_ADD: 'action_add',
    ACTION_TOGGLE: 'action_toggle',
}

const reducer = (todos, action) => {
    switch (action.type) {
        case 'action_add':
            return [...todos, newTodo(action.payload.text)]
        case 'action_toggle':
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todos, complete: !todo.complete }
                }
                return todos
            })
        default:
            return todos
    }
};

const newTodo = (text) => {
    return { id: Date.now().toString(), text: text, complete: false }
}


export const ScreenPageNotFound = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTION.ACTION_ADD, payload: { text: text } })
        setText('')
    }

    const toggle = (id) => {
        dispatch({ type: ACTION.ACTION_TOGGLE, payload: { id: id } })
    }

    return (
        <div className="mt-32 h-96 flex justify-center items-center flex-col  ">
            <h1 className="font-extrabold text-7xl py-10">404 page not found</h1>
            <Link to="/" className="bg-green-800 py-2 px-8 rounded text-gray-50 font-medium hover:bg-green-700">Back to Home page</Link>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
            </form>
            {
                todos.map(item => {
                    return (<div key={item.id}>
                        <p style={{ color: item.complete ? '#aaa' : '#000' }}>{item.text}</p>
                        <button
                            className="bg-gray-700 border-8"
                            onClick={toggle(item.id)}
                        >Toggle</button>
                        <button className="bg-gray-700 border-8">Delete</button>
                    </div>)
                })
            }
        </div>
    )
}
