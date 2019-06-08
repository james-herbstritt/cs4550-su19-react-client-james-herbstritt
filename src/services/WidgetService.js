export default class WidgetService {
    static myInstance = null;
    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }


    createWidget = widget =>
        fetch("https://cs4550-su19-james-herbstritt.herokuapp.com/api/widgets", {
            method: "post",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        });

    findAllWidgets = () =>
        fetch("https://cs4550-su19-james-herbstritt.herokuapp.com/api/widgets")
            .then(response => response.json());

    findWidgetById = widgetId =>
        fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/widgets/${widgetId}`)
            .then(response => response.json());

    deleteWidget = widgetId =>
        fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/widgets/${widgetId}`, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });

    udpateWidget = (widgetId, newwidget) => {
        return fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/widgets/${widgetId}`, {
            method: "put",
            body: JSON.stringify(newwidget),
            headers: {
                "content-type": "application/json"
            }
    })};

    saveWidgets = widgets => {
        return fetch("https://cs4550-su19-james-herbstritt.herokuapp.com/api/widgets/", {
            method: "put",
            body: JSON.stringify(widgets),
            headers: {
                "content-type": "application/json"
            }
    }).then(response => response.json())};
}