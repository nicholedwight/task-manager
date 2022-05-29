import React from 'react';
import './scss/Taskitem.scss';

const Taskitem = (props) => {
    const {id, content} = props;
    return (
        <li className="task-item">
            {content}
            <label className="task-label" htmlFor={`checkbox-${id}`}>
                <input type="checkbox" />
            </label>
        </li>
    )
}

export default Taskitem;