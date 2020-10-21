import React from 'react'
import { connect } from 'react-redux'

import { toggleCompleted } from '../actions'

const CheckBox = (props) => {
    return(
        <div className="ui checkbox">
            <input type="checkbox" name="example" onChange={() => props.toggleCompleted(props.todo)}/>
            <label>Completed</label>
        </div>
    )
}

export default connect(null, { toggleCompleted })(CheckBox)