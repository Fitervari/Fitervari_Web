import { DeviceType } from "./deviceType";
import { WorkoutSet } from "./workoutSet";

export class WorkoutExercise {
  constructor(
    public name: string,
    public deviceGroup: DeviceType,
    public exerciseSets: WorkoutSet[] = [],
    public description: string = "",
    public id: number = 0,
  ) {}
}
