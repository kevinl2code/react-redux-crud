import React from 'react'
import { connect } from 'react-redux'

import { deleteTodo } from '../actions/'

const DeleteButton = (props) => {
    return(
        <div className="ui primary button" onClick={() => props.deleteTodo(props.id)}>
            Delete
        </div>
    )
}

export default connect(null, { deleteTodo: deleteTodo })(DeleteButton)

