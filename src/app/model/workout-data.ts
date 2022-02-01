import { WorkoutDataType } from "./workout-data-type";

export class WorkoutData {
  constructor(
    public type: WorkoutDataType,
    public time: Date,
    public value: string,
    public id: number
  ) {}
}