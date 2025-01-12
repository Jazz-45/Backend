import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos:[
        {
            // Iska Matlab is hum iska reference de rahe hai 
            // Aur vo hum alag file me banaemge
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // Array of Sub-Todos
},{timestamps:true});

export const Todo = mongoose.model("Todo",todoSchema);