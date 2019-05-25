function Course(id, title, modules) {
    this.id = id;
    this.title = title;
    this.modules = modules;

    this.setId = setId;
    this.getId = getId;
    this.setTitle = setTitle;
    this.getTitle = getTitle;
    this.setModules = setModules;
    this.getModules = getModules;

    function setId(id) {
        this.id = id;
    }
    function getId() {
        return this.id;
    }
    function setTitle(title) {
        this.title = title;
    }
    function getTitle() {
        return this.title;
    }
    function setModules(modules) {
        this.modules = modules;
    }
    function getModules() {
        return this.modules;
    }
}