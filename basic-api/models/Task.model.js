const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const taskSchema = new Schema(
  {
    title: String,
    body: String,
    status: { type: String, required: true, default: "todo" },
    owner_id: { type: ObjectId, ref: "User" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
