var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ToDoSchema = new Schema({
    task: String,
    timeAdded: String
});
mongoose.model('ToDo', ToDoSchema);