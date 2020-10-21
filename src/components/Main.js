import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Form from './Form'
import DeleteButton from './DeleteButton'
import Checkbox from './CheckBox'

const Main = (props) => {
    const renderTodos = () => props.todos.map((todo) => {
        return(
            <div className="ui grid" key={todo.id}>
                <div className="four wide column"><Checkbox todo={todo} /></div>
                <div className="four wide column">{todo.todoText}</div>
                <div className="four wide column">
                    <Link to={`edit?id=${todo.id}`} className="ui primary button">Edit</Link>
                </div>
                <div className="four wide column"><DeleteButton id={todo.id} /></div>
            </div>
        )
    })

    return(
        <div className="ui container">
            <Form />
            {renderTodos()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(Main)