//interface
class TextRenderer {

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

const textRenderer = new TextRenderer();
Object.freeze(textRenderer);

export default textRenderer;