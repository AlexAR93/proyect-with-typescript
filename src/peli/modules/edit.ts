import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear los objetos
    const storage= new Storage();
    const list=new List();

    //Conseguir datos de peliculas
    let pelis_stored=storage.getData();
    let pelis_viewed=document.querySelectorAll(".peli-item")

    //Recorrer peliculas mostradas
    pelis_viewed.forEach((peli:any)=>{
        //Seleccionar el boton de editar
        let edit_btn=peli.querySelector(".edit");

        //asignar un evento click
        edit_btn?.addEventListener("click",function(this:any){
            //Conseguir id de la peli a editar
            const peli_id=parseInt(this.getAttribute("data-id"));


            //Quitar botones
            edit_btn?.remove();
            peli.querySelector(".delete")?.remove()

            //Añadir un trozo de html debajo de los botones
            let peli_edit_html=`
                <div class="edit_form">
                    <hr>
                    <h3 class"title">Editar pelicula</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title")?.innerHTML}">
                        <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar">
                    </form>
                </div>
            `;

            peli.innerHTML+= peli_edit_html;

            //Seleccionar el boton actualizar
            let update_btn=peli.querySelector(".update");

            //aplicar evento click
            update_btn?.addEventListener("click",function(e:Event){
                e.preventDefault();
                
                //Buscar indice de la pelicula a actualizar
                let index= pelis_stored.findIndex((peli:any) => peli.id === peli_id)

                //Guardar objeto dentro del indice
                pelis_stored[index]={
                    id: peli_id,
                    title: peli.querySelector(".edited_title")?.value,
                    description:peli.querySelector(".edited_description").value
                }

                //Actualizar localstorage
                storage.save(pelis_stored);

                //Volver a mostrar listado
                list.show(pelis_stored);

                return false
            })
        })
    })

}