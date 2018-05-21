import player from './Player.js';

class ViewElement {

    constructor() {

        //Public Methods
        this.playerStateBox = function() {
            var str = "<p>玩家狀態" + JSON.stringify(player.getData()) + "</p>";
            return str;
        }

        this.readingButton = function() {
            var str = "<button type=\"button\">讀書</button>";
            return str;
        }

    }

}

const viewElement = new ViewElement();
Object.freeze(viewElement);

export default viewElement;