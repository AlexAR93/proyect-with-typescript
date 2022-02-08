import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear objetos
    const storage=new Storage();
    const list=new List();

    //Datos de las peliculas disponibles
    let pelis_stored=storage.getData();
    let pelis_viewed=document.querySelectorAll(".peli-item");

    //Recorrer peliculas mostradas
    pelis_viewed.forEach(peli=>{

        //Capturar boton
        let delete_btn=<any>peli.querySelector('.delete');

        //Aplicar evento
        delete_btn.addEventListener("click",function(this:any){

            //Conseguir id de la pelicula que quiero borrar
            const peli_id=this.getAttribute("data-id")
            
            //Filtrar array para filtrar la que no quiero
            const new_pelis_stored=pelis_stored.filter((peli:any)=>peli.id!== parseInt(peli_id))

            //Actualizar datos en localstorage
            storage.save(new_pelis_stored);

            //volver a mostrar listado actualizado
            list.show(new_pelis_stored);
        })
    })
}