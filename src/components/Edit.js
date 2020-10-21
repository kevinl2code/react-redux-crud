import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editTodo } from '../actions'

const Edit = (props) => {
    // Need to include useEffect or switch to class based lifecycle method to redirect
    // when there's no matching todo
    
    const handleFieldValidation = () => props.todo[0].todoText.length > 2 ? { display: "none"} : { display: "" }
    const handleButtonValidation = () => props.todo[0].todoText.length > 2 ? { pointerEvents: '' } : { pointerEvents: "none" }

    return(
        <div className="ui form">
            <div className="field">
                <label>Edit Todo</label>
                <input 
                    type="text" 
                    name="todo" 
                    value={props.todo[0].todoText} 
                    onChange={(e) => props.editTodo(props.todo[0], e.target.value)}
                />
                <div 
                    className="ui pointing red basic label" 
                    style={handleFieldValidation()}
                >
                    Please enter at least 2 characters
                </div>
            </div>
            <div>
                <Link 
                    to="/" 
                    className="ui button"
                    style={handleButtonValidation()}
                >Save</Link>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    const getId =  new URLSearchParams(window.location.search).get('id')
    return {
        todo: state.todos.filter((todo) => {
            return todo.id === getId
        })
    }
}

export default connect(mapStateToProps, { editTodo })(Edit)