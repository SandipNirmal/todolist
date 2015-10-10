// todo.js
// ToDo controller
// provides methods for handling todos

var mongoose = require('mongoose'),
    ToDo = mongoose.model("ToDo"),
    ObjectId = mongoose.Types.ObjectId;

//
exports.createToDo = function (req, res, next) {
    var ToDoModel = new ToDo(req.body);
    ToDoModel.save(function (err, ToDo) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: ToDo
            })
        }
    })
}

exports.viewToDo = function (req, res) {
    ToDo
.findById(new ObjectId(req.params.id), function (err, ToDo) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (ToDo) {
                res.json({
                    type: true,
                    data: ToDo
                })
            } else {
                res.json({
                    type: false,
                    data: "ToDo: " + req.params.id + " not found"
                })
            }
        }
    })
}

exports.listToDo = function (req, res) {
    ToDo.find(function (err, ToDo) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (ToDo) {
                res.json({
                    //type: true,
                    data: ToDo
                })
            }
        }
    });
}

exports.updateToDo = function (req, res, next) {
    var updatedToDoModel = new ToDo(req.body);
    ToDo.findByIdAndUpdate(new ObjectId(req.params.id),
        updatedToDoModel,
        function (err, ToDo) {
            if (err) {
                res.status(500);
                res.json({
                    type: false,
                    data: "Error occured: " + err
                })
            } else {
                if (ToDo) {
                    res.json({
                        type: true,
                        data: ToDo
                    })
                } else {
                    res.json({
                        type: false,
                        data: "ToDo: " + req.params.id + " not found"
                    })
                }
            }
        })
}

exports.deleteToDo = function (req, res, next) {
    ToDo.findByIdAndRemove(new Object(req.params.id),
    	function (err, ToDo) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "ToDo: " + req.params.id + " deleted successfully"
            })
        }
    })
}
