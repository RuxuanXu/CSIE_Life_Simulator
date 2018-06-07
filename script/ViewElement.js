import player from './Player.js';

class ViewElement {

    constructor() {

        var playerStatus = function() {
            var money = JSON.stringify(player.getData().money);
            var point = JSON.stringify(player.getData().point);
            var health = JSON.stringify(player.getData().health);
            var str = "<div class=\"player\">" +
                "HP: " + health +
                "<br>SP: " + point +
                "<br>Money: " + money +
                "<br></div>";
            return str;
        }

        var itemBox = function() {
            var str = "<div class=\"item\">" +
                "書籍1" +
                "<br> 書籍2" +
                "<br> 麵包" +
                "<br></div>";
            return str;
        }

        var button = function(txt, className, name, func) {
            var str = "<button type=\"button\"" +
                "class=\"" + className + "\"" +
                "name=\"" + name + "\"" +
                "onclick=\"" + func + "\"" +
                ">" + txt + "</button>";
            return str;
        }

        var mission = function(title, txt, name, func) {
            var str = "<div class=\"box\">" +
                "<div class=\"missionText\">" + title + "</div>" +
                "<div class=\"progress\">" +
                "<div class=\"bar\"></div>" +
                "</div>" + button(txt, "missionBtn", name, func) +
                "</div>";
            return str;
        }

        //Public Methods
        this.gameChoice = function() {
            var str = "<div class=\"game_choose\">" +
                button("SAVE", "menuBtn", "save", "window.triggerEvent('save')") +
                button("LOAD", "menuBtn", "load", "window.triggerEvent('load')") +
                button("關燈", "menuBtn", "light", "window.triggerEvent('light')") +
                button("RANK", "menuBtn", "rank", "window.triggerEvent('rank')") +
                "</div>";
            return str;
        }

        this.gameInfo = function() {
            var str = playerStatus() + itemBox();
            return str;
        }

        this.sceneChoice = function() {
            var str = "<div class=\"scene_choose\">" +
                button("日常", "sceneBtn", "life", "window.triggerEvent('life')") +
                button("技能", "sceneBtn", "skill", "window.triggerEvent('skill')") +
                button("商店", "sceneBtn", "shop", "window.triggerEvent('shop')") +
                "</div>";
            return str;
        }

        this.missionList = function() {
            var missions = player.getData().missions;
            var str = "<div class=\"mission\">";
            for (var i in missions) {
                str += mission(missions[i], "執行", missions[i], "window.triggerEvent('do')");
                str += "<div style=\"line-height:50%;\"><br></div>";
            }
            str += "</div>";
            return str;
        }


    }
}

const viewElement = new ViewElement();
Object.freeze(viewElement);

export default viewElement;