import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    _id: {type: String},
    title: {type: String},    
    path: {type: String},
    type: {type: String}
});

export default mongoose.models.galleries|| mongoose.model("galleries", gallerySchema);