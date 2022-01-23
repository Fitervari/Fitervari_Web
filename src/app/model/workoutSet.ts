export class WorkoutSet {
  constructor(
    public repetitions: number,
    public setting: number,
    public unit: string,
    public id: number = 0,
  ) {}
}
