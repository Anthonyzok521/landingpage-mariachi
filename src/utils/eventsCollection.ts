import events from "~/models/events";

export const EventsCollection = {
    findLatest: async () => {
        try{
            const result = await events.find();
            return result;
        }
        catch(e){
            console.log(e);
            return e;
        }
    }
} 