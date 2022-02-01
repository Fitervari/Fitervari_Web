export class Workout {
  constructor(
    public date: Date,
    public startTime: Date,
    public endTime: Date,
    public id: number = 0,
  ) {}
}
