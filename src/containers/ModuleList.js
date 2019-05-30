import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleListItem from './ModuleListItem'

const ModuleList = ({modules, selectModule, selectedModule}) =>
    <ul className="list-group">
        {
            modules.map((module, key) => <ModuleListItem module={module}
                                                         key={key}
                                                         selectModule={selectModule}
                                                         selectedModule={selectedModule}/>)}
        }
    </ul>;

export default ModuleList;
