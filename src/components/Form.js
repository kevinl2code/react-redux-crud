import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions'

class Form extends React.Component {
    state = { fieldValue: '', error: false }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.fieldValue.length < 2) {
            return this.setState({ error: true })
        }
        this.props.createTodo(this.state.fieldValue)
        this.setState({ fieldValue: '', error: false })
    }

    render() {
        return(
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Enter Todo</label>
                    <input 
                        type="text" 
                        name="todo" 
                        value={this.state.fieldValue} 
                        onChange={(e) => this.setState({ fieldValue: e.target.value })}
                    />
                    <div 
                        className="ui pointing red basic label" 
                        style={!this.state.error ? { display: "none"} : { display: "" }}
                    >
                        Please enter a value
                    </div>
                </div>
            </form>
        )
    }
}

export default connect(null, { createTodo: createTodo })(Form)