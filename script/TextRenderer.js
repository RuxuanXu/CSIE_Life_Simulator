//interface
class TextRenderer {

    constructor() {

        //Private Methods
        var appendToBody = function(element, str) {
            var text = document.createTextNode(str);
            element.appendChild(text);
            document.body.appendChild(element);
        }

        //Public Methods
        this.drawText = function(str) {
            var para = document.createElement("p");
            appendToBody(para, str);
        }

        this.drawButton = function(str) {
            var btn = document.createElement("Button");
            appendToBody(btn, str);
        }
    }

}

const textRenderer = new TextRenderer();
Object.freeze(textRenderer);

export default textRenderer;