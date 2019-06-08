import React from 'react';
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants";

const ImageWidget = ({widget, deleteWidget, moveWidgetUp, moveWidgetDown,
                             changeWidgetType, changeImageText, edit}) => (
    <li className="list-group-item">
        { edit && <div>
            <div className="row">
                <div className="col-4">
                    <h1>Image Widget</h1>
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
                                id={"image-widget-sel" + widget.id}
                                defaultValue={IMAGE}
                                onChange={() => changeWidgetType(document.getElementById("image-widget-sel" + widget.id).value, widget)}>
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
                <label htmlFor={"image-text" + widget.id }></label>
                <input className="form-control"
                       id={"image-text"+ widget.id}
                       placeholder="Put URL here"
                       onChange={() => changeImageText(document.getElementById("image-text" + widget.id).value ,widget)}/>
            </div>

            <div className="row">
                <div className="col-1">
                    <h1>Preview</h1>
                </div>
            </div>
        </div> }
        <div>
            <img src={widget.imageText}/>
        </div>
    </li>
);

export default ImageWidget;