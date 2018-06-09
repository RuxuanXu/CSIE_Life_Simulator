//interface
class WebStorage {

    constructor() {

        //Public Methods
        this.storeCache = function(key, data) {
            localStorage.setItem(JSON.stringify(key), JSON.stringify(data));
        }

        this.getCache = function(key) {
            return localStorage.getItem(JSON.stringify(key));
        }

    }

}

const webStorage = new WebStorage();
Object.freeze(webStorage);

export default webStorage;