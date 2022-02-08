import deleteOfList from "./delete.js";
import edit from "./edit.js";
export default class List {
    constructor(
    //seleccionar elementos del DOM a usar
    content = document.querySelector("#content")) {
        this.content = content;
    }
    peliTemplate(peli) {
        return `<article class="peli-item" id="peli-${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="description">${peli.description}</p>

            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>`;
    }
    show(pelis) {
        //Vaciar dom del contenedor de peliculas
        this.content.innerHTML = "";
        //Recorrer y mostrar los objetos/peliculas del localstorage
        pelis.forEach((peli) => {
            this.content.innerHTML += this.peliTemplate(peli);
        });
        //funcionalidad botones de borrado
        deleteOfList();
        //funcionalidad botones de edicion
        edit();
    }
}
