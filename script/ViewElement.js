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
                "<h5>" + title + "</h5>" +
                // button(txt, "missionBtn", name, func) +
                // "<div id=\"progress\">" +
                //"<div id=\"bar\"></div>" +
                // "</div></div>";
                "</div>";
            return str;
        }

        //Public Methods
        this.gameChoice = function() {
            var str = "<div class=\"game_choose\">" +
                button("SAVE", "menuBtn", "save", "window.triggerEvent('save')") +
                button("LOAD", "menuBtn", "load", "window.triggerEvent('load')") +
                button("2x", "menuBtn", "2x", "window.triggerEvent('2x')") +
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
                str += mission(missions[i], "成長", missions[i], "window.triggerEvent('upgrade')");
            }
            str += "</div>";
            return str;
        }


    }
}

const viewElement = new ViewElement();
Object.freeze(viewElement);

export default viewElement;