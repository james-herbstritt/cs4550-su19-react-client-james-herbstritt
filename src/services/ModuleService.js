export default class ModuleService {
    static myInstance = null;
    static localUrl = "http://localhost:8080/api/modules/";
    static herokuUrl = "https://cs4550-su19-james-herbstritt.herokuapp.com/api/modules/";

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance = new ModuleService();
        }
        return this.myInstance;
    }

    createModule = module =>
        fetch(ModuleService.herokuUrl, {
            method: "post",
            body: JSON.stringify(module),
            headers: {
                "content-type": "application/json"
            }
        });

    createModuleForCourse = (module, courseId) =>
        fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/courses/${courseId}/modules`, {
            method: "post",
            body: JSON.stringify(module),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json());

    findAllModules = () => {
        let modules = fetch(ModuleService.herokuUrl)
            .then(response => response.json());

        return modules;
    };

    findModulesForCourse = courseId =>
        fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/courses/${courseId}/modules`)
            .then(response => response.json());

    findModuleById = moduleId =>
        fetch(ModuleService.herokuUrl + moduleId)
            .then(response => response.json());


    deleteModule = moduleId =>
        fetch(ModuleService.herokuUrl + moduleId, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });

    updateModule = (moduleId, newModule) => {
        return fetch(ModuleService.herokuUrl + moduleId, {
            method: "put",
            body: JSON.stringify(newModule),
            headers: {
                "content-type": "application/json"
            }
        })
    };

    updateModuleForCourse = (newModule, courseId, moduleId) => {
        return fetch(`https://cs4550-su19-james-herbstritt.herokuapp.com/api/courses/${courseId}/modules/${moduleId}`, {
            method: "put",
            body: JSON.stringify(newModule),
            headers: {
                "content-type": "application/json"
            }
        });
    }
}