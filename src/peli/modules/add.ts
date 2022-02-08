import Storage from "./storage.js";
import List from "./list.js";
export default class Add {
    constructor(
        //Crear objetos
        public storage=new Storage(),
        public list=new List(),

        //Conseguir elementos del DOM a utilizar
        public  title_field:any=document.querySelector("#tittle"),
        public description_field:any=document.querySelector("#description"),
        public save_btn:any=document.querySelector("#save")
    ){}
    public save(){
        this.save_btn?.addEventListener("click",(e:Event)=>{
            e.preventDefault();
            
            //Conseguir datos actualiazdos
            let pelis= this.storage.getData();
            let lastId=this.storage.getLastId();
            console.log(pelis,lastId)
            //Datos a guardar
            let title=this.title_field?.value;
            let description=this.description_field?.value;
            
            //pequeña validación
            if(this.title_field != "" || this.description_field != ""){
                //Crear objeto a guardar
                let peli:{
                    id:number,
                    title:string,
                    description:string}={
                    id: lastId++,
                    title,
                    description
                };
                //Anadir al array de objetos
                pelis.push(peli)

                //Guardar en el localstorage
                this.storage.save(pelis)
                //Actualizar el listado
                this.list.show(pelis)

            }else{
                alert("introduce bien los datos en el formulario!")
            }
            console.log("acabas de enviar el formulario de add",title,description)
            return false
        })
    }

}