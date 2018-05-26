import sceneManager from './SceneManager.js';

function mainLoop(){
    sceneManager.renderScene();
}

setInterval(mainLoop,500);

function execute(){
    console.log("The button is triggered.");
}