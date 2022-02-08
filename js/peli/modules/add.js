import Storage from "./storage.js";
import List from "./list.js";
export default class Add {
    constructor(
    //Crear objetos
    storage = new Storage(), list = new List(), 
    //Conseguir elementos del DOM a utilizar
    title_field = document.querySelector("#tittle"), description_field = document.querySelector("#description"), save_btn = document.querySelector("#save")) {
        this.storage = storage;
        this.list = list;
        this.title_field = title_field;
        this.description_field = description_field;
        this.save_btn = save_btn;
    }
    save() {
        var _a;
        (_a = this.save_btn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
            var _a, _b;
            e.preventDefault();
            //Conseguir datos actualiazdos
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);
            //Datos a guardar
            let title = (_a = this.title_field) === null || _a === void 0 ? void 0 : _a.value;
            let description = (_b = this.description_field) === null || _b === void 0 ? void 0 : _b.value;
            //pequeña validación
            if (this.title_field != "" || this.description_field != "") {
                //Crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                };
                //Anadir al array de objetos
                pelis.push(peli);
                //Guardar en el localstorage
                this.storage.save(pelis);
                //Actualizar el listado
                this.list.show(pelis);
            }
            else {
                alert("introduce bien los datos en el formulario!");
            }
            console.log("acabas de enviar el formulario de add", title, description);
            return false;
        });
    }
}
