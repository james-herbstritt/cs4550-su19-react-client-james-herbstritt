export default class WidgetService {
    static myInstance = null;
    static localUrl = "http://localhost:8080/api/widgets/";
    static herokuUrl = "https://cs4550-su19-james-herbstritt.herokuapp.com/api/widgets/";
    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget =>
        fetch(WidgetService.herokuUrl, {
            method: "post",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        });

    findAllWidgets = () =>
        fetch(WidgetService.herokuUrl)
            .then(response => response.json());

    findWidgetById = widgetId =>
        fetch(WidgetService.herokuUrl + widgetId)
            .then(response => response.json());

    deleteWidget = widgetId =>
        fetch(WidgetService.herokuUrl + widgetId, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });

    udpateWidget = (widgetId, newwidget) => {
        return fetch(WidgetService.herokuUrl + widgetId, {
            method: "put",
            body: JSON.stringify(newwidget),
            headers: {
                "content-type": "application/json"
            }
    })};

    saveWidgets = widgets => {
        return fetch(WidgetService.herokuUrl, {
            method: "put",
            body: JSON.stringify(widgets),
            headers: {
                "content-type": "application/json"
            }
    }).then(response => response.json())};
}