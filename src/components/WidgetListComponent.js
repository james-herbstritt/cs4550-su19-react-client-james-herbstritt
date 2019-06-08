import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './WidgetListComponentStyle.css';
import {HEADING, PARAGRAPH, LIST, IMAGE, LINK} from "../constants";
import HeadingWidget from './HeadingWidget';
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget"
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

export default class WidgetListComponent  extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-end mb-2">
                    <button className="btn btn-success mr-1"
                            onClick={() => this.props.saveWidgets(this.props.widgets)}>
                        Save
                    </button>
                    <button className="btn btn-primary"
                            onClick={this.props.previewWidgets /* just some onclick hide some class in the css */}>
                        Preview
                    </button>
                </div>
                <ul className="list-group wbdv-hide-first wbdv-hide-last">
                    {this.props.widgets.map(widget => {
                        switch (widget.widgetType) {
                            case HEADING:
                                return <HeadingWidget
                                    key={widget.id}
                                    widget={widget}
                                    edit={this.props.edit}
                                    deleteWidget={this.props.deleteWidget}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    changeHeading={this.props.changeHeading}
                                    changeHeadingText={this.props.changeHeadingText}
                                    changeWidgetType={this.props.changeWidgetType}/>;
                            case PARAGRAPH:
                                return <ParagraphWidget
                                    key={widget.id}
                                    widget={widget}
                                    edit={this.props.edit}
                                    deleteWidget={this.props.deleteWidget}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    changeWidgetType={this.props.changeWidgetType}
                                    changeParagraphText={this.props.changeParagraphText}/>;
                            case LIST:
                                return <ListWidget
                                    key={widget.id}
                                    widget={widget}
                                    edit={this.props.edit}
                                    deleteWidget={this.props.deleteWidget}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    changeWidgetType={this.props.changeWidgetType}
                                    changeListText={this.props.changeListText}
                                    changeListOrder={this.props.changeListOrder}/>;
                            case IMAGE:
                                return <ImageWidget
                                    key={widget.id}
                                    widget={widget}
                                    edit={this.props.edit}
                                    deleteWidget={this.props.deleteWidget}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    changeWidgetType={this.props.changeWidgetType}
                                    changeImageText={this.props.changeImageText}/>;
                            case LINK:
                                return <LinkWidget
                                    key={widget.id}
                                    widget={widget}
                                    edit={this.props.edit}
                                    deleteWidget={this.props.deleteWidget}
                                    moveWidgetDown={this.props.moveWidgetDown}
                                    moveWidgetUp={this.props.moveWidgetUp}
                                    changeWidgetType={this.props.changeWidgetType}
                                    changeLinkText={this.props.changeLinkText}
                                    changeLinkUrl={this.props.changeLinkUrl}/>;

                            default:
                                return <HeadingWidget key={widget.id}
                                                      widget={widget}
                                                      edit={this.props.edit}
                                                      deleteWidget={this.props.deleteWidget}
                                                      moveWidgetDown={this.props.moveWidgetDown}
                                                      moveWidgetUp={this.props.moveWidgetUp}
                                                      changeHeading={this.props.changeHeading}
                                                      changeHeadingText={this.props.changeHeadingText}
                                                      changeWidgetType={this.props.changeWidgetType}
                                                      changeParagraphText={this.props.changeParagraphText}/>;
                        }
                    })}
                </ul>
                <br/>
                {
                    this.props.edit &&
                    <button className="btn btn-primary btn-block"
                        onClick={this.props.createWidget}>
                    <i className="fa fa-plus-circle"></i>
                </button>
                }
            </div>
        )
    }
}
