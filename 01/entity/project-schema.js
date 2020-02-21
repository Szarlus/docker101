const { EntitySchema } = require("typeorm");
const { Project } = require("../model/project-model");

module.exports = new EntitySchema({
  name: "Project",
  target: Project,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    title: {
      type: "varchar"
    }
  },
  relations: {
    tasks: {
      type: "one-to-many",
      cascade: true,
      target: "Task",
      inverseSide: "project"
    }
  }
});
