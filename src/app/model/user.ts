import { WorkoutPlan } from "./workoutPlan";

export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public address: string,
    public birthdate: Date,
    public email: string,
    public plans: WorkoutPlan[]
  ) {}
}
