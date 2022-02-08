import List from "./list.js";
import Storage from "./storage.js";

export default function(){
    //Crear los objetos
    const storage = new Storage();
    const list= new List();

    //Conseguir datos de las peliculas
    let content:any = document.querySelector("#content");
    let search_btn = document.querySelector("#search")


    //Aplicar evento al formulario de busqueda
    search_btn?.addEventListener("click",(e:Event)=>{
        e.preventDefault();
        //Conseguir el texto introducido en el campo
        let wanted:any= document.querySelector("#search_field");
        wanted!="null"?wanted=wanted.value:false;
        //Conseguir listado actualizados
        let pelis_stored=storage.getData();
        //Aplicar flistro para encontrar pelicula
        const new_pelis=pelis_stored.filter((peli:any)=>{
            return peli.title.toLowerCase().includes(wanted.toLowerCase())
        });

        //mostrar listado de coincidencias
        if(new_pelis.length<=0){
            content.innerHTML="<div><h2>No hay coincidencias</h2></div>"
        }else{
            list.show(new_pelis)
        }
    })

}