import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const ModuleListItem = ({module, selectModule, selectedModule, deleteModule, editModule}) =>
    <li className={module === selectedModule ?
        "list-group-item active text-center" :
        "list-group-item text-center"}
        onClick={() => selectModule(module)}>
        {module.title}
        <span className="float-right">
            <button className="btn bg-success mr-1"
                    type="button"
                    onClick={editModule}>
                <i className="fa fa-pencil"></i>
            </button>
            <button className="btn bg-danger"
                    type="button"
                    onClick={() => deleteModule(module.id)}>
                <i className="fa fa-times-circle"></i>
            </button>
        </span>
    </li>;

export default ModuleListItem;