import React from 'react';
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH, UNORDERD, ORDERED} from "../constants";

const ParagraphWidget = ({widget, deleteWidget, moveWidgetUp, moveWidgetDown,
                             changeWidgetType, changeListText, changeListOrder, edit}) => (
    <li className="list-group-item">
        { edit && <div>
            <div className="row">
                <div className="col-4">
                    <h1>List Widget</h1>
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
                                id={"list-widget-sel" + widget.id}
                                defaultValue={LIST}
                                onChange={() => changeWidgetType(document.getElementById("list-widget-sel" + widget.id).value, widget)}>
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
                <label htmlFor="list-text"></label>
                <textarea className="form-control"
                          id={"list-text"+ widget.id}
                          placeholder="Enter one list item per line"
                          onChange={() => changeListText(widget)}/>
            </div>

            <div className="form-group">
                <select className="form-control"
                        id={"list-order-sel" + widget.id}
                        defaultValue={UNORDERD}
                        onChange={() => changeListOrder(document.getElementById("list-order-sel" + widget.id).value, widget)}>
                    <option value={UNORDERD}>Unordered List</option>
                    <option value={ORDERED}>Ordered List</option>
                </select>
            </div>

            <div className="row">
                <div className="col-1">
                    <h1>Preview</h1>
                </div>
            </div>
        </div>}
        <div>
            {UNORDERD === widget.listOrder && <ul>
                {widget.listText.split(/\r\n|\r|\n/g).map(listItem => <li>{listItem}</li>)}
            </ul>}
            {ORDERED === widget.listOrder && <ol>
                {widget.listText.split(/\r\n|\r|\n/g).map(listItem => <li>{listItem}</li>)}
            </ol>}
        </div>
    </li>
);

export default ParagraphWidget;