import sceneManager from './SceneManager.js';
import eventHandler from './EventHandler.js';
import './jquery-3.3.1.min.js';
var $ = window.$

eventHandler.addFuncToWindow();

function resizeWindow() {
    document.getElementById("game").style.height = "100%";
    var height = $('body').height();
    var width = $('body').width();
    if (width < $('#game').height() * 0.6) {
        document.getElementById("game").style.width = "100%";
    } else {
        document.getElementById("game").style.width = $('#game').height() * 0.6 + "px";
    }
}

function mainLoop() {
    resizeWindow();
    sceneManager.renderScene();
}

setInterval(mainLoop, 20);