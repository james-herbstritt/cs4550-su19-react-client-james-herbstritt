import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleListItem from './ModuleListItem'

const ModuleList = ({modules, selectModule, selectedModule, deleteModule}) =>
    <ul className="list-group">
        {
            modules.map((module, key) => <ModuleListItem module={module}
                                                         key={key}
                                                         selectModule={selectModule}
                                                         selectedModule={selectedModule}
                                                         deleteModule={deleteModule}/>)}
    </ul>;

export default ModuleList;
