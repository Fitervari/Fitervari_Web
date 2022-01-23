import { WorkoutExercise } from "./workoutExercise";

export class WorkoutPlan {
  constructor(
    public id: number = 0,
    public name: string,
    public archived: boolean = false,
    public exercises: WorkoutExercise[] = []
  ) {}
}
