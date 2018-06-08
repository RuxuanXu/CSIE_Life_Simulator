import player from './Player.js';
import sceneManager from './SceneManager.js';

class ViewElement {

    constructor() {

        var playerStatus = function() {
            var money = JSON.stringify(player.getData().money);
            var point = JSON.stringify(player.getData().point);
            var health = JSON.stringify(player.getData().health);
            var str = "<div class=\"player\">" +
                "體力值: " + health +
                "<br>知識點: " + point +
                "<br>金錢: " + money +
                "</div>";
            return str;
        }

        var itemBox = function() {
            var str = "<div class=\"item\">";
            var items = player.getItems();
            for (var i in items) {
                str += items[i] + "<br>";
            }
            str += "</div>";
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

        var item = function(item) {
            var title = item.name;
            var price = item.price;
            var btnTxt = "購買" + "<div class=\"describe\">$ " + price + "</div>";
            var func = "window.triggerEvent('buy','" +
                item.name + "'," + item.price +
                ")";
            var str = "<div class=\"box\">" +
                "<div class=\"itemText\">" + title +
                "</div>" +
                button(btnTxt, "shopBtn", func) +
                "</div>";
            return str;
        }

        var skill = function(obj) {
            var title = obj.name;
            var level = obj.level;
            var str = "<div class=\"box\">" +
                "<div class=\"skillText\">" + title +
                "<br> Level " + level +
                "</div>" +
                button("升級", "skillBtn", "window.triggerEvent('upgrade')") +
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
                button("存檔", "menuBtn", "window.triggerEvent('save')") +
                button("讀檔", "menuBtn", "window.triggerEvent('load')");
            if (!sceneManager.getStyle()) {
                str += button("關燈", "menuBtn", "window.triggerEvent('light')");
            } else {
                str += button("開燈", "menuBtn", "window.triggerEvent('light')");
            }
            str += button("排行榜", "menuBtn", "window.triggerEvent('rank')") +
                "<a class=\"menuBtn\" href=\"./Database/index.html\">教師登入</a>" +
                "</div>";
            return str;
        }

        this.gameInfo = function() {
            var str = playerStatus() + itemBox();
            return str;
        }

        this.sceneChoice = function() {
            var str = "<div class=\"scene_choose\">" +
                button("任務", "sceneBtn", "window.triggerEvent('life')") +
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
                var txt = missions[i].name + "<br><div class=\"describe\">" + missions[i].description + "</div>";
                str += mission(txt, "執行", funcName, func);
                str += "<div style=\"line-height:50%;\"><br></div>";
            }
            str += "</div>";
            return str;
        }

        this.itemList = function() {
            var items = player.getShopItems();
            var str = "<div class=\"items\">";
            for (var i in items) {
                str += item(items[i]);
                str += "<div style=\"line-height:50%;\"><br></div>";
            }
            str += "</div>";
            return str;
        }

        this.skillList = function() {
            var skills = player.getSkills();
            var str = "<div class=\"skills\">";
            for (var i in skills) {
                str += skill(skills[i]);
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