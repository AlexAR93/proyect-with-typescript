import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import search from './modules/search.js';
export default class App{

    constructor(
        //Inicializacion propiedades
        public add=new Add(),
        public list=new List(),
        public storage=new Storage()
    ){}
    load(){
        //Añadir pelicula
        this.add.save()

        //Conseguir array objetos localStorage
        const pelis= this.storage.getData();
        
        //listar peliculas
        this.list.show(pelis)
        //Buscar peliculas
        search()
    }
}