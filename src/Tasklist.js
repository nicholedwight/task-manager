import React from 'react';
import Taskitem from './Taskitem';
import './scss/Tasklist.scss';
import Taskinput from './Taskinput';

const Tasklist = (props) => {
    const {id, content} = props;
    return (
        <section className="task-container">
            <Taskinput />
            <ul className="task-list">
                <Taskitem id={id} content={content} />
            </ul>
        </section>
    );

};

export default Tasklist;