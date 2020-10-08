const express = require("express");
const router = express.Router();
const Task = require("../models/Task.model");

router.get("/", (req, res, next) => {
  Task.find()
    .then((tasks) => {
      res.status.json(tasks);
    })
    .catch((error) => {
      res.status(500).json({
        errorMessage: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const { title, body } = req.body;
  Task.create({ title, body })
    .then((task) => {
      res.status(200).send(task);
    })
    .catch((error) => {
      res.status(500).json({
        errorMessage: error,
      });
    });
});
router.delete("/:taskId", (req, res, next) => {
  const { taskId } = req.params;
  Task.findByIdAndDelete({ _id: taskId })
    .then(() => res.status(200).send())
    .catch((error) => {
      res.status(500).json({
        errorMessage: error,
      });
    });
});

router.put("/:taskId", (req, res, next) => {
    const { taskId } = req.params;
    const { title, body } = req.body;
    Task.findByIdAndUpdate({ _id: taskId }, { title: title, body: body })
      .then(() => {
        res.status(200).send();
      })
      .catch((error) => {
        res.status(400).json({
          errorMessage: error,
        });
      });
  })

module.exports = router;
