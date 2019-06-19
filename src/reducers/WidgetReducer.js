import React from 'react';
import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGET,
    FIND_WIDGET,
    FIND_ALL_WIDGETS,
    MOVE_WIDGET_UP,
    MOVE_WIDGET_DOWN,
    HEADING_ONE,
    CHANGE_HEADING,
    CHANGE_HEADING_TEXT,
    HEADING,
    CHANGE_WIDGET_TYPE,
    CHANGE_PARAGRAPH_TEXT,
    CHANGE_LIST_TEXT,
    UNORDERD,
    CHANGE_LIST_ORDER,
    CHANGE_IMAGE_TEXT,
    CHANGE_LINK_TEXT, CHANGE_LINK_URL, SAVE_WIDGETS, PREVIEW_WIDGETS
} from '../constants/index';

const Widgets = (state = {widgets : [], edit: true}, action) => {
  switch (action.type) {
      case CREATE_WIDGET:
          return {widgets: [...state.widgets, action.widget], edit: state.edit};

      case DELETE_WIDGET:
          let newState = JSON.stringify(state);
          newState = JSON.parse(newState);
          let dwidgets = newState.widgets.filter(widget => widget.id !== action.id);
          newState.widgets = dwidgets;
          return newState;

      case UPDATE_WIDGET:
          return {title: action.title};

      case FIND_WIDGET:
          return {
              widget: action.widget,
              edit: state.edit
          };

      case FIND_ALL_WIDGETS:
          console.log(action.widgets);
          return {
              widgets: action.widgets,
              edit: state.edit
          };

      case SAVE_WIDGETS:
          return {
              widgets : action.widgets,
              edit: state.edit
          };

      case MOVE_WIDGET_UP:
          let nextStateUp = JSON.stringify(state);
          nextStateUp = JSON.parse(nextStateUp);
          let findexUp = state.widgets.indexOf(action.widget);
          let tempUp = state.widgets[findexUp - 1];
          let tempPosUp = tempUp.position;
          tempUp.position = action.widget.position;
          action.widget.position = tempPosUp;
          nextStateUp.widgets[findexUp] = tempUp;
          nextStateUp.widgets[findexUp - 1] = action.widget;
          return nextStateUp;

      case MOVE_WIDGET_DOWN:
          let nextStateDown = JSON.stringify(state);
          nextStateDown = JSON.parse(nextStateDown);
          let findexDown = state.widgets.indexOf(action.widget);
          let tempDown = state.widgets[findexDown + 1];
          let tempPosDown = tempDown.position;
          tempDown.position = action.widget.position;
          action.widget.position = tempPosDown;
          nextStateDown.widgets[findexDown] = tempDown;
          nextStateDown.widgets[findexDown + 1] = action.widget;
          return nextStateDown;

      case CHANGE_HEADING:
          let hindex = state.widgets.indexOf(action.widget);
          let newHeadingState = JSON.stringify(state);
          newHeadingState = JSON.parse(newHeadingState);
          newHeadingState.widgets[hindex] = action.widget;
          newHeadingState.widgets[hindex].size = action.heading;
          return newHeadingState;

      case CHANGE_HEADING_TEXT:
          if(action.text === "") {
              action.text = "Default Heading"
          }
          let htindex = state.widgets.indexOf(action.widget);
          let newHeadingTextState = JSON.stringify(state);
          newHeadingTextState = JSON.parse(newHeadingTextState);
          newHeadingTextState.widgets[htindex] = action.widget;
          newHeadingTextState.widgets[htindex].headingText = action.text;
          return newHeadingTextState;

      case CHANGE_WIDGET_TYPE:
          let windex = state.widgets.indexOf(action.widget);
          let newWidgetTypeState = JSON.stringify(state);
          newWidgetTypeState = JSON.parse(newWidgetTypeState);
          newWidgetTypeState.widgets[windex] = action.widget;
          newWidgetTypeState.widgets[windex].widgetType = action.widgetType;
          return newWidgetTypeState;

      case CHANGE_PARAGRAPH_TEXT:
          if(action.text === "") {
              action.text = "Default Paragraph"
          }
          let ptindex = state.widgets.indexOf(action.widget);
          let newParagraphTextState = JSON.stringify(state);
          newParagraphTextState = JSON.parse(newParagraphTextState);
          newParagraphTextState.widgets[ptindex] = action.widget;
          newParagraphTextState.widgets[ptindex].paragraphText = action.text;
          return newParagraphTextState;

      case CHANGE_LIST_TEXT:
          if(action.text === "") {
              action.text = "Default List"
          }
          let ltindex = state.widgets.indexOf(action.widget);
          let newListTextState = JSON.stringify(state);
          newListTextState = JSON.parse(newListTextState);
          newListTextState.widgets[ltindex] = action.widget;
          newListTextState.widgets[ltindex].listText = action.text;
          return newListTextState;

      case CHANGE_LIST_ORDER:
          let oindex = state.widgets.indexOf(action.widget);
          let newListOrderState = JSON.stringify(state);
          newListOrderState = JSON.parse(newListOrderState);
          newListOrderState.widgets[oindex] = action.widget;
          newListOrderState.widgets[oindex].listOrder = action.order;
          return newListOrderState;

      case CHANGE_IMAGE_TEXT:
          if(action.text === "") {
              action.text = "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.designzzz.com%2Fwp-content%2Fuploads%2F2015%2F08%2FA-funny-stock-photo.jpg&f=1"
          }
          let itindex = state.widgets.indexOf(action.widget);
          let newImageTextState = JSON.stringify(state);
          newImageTextState = JSON.parse(newImageTextState);
          newImageTextState.widgets[itindex] = action.widget;
          newImageTextState.widgets[itindex].imageText = action.text;
          return newImageTextState;

      case CHANGE_LINK_TEXT:
          if(action.text === "") {
              action.text = "Default Link Text";
          }
          let lindex = state.widgets.indexOf(action.widget);
          let newLinkTextState = JSON.stringify(state);
          newLinkTextState = JSON.parse(newLinkTextState);
          newLinkTextState.widgets[lindex] = action.widget;
          newLinkTextState.widgets[lindex].linkText = action.text;
          return newLinkTextState;

      case CHANGE_LINK_URL:
          if(action.url === "") {
              action.url = "#"
          }
          let uindex = state.widgets.indexOf(action.widget);
          let newLinkUrlState = JSON.stringify(state);
          newLinkUrlState = JSON.parse(newLinkUrlState);
          newLinkUrlState.widgets[uindex] = action.widget;
          newLinkUrlState.widgets[uindex].linkUrl = action.url;
          return newLinkUrlState;

      case PREVIEW_WIDGETS:
          let newEditState = JSON.stringify(state);
          newEditState = JSON.parse(newEditState);
          newEditState.edit = !newEditState.edit;
          return newEditState;

      default:
          return state;
  }
};

export default Widgets;