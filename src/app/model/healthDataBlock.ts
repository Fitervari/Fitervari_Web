import { WorkoutData } from "./workoutData";
import { Workout } from "./workout";

export class HealthDataBlock {
  constructor(
    public title: string,
    public workout: Workout,
    public data: WorkoutData[]
  ) {}
}
