//interface
class Renderer {

    constructor() {

        //Private Methods
        function append(str) {
            var div = document.createElement("div");
            div.innerHTML = str;
            document.querySelector("body").appendChild(div.firstChild);
        }

        //Public Methods
        this.drawElement = function(str) {
            append(str);
        }
    }

}

const renderer = new Renderer();
Object.freeze(renderer);

export default renderer;