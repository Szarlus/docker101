const { EntitySchema } = require("typeorm");
const { Task } = require("../model/task-model");

module.exports = new EntitySchema({
  name: "Task",
  target: Task,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    title: {
      type: "varchar"
    },
    description: {
      type: "text"
    }
  },
  relations: {
    project: {
      type: "many-to-one",
      target: "Project"
    }
  }
});
