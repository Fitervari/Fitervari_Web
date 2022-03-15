import { WorkoutExercise } from "./workoutExercise";

export class WorkoutPlan {
  constructor(
    public name: string,
    public exercises: WorkoutExercise[] = [],
    public description: string = "",
    public archived: boolean = false,
    public validFrom: Date = new Date(),
    public validTill: Date = new Date(),
    public id: number = 0,
  ) {}
}
