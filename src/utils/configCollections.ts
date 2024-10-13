import configs from "~/models/configs";

export const ConfigCollection = {
    getConfig: async () => {
        try{
            const result = await configs.find();
            return result;
        }
        catch(e){
            console.log(e);
            return e;
        }
    },
    getContacts: async () => {
        try{
            const result = await configs.findOne().select("contacts");
            return result;
        }
        catch(e){
            console.log(e);
            return e;
        }
    },
    getHours: async () => {
        try{
            const result = await configs.findOne().select("hours");
            return result;
        }
        catch(e){
            console.log(e);
            return e;
        }
    },
    getImages: async () => {
        try{
            const result = await configs.findOne().select("images");
            return result;
        }
        catch(e){
            console.log(e);
            return e;
        }
    },
    
} 