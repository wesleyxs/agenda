const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
      
    data: {
        Type: Date,
        require: true,
    },
    hora: {
        type:String,
        require: true,
    },

});

module.exports = mongoose.model("Task",taskSchema);