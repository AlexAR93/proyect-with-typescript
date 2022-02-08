export default class Storage {
    constructor(id = 1) {
        this.id = id;
    }
    getData() {
        let pelis = JSON.parse(localStorage.getItem('pelis'));
        if (!pelis || pelis.length < 1) {
            pelis = [
                {
                    id: 0,
                    title: "Desarrollo web",
                    description: 'victorroblesweb.es'
                }
            ];
            this.id = 1;
        }
        else {
            this.id = pelis[pelis.length - 1].id + 1;
        }
        return pelis;
    }
    getLastId() {
        return this.id;
    }
    save(data) {
        localStorage.setItem('pelis', JSON.stringify(data));
    }
}
