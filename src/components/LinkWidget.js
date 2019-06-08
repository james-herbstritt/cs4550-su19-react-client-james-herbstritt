import React from 'react';
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants";

const ImageWidget = ({widget, deleteWidget, moveWidgetUp, moveWidgetDown,
                         changeWidgetType, changeLinkText, changeLinkUrl, edit}) => (
    <li className="list-group-item">
        { edit && <div>
            <div className="row">
                <div className="col-4">
                    <h1>Link Widget</h1>
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
                                id={"link-widget-sel" + widget.id}
                                defaultValue={LINK}
                                onChange={() => changeWidgetType(document.getElementById("link-widget-sel" + widget.id).value, widget)}>
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
                <label htmlFor={"link-text" + widget.id }></label>
                <input className="form-control"
                       id={"link-text"+ widget.id}
                       placeholder="Link Text"
                       onChange={() => changeLinkText(document.getElementById("link-text" + widget.id).value ,widget)}/>
            </div>

            <div className="form-group">
                <label htmlFor={"link-url" + widget.id}></label>
                <input className="form-control"
                       id={"link-url" + widget.id}
                       placeholder="Link Url"
                       onChange={() => changeLinkUrl(document.getElementById("link-url" + widget.id).value, widget)}/>
            </div>
            <div className="row">
                <div className="col-1">
                    <h1>Preview</h1>
                </div>
            </div>
        </div> }
        <div>
            <a href={widget.linkUrl}>{widget.linkText}</a>
        </div>
    </li>
);

export default ImageWidget;