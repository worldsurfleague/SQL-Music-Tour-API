"use strict";
const { Model } = require("sequelize");
// import { Stage } from "stage.js";
// import { Event } from "event.js";

module.exports = (sequelize, DataTypes, Stage, Event) => {
  class StageEvent extends Model {}

  StageEvent.init(
    {
      stage_event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Stage,
          key: "stage_id",
        },
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Event,
          key: "event_id",
        },
      },
    },
    {
      sequelize,
      modelName: "StageEvent",
      tableName: "stage_events",
      timestamps: false,
    }
  );
  return StageEvent;
};
