"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WallClockManager = void 0;
const Util_1 = require("../Util");
const vscode_1 = require("vscode");
const TimeSummaryData_1 = require("../storage/TimeSummaryData");
const KpmManager_1 = require("./KpmManager");
const SECONDS_INTERVAL = 30;
const CLOCK_INTERVAL = 1000 * SECONDS_INTERVAL;
class WallClockManager {
    constructor() {
        this._wctime = 0;
        this.initTimer();
    }
    static getInstance() {
        if (!WallClockManager.instance) {
            WallClockManager.instance = new WallClockManager();
        }
        return WallClockManager.instance;
    }
    initTimer() {
        const kpmMgr = KpmManager_1.KpmManager.getInstance();
        this._wctime = Util_1.getItem("wctime") || 0;
        setInterval(() => {
            // If the window is focused
            if (vscode_1.window.state.focused || kpmMgr.hasKeystrokeData()) {
                // set the wctime (deprecated, remove one day when all plugins use time data info)
                this._wctime = Util_1.getItem("wctime") || 0;
                this._wctime += SECONDS_INTERVAL;
                Util_1.setItem("wctime", this._wctime);
                // update the file info file
                TimeSummaryData_1.incrementEditorSeconds(SECONDS_INTERVAL);
            }
        }, CLOCK_INTERVAL);
    }
    getHumanizedWcTime() {
        return Util_1.humanizeMinutes(this._wctime / 60);
    }
    getWcTimeInSeconds() {
        return this._wctime;
    }
}
exports.WallClockManager = WallClockManager;
//# sourceMappingURL=WallClockManager.js.map