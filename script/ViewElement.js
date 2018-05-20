import player from './Player.js';

class ViewElement {

    constructor() {

        //Public Methods
        this.playerStateBox = function() {
            var str = "玩家狀態" + JSON.stringify(player.getData());
            var obj = { text: str };
            return obj;
        }

        this.readingButton = function() {
            var str = "讀書";
            var obj = { btn: str };
            return obj;
        }

    }

}

const viewElement = new ViewElement();
Object.freeze(viewElement);

export default viewElement;