"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const Firestore_1 = require("./Firestore");
const Authentication_1 = require("./Authentication");
const Constants_1 = require("./Constants");
/**
 * prompts the user to enter a team name and updates the firebase 2
 */
function createAndJoinTeam() {
    return __awaiter(this, void 0, void 0, function* () {
        const newTeamName = yield vscode_1.window
            .showInputBox({ placeHolder: "Enter a new team name" })
            .then((teamName) => __awaiter(this, void 0, void 0, function* () {
            if (teamName == undefined) {
                vscode_1.window.showInformationMessage('Please enter a valid team name!');
                return;
            }
            Firestore_1.addNewTeamToDbAndJoin(teamName);
        }));
    });
}
exports.createAndJoinTeam = createAndJoinTeam;
/**
 * returns the cached team name and id
 */
function getTeamNameAndTeamId() {
    const ctx = Authentication_1.getExtensionContext();
    if (ctx == undefined)
        return;
    const teamName = ctx.globalState.get(Constants_1.GLOBAL_STATE_USER_TEAM_NAME);
    const teamId = ctx.globalState.get(Constants_1.GLOBAL_STATE_USER_TEAM_ID);
    if (teamName == undefined || teamId == undefined) {
        vscode_1.window.showInformationMessage('No team info found.');
    }
    else {
        vscode_1.window.showInformationMessage('Your team name: ' + teamName + '\nYour team id: ' + teamId);
    }
}
exports.getTeamNameAndTeamId = getTeamNameAndTeamId;
//# sourceMappingURL=Team.js.map