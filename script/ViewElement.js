import player from './Player.js';

class ViewElement {

    constructor() {

        //Public Methods
        this.playerStateBox = function() {
            var money = JSON.stringify(player.getData().money);
            var health = JSON.stringify(player.getData().health);
            var str = "<table style=\"width: 200px;\" border=\"1\">"+
            "<tr><td style=\"text-align: center;\">"+
            "玩家狀態" + 
            "</td></tr><tr style=\"height: 60px;\"><td> " +
            "金錢: " + money + 
            "<br>健康: " + health + 
            "</td></tr></table>";
            return str;
        }

        this.button = function(txt, id) {
            var str = "<button type=\"button\"" + 
            "id=\"" + id + "\"" +
            ">" + txt + "</button>";
            return str;
        }

    }

}

const viewElement = new ViewElement();
Object.freeze(viewElement);

export default viewElement;