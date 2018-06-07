import { study, work, eat, sleep } from './Mission.js';

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
missionManager.addMission(sleep);

export default missionManager;