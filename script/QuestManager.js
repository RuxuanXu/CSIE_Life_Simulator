import exampleQuestion from './Quest.js';

class QuestManager {

    constructor() {

        var quests = [];

        //Public Methods
        this.getQuest = function() {
            var list = [];
            for (var i in quests) {
                list.push(quests[i].getData());

            }
            return list;
        }

        this.getRandomQuest = function() {
            var rand = Math.floor((Math.random() * quests.length));
            return quests[rand].getData();
        }

        this.addQuest = function(obj) {
            quests.push(obj);
        }
    }

}

const questManager = new QuestManager();
Object.freeze(questManager);
questManager.addQuest(exampleQuestion);

export default questManager;