import './jquery-3.3.1.min.js';
var $ = window.$

//interface
class Renderer {

    constructor() {

        var div = 0;
        //Private Methods

        function append(str) {
            div = document.createElement("div");
            div.id = "id";
            $('#id').html(str);
            div.id = '';
            $('#game').append(div);
            return div;
        }

        function editDiv(div, str) {
            div.id = "id";
            $('#id').html(str);
            div.id = '';
            return div;
        }

        //Public Methods
        this.drawElement = function(div, str) {
            if (!div) return append(str);
            return editDiv(div, str);
        }
    }

}

const renderer = new Renderer();
Object.freeze(renderer);

export default renderer;