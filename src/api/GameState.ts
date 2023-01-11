import { EventHandler } from "../interfaces/EventHandler";


export class GameState {

    static instance:GameState;

    private handlers:EventHandler[] = [];

    trigger(name:string, value?:any) {
        this.handlers.filter(handr => handr.event_name == name.toLowerCase()).forEach(handr => {
            handr.event_callback(value);
        });
    }

    on(name:string, cb:(value?:string) => void) {
        this.handlers.push({
            event_callback:cb,
            event_name: name
        });
    }

    InGame:boolean = false;

    constructor() {
        this.enableModules();
    }

    setInGame(value:boolean) {
        this.InGame = value;

        this.trigger("InGameChanged", this);
    }

    private enableModules() {
        this.enableWindowModules();
    }

    private enableWindowModules() {
        let windowsModule = require("../modules/windows.module");
        Object.assign(window, windowsModule);
    }

    static getInstace() {
        if(!this.instance) {
            this.instance = new GameState();
        }

        return this.instance;
    }

}