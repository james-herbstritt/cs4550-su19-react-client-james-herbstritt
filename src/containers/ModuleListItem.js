import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const ModuleListItem = ({module, selectModule, selectedModule}) =>
    <li className={module === selectedModule ?
        "list-group-item active" :
        "list-group-item"}
        onClick={() => selectModule(module)}>
        {module.title}
    </li>;

export default ModuleListItem;