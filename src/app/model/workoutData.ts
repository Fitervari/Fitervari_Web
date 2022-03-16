import { WorkoutDataType } from "./workoutDataType";

export class WorkoutData {
  constructor(
    public type: WorkoutDataType,
    public time: Date,
    public value: number,
    public id: number
  ) {}
}
