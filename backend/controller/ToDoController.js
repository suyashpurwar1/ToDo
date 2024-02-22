const ToDoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};
module.exports.saveToDo = (req, res) => {
  const { toDo } = req.body;
  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong in Saving ToDo" });
    });
};
module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;
  ToDoModel.findByIdAndUpdate(id,{toDo})
    .then((data) => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong in Update ToDo" });
    });
};
module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndDelete(id)
    .then((data) => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {console.log(err)
    res.send({error:err,msg:"Something went wrong in delete ToDo"})
    });
};