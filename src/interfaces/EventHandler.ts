export interface EventHandler {

    event_name:string;
    event_callback:(value?:any) => any;

}