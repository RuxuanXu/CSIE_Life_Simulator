import dbConnection from './DbConnection.js';

class CaseController {

    constructor() {

        //Private Members

        //Public Methods

        //Make sure there's only one object.
        if (!CaseController.instance) {
            CaseController.instance = this;
        }
        return CaseController.instance;
    }

}

const caseController = new CaseController();
Object.freeze(caseController);

export default caseController;