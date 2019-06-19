import React from 'react';
import WidgetListComponent from '../components/WidgetListComponent';
import {connect} from 'react-redux';
import {
    CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET,
    FIND_WIDGET, FIND_ALL_WIDGETS, MOVE_WIDGET_DOWN,
    MOVE_WIDGET_UP, CHANGE_HEADING, CHANGE_HEADING_TEXT,
    CHANGE_WIDGET_TYPE, CHANGE_PARAGRAPH_TEXT, CHANGE_LIST_TEXT,
    CHANGE_LIST_ORDER, CHANGE_IMAGE_TEXT, CHANGE_LINK_TEXT,
    CHANGE_LINK_URL, HEADING, UNORDERD, SAVE_WIDGETS, PREVIEW_WIDGETS
} from "../constants/index";
import WidgetService from '../services/WidgetService';
let widgetService = WidgetService.getInstance();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    edit: state.edit
});

const propertyToDispatchMapper = dispatch => ({
    updateWidget: (widgetId, widget) => {
    },

    createWidget: position => {
        let widget = {
            widgetType: HEADING,
            headingText: "Default Heading",
            size: 1,
            listText: "Default List Item",
            listOrder: UNORDERD,
            paragraphText: "Default Paragraph",
            linkText: "Link Text",
            imageText: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.designzzz.com%2Fwp-content%2Fuploads%2F2015%2F08%2FA-funny-stock-photo.jpg&f=1",
            width: 0,
            height: 0,
            cssClass: "",
            style: "",
            position: position};
        console.log("creating widget ", widget);
        widgetService
            .createWidget(widget)
            .then(dispatch({
                type: CREATE_WIDGET,
                widget: widget
            }))
    },

    deleteWidget: id => widgetService.deleteWidget(id)
        .then(() => dispatch({
        type: DELETE_WIDGET,
        id: id
    })),

    findWidget: id => widgetService
        .findWidget(id)
        .then(widget => dispatch({type: FIND_WIDGET,
            widget: widget})),

    findAllWidgets: () =>  {
        console.log("finding widgets");
        widgetService
        .findAllWidgets()
        .then(widgets =>
            dispatch({type: FIND_ALL_WIDGETS,
                      widgets: widgets}))},

    saveWidgets: widgets => {
        console.log("saving widgets");
        widgetService
            .saveWidgets(widgets)
            .then(widgets => dispatch({
                type: SAVE_WIDGETS,
                    widgets: widgets
                })
            )
},

    moveWidgetUp: widget => dispatch({type: MOVE_WIDGET_UP,
                                  widget: widget}),

    moveWidgetDown: widget => dispatch({type:MOVE_WIDGET_DOWN,
                                    widget: widget}),

    changeHeading: (heading, widget) => dispatch({
        type:CHANGE_HEADING,
        heading: heading,
        widget: widget
    }),

    changeHeadingText: widget => dispatch({
        type:CHANGE_HEADING_TEXT,
        text: document.getElementById("heading-text" + widget.id).value,
        widget: widget
    }),

    changeWidgetType: (widgetType, widget) => dispatch({
        type:CHANGE_WIDGET_TYPE,
        widgetType: widgetType,
        widget: widget
    }),

    changeParagraphText: widget => dispatch({
        type:CHANGE_PARAGRAPH_TEXT,
        text: document.getElementById("paragraph-text" + widget.id).value,
        widget: widget
    }),

    changeListText: widget => dispatch({
        type:CHANGE_LIST_TEXT,
        text: document.getElementById("list-text" + widget.id).value,
        widget: widget
    }),

    changeListOrder: (order, widget) => dispatch({
        type:CHANGE_LIST_ORDER,
        order: order,
        widget: widget
    }),

    changeImageText: (text, widget) => dispatch({
        type:CHANGE_IMAGE_TEXT,
        text: text,
        widget: widget
    }),

    changeLinkText: (text, widget) => dispatch({
        type:CHANGE_LINK_TEXT,
        text: text,
        widget: widget
    }),

    changeLinkUrl: (url, widget) => dispatch({
        type:CHANGE_LINK_URL,
        url: url,
        widget: widget
    }),

    previewWidgets:() => dispatch({
        type:PREVIEW_WIDGETS
    })
});


const WidgetListContainer = connect
(stateToPropertyMapper, propertyToDispatchMapper)(WidgetListComponent);
export default WidgetListContainer;