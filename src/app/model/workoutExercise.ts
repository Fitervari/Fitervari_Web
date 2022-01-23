import { DeviceType } from "./deviceType";
import { WorkoutSet } from "./workoutSet";
import { WorkoutPlan } from "./workoutPlan";

export class WorkoutExercise {
  constructor(
    public device: DeviceType,
    public plan: WorkoutPlan,
    public sets: WorkoutSet[] = [],
    public id: number = 0,
  ) {}
}
