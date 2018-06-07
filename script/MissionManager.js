class MissionManager {

    constructor() {

        //Private Members
        var missions = [];

        //Private Methods

        //Public Methods
        this.getMissions = function() {
            return missions;
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
missionManager.addMission("上學");
missionManager.addMission("工作");
missionManager.addMission("吃飯");
missionManager.addMission("睡覺");

export default missionManager;