import {getOs, getVersion, getPluginId} from "../Util";
import {FileChangeInfo} from "./models";
import {processPayload} from "../managers/PayloadManager";
import Project from "./Project";

export default class KeystrokeStats {
  public source: {};
  public keystrokes: number = 0;
  public start: number = 0;
  public local_start: number = 0;
  public end: number = 0;
  public local_end: number = 0;
  public timezone: string;
  public project: Project;
  public pluginId: number;
  public version: string;
  public os: string;
  public repoContributorCount: number;
  public repoFileCount: number;
  public cumulative_editor_seconds: number = 0;
  public cumulative_session_seconds: number = 0;
  public elapsed_seconds: number = 0;
  public workspace_name: string = "";
  public hostname: string = "";
  public project_null_error: string = "";

  constructor(project: Project) {
    this.source = {};
    this.keystrokes = 0;
    this.project = project;
    this.pluginId = getPluginId();
    this.version = getVersion();
    this.os = getOs();
    this.repoContributorCount = 0;
    this.repoFileCount = 0;
    this.keystrokes = 0;
    this.cumulative_editor_seconds = 0;
    this.cumulative_session_seconds = 0;
    this.elapsed_seconds = 0;
    this.project_null_error = "";
    this.hostname = "";
    this.workspace_name = "";
  }

  getCurrentStatsData() {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * check if the payload should be sent or not
   */
  hasData() {
    const keys = Object.keys(this.source);
    if (!keys || keys.length === 0) {
      return false;
    }

    // delete files that don't have any kpm data
    let foundKpmData = false;
    if (this.keystrokes > 0) {
      foundKpmData = true;
    }

    // Now remove files that don't have any keystrokes that only
    // have an open or close associated with them. If they have
    // open AND close then it's ok, keep it.
    let keystrokesTally = 0;
    keys.forEach((key) => {
      const data: FileChangeInfo = this.source[key];

      const hasOpen = data.open > 0;
      const hasClose = data.close > 0;
      // tally the keystrokes for this file
      data.keystrokes =
        data.add +
        data.paste +
        data.delete +
        data.linesAdded +
        data.linesRemoved;
      const hasKeystrokes = data.keystrokes > 0;
      keystrokesTally += data.keystrokes;
      if (
        (hasOpen && !hasClose && !hasKeystrokes) ||
        (hasClose && !hasOpen && !hasKeystrokes)
      ) {
        // delete it, no keystrokes and only an open
        delete this.source[key];
      } else if (!foundKpmData && hasOpen && hasClose) {
        foundKpmData = true;
      }
    });

    if (keystrokesTally > 0 && keystrokesTally !== this.keystrokes) {
      // use the keystrokes tally
      foundKpmData = true;
      this.keystrokes = keystrokesTally;
    }
    return foundKpmData;
  }

  /**
   * send the payload
   */
  async postData(sendNow: boolean = false) {
    processPayload(this, sendNow);
  }
}
