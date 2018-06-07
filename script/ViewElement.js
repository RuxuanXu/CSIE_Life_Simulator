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

        var button = function(txt, className, func) {
            var str = "<button type=\"button\"" +
                "class=\"" + className + "\"" +
                "onclick=\"" + func + "\"" +
                ">" + txt + "</button>";
            return str;
        }

        var mission = function(title, txt, id, func) {
            var str = "<div class=\"box\">" +
                "<div class=\"missionText\">" + title + "</div>" +
                progressBar(id) +
                "</div>" + button(txt, "missionBtn", func) +
                "</div>";
            return str;
        }

        var progressBar = function(id) {
            var str = "<div class=\"progress\">" +
                "<div class=\"bar\" id=\"" + id + "\"></div>";
            return str;
        }

        //Public Methods
        this.gameChoice = function() {
            var str = "<div class=\"game_choose\">" +
                button("關於", "menuBtn", "window.triggerEvent('about')") +
                button("存檔", "menuBtn", "window.triggerEvent('save')") +
                button("讀檔", "menuBtn", "window.triggerEvent('load')") +
                button("關燈", "menuBtn", "window.triggerEvent('light')") +
                button("排行榜", "menuBtn", "window.triggerEvent('rank')") +
                button("上傳題目", "menuBtn", "window.triggerEvent('upload')") +
                "</div>";
            return str;
        }

        this.gameInfo = function() {
            var str = playerStatus() + itemBox();
            return str;
        }

        this.sceneChoice = function() {
            var str = "<div class=\"scene_choose\">" +
                button("日常", "sceneBtn", "window.triggerEvent('life')") +
                button("技能", "sceneBtn", "window.triggerEvent('skill')") +
                button("商店", "sceneBtn", "window.triggerEvent('shop')") +
                "</div>";
            return str;
        }

        this.missionList = function() {
            var missions = player.getMissions();
            var str = "<div class=\"mission\">";
            for (var i in missions) {
                var name = missions[i].name;
                var funcName = missions[i].funcName;
                var func = "window.triggerEvent('" + funcName + "')";
                str += mission(name, "執行", funcName, func);
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