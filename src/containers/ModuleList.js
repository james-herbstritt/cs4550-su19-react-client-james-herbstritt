import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ModuleListItem from './ModuleListItem'


export default class ModuleList extends React.Component {
    constructor(props) {
        console.log("These are the props", props);
        super(props);
        this.state = {
            moduleName: ""
        }
    }

    moduleNameChange = event =>  this.setState({moduleName: event.target.value});

    createModule = () => this.props.createModule(this.state.moduleName);

    render() {
        console.log(this.props.modules);
        return (
            <div>
                <input className="form-control mb-1"
                       placeholder="title"
                       value ={this.state.moduleName}
                       onChange={this.moduleNameChange}/>
                <button className="btn btn-primary btn-block mb-4"
                        onClick={this.createModule}>
                    <i className="fa fa-plus-circle"></i>
                </button>
                <ul className="list-group">
                    {
                        this.props.modules.map((module, key) => <ModuleListItem module={module}
                                                                     key={key}
                                                                     selectModule={this.props.selectModule}
                                                                         selectedModule={this.props.selectedModule}
                                                                     deleteModule={this.props.deleteModule}/>)}
                </ul>
            </div>
        )
    }
}
