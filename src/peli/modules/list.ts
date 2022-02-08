import deleteOfList from "./delete.js";
import edit from "./edit.js";
export default class List{
    constructor(
        //seleccionar elementos del DOM a usar
        public content:any=document.querySelector("#content")
    ){}
    
    peliTemplate(peli:any){
        return `<article class="peli-item" id="peli-${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="description">${peli.description}</p>

            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>`;
    }

    show(pelis:any){
        //Vaciar dom del contenedor de peliculas
        this.content.innerHTML="";

        //Recorrer y mostrar los objetos/peliculas del localstorage
        pelis.forEach((peli:any) => {
            this.content.innerHTML+=this.peliTemplate(peli)
        });

        //funcionalidad botones de borrado
        deleteOfList();
        
        //funcionalidad botones de edicion
        edit()
    }
}