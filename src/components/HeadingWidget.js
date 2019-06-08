import React from 'react';
import {HEADING_ONE, HEADING_TWO, HEADING_THREE,
    HEADING, PARAGRAPH, LIST, IMAGE, LINK} from "../constants";

const HeadingWidget = ({widget, deleteWidget, moveWidgetUp, moveWidgetDown,
                           changeHeading, changeHeadingText, changeWidgetType, edit}) => (
    <li className="list-group-item">
        { edit && <div>
            <div className="row">
                <div className="col-4">
                    <h1>Heading Widget</h1>
                </div>
                <div className="d-flex justify-content-end col-8">
                    <button className="btn btn-info mr-1 text-dark wbdv-mvup"
                            onClick={() => moveWidgetUp(widget)}>
                        <i className="fa fa-arrow-circle-up"></i>
                    </button>
                    <button className="btn btn-info mr-1 text-dark wbdv-mvdown"
                            onClick={() => moveWidgetDown(widget)}>
                        <i className="fa fa-arrow-circle-down"></i>
                    </button>
                    <div className="form-group mr-1">
                        <select className="form-control"
                                id={"heading-widget-sel" + widget.id}
                                defaultValue={HEADING}
                                onChange={() => changeWidgetType(document.getElementById("heading-widget-sel" + widget.id).value, widget)}>
                            <option value={HEADING}>Heading</option>
                            <option value={PARAGRAPH}>Paragraph</option>
                            <option value={LIST}>List</option>
                            <option value={IMAGE}>Image</option>
                            <option value={LINK}>Link</option>
                        </select>
                    </div>
                    <button className="btn bg-danger"
                            type="button"
                            onClick={() => deleteWidget(widget.id)}>
                        <i className="fa fa-times-circle"></i>
                    </button>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="heading-text"></label>
                <input className="form-control"
                       id={"heading-text" + widget.id}
                       placeholder="Heading text"
                       onChange={() => changeHeadingText(widget)}/>
                <br/>
                <select className="form-control"
                        id="sel1">
                    <option value="" disabled defaultValue>Choose size</option>
                    <option value={HEADING_ONE} onClick={() => changeHeading(HEADING_ONE, widget)}>Heading 1</option>
                    <option value={HEADING_TWO} onClick={() => changeHeading(HEADING_TWO, widget)}>Heading 2</option>
                    <option value={HEADING_THREE} onClick={() => changeHeading(HEADING_THREE, widget)}>Heading 3</option>
                </select>
            </div>
            <div className="row">
                <div className="col-1">
                    <h1>Preview</h1>
                </div>
            </div>
        </div> }
        <div>
            {(widget.size === HEADING_ONE) && <h1>{widget.headingText}</h1>}
            {(widget.size === HEADING_TWO) && <h2>{widget.headingText}</h2>}
            {(widget.size === HEADING_THREE) && <h3>{widget.headingText}</h3>}
        </div>
    </li>
);

export default HeadingWidget;