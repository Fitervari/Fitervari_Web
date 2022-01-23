import { WorkoutExercise } from "./workoutExercise";

export class WorkoutPlan {
  constructor(
    public name: string,
    public archived: boolean = false,
    public exercises: WorkoutExercise[] = [],
    public id: number = 0,
  ) {}
}
