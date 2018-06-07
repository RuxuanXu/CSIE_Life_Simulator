import { study, work, eat } from './Mission.js';

class MissionManager {

    constructor() {

        //Private Members
        var missions = [];

        //Private Methods

        //Public Methods
        this.getMissions = function() {
            var list = [];
            for (var i in missions) {
                list.push(missions[i].getData());
            }
            return list;
        }

        this.addMission = function(mission) {
            missions.push(mission);
        }

        this.isActive = function(name) {
            for (var i in missions) {
                if (missions[i].getData().funcName == name)
                    return missions[i].getData().isActive;
            }
        }

        this.setActive = function(name, val) {
            for (var i in missions) {
                if (missions[i].getData().funcName == name)
                    missions[i].setActive(val);
            }
        }

        this.getProgress = function(name) {
            for (var i in missions) {
                if (missions[i].getData().funcName == name)
                    return missions[i].getData().progress;
            }
        }

        this.setProgress = function(name, val) {
            for (var i in missions) {
                if (missions[i].getData().funcName == name)
                    missions[i].setProgress(val);
            }
        }

        //Make sure there's only one object.
        if (!MissionManager.instance) {
            MissionManager.instance = this;

        }

        return MissionManager.instance;

    }

}

const missionManager = new MissionManager();
Object.freeze(missionManager);
missionManager.addMission(study);
missionManager.addMission(work);
missionManager.addMission(eat);

export default missionManager;