import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const ModuleListItem = ({module, selectModule, selectedModule, deleteModule}) =>
    <li className={module === selectedModule ?
        "list-group-item active text-center" :
        "list-group-item text-center"}
        onClick={() => selectModule(module)}>
        {module.title}
        <span className="float-right">
            <button className="btn bg-success wbdv-edit mr-1"
                    type="button">
                <i className="fa fa-pencil"></i>
            </button>
            <button className="btn bg-danger wbdv-delete"
                    type="button"
                    onClick={() => deleteModule(module.id)}>
                <i className="fa fa-times-circle"></i>
            </button>
        </span>
    </li>;

export default ModuleListItem;