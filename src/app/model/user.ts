import { WorkoutPlan } from "./workoutPlan";

export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string = "",
    public address: string = "",
    public birthdate: Date = new Date(),
    public plans: WorkoutPlan[] = [],
    public id: number = 0,
  ) {}
}
