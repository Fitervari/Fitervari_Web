import { Injectable } from '@angular/core';
import { DeviceType } from "./model/deviceType";
import { User } from "./model/user";
import { HttpService } from "./http.service";
import { WorkoutPlan } from "./model/workoutPlan";
import { Workout } from "./model/workout";
import { WorkoutDataType } from "./model/workoutDataType";
import { WorkoutExercise } from "./model/workoutExercise";
import { WorkoutData } from "./model/workoutData";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  devices: DeviceType[] = [
    new DeviceType("Hantelbank"),
    new DeviceType("Crosstrainer"),
    new DeviceType("Latzuggerät"),
    new DeviceType("Stepper"),
    new DeviceType("Beinpresse"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank")
  ];
  users: User[] = [
    new User("Annalise", "Prentice", 1),
    new User("Harold", "Reader"),
    new User("Mia-Rose", "Padilla"),
    new User("Kain", "Allman"),
    new User("Gerald", "Millington"),
    new User("Warren", "Galvan"),
    new User("Klara", "Welsh"),
    new User("Farzana", "Meyers"),
    new User("Jamaal", "Fuller"),
    new User("Pierre", "Contreras"),
    new User("Allan", "Mcdermott"),
    new User("Max", "Mustermann"),
    new User("Rehaan", "Wilder"),
    new User("Jacqueline", "Durham"),
    new User("Serena", "Squires"),
    new User("Henley", "Rudd"),
    new User("Eryk", "Everett"),
    new User("Gabriela", "Hughes"),
    new User("Anne-Marie", "Davidson"),
    new User("Kadie", "Wormald"),
    new User("Kelsi", "Bull"),
  ];
  workoutPlans: Map<number, WorkoutPlan[]> = new Map<number, WorkoutPlan[]>([
    [
      1,
      [
        new WorkoutPlan(
          "Beintraining",
          [
            {
              description: "",
              exerciseSets: [
                {
                  description: "30kg",
                  id: 1,
                  repetitions: 500
                },
                {
                  description: "10kg",
                  id: 3,
                  repetitions: 20
                },
                {
                  description: "40kg",
                  id: 2,
                  repetitions: 10
                }
              ],
              id: 1,
              deviceGroup: this.devices[4],
              name: "Beinpressen",
            }
          ]
        )
      ]
    ]
  ]);
  workouts: Map<number, Workout[]> = new Map<number, Workout[]>();
  workoutData: WorkoutData[] = [];

  constructor(private http: HttpService) { }

  compareId(o1: any, o2: any) {
    //console.log(`${typeof (o1)}(${o1.id}) == ${typeof (o2)}(${o2.id})`);
    if ('id' in o1 && 'id' in o2)
      return o1.id == o2.id;
    return o1 == o2;
  }


  getUsers(callback: (() => void) = () => { }) {
    this.http.getUsers().subscribe(data => {
      this.users = data;
      callback();
    })
  }


  getDevices(callback: (() => void) = () => { }) {
    this.http.getDevices().subscribe(data => {
      this.devices = data;
      callback();
    });
  }

  createDevice(device: DeviceType, callback: (() => void) = () => { }) {
    this.http.createDevice(device).subscribe(_ => this.getDevices(callback));
  }

  updateDevice(device: DeviceType, callback: (() => void) = () => { }) {
    this.http.updateDevice(device).subscribe(_ => this.getDevices(callback));
  }

  deleteDevice(id: number, callback: (() => void) = () => { }) {
    this.http.deleteDevice(id).subscribe(_ => this.getDevices(callback));
  }


  getWorkoutPlans(user: User, callback: (() => void) = () => { }) {
    this.http.getWorkoutPlans(user).subscribe(data => {
      this.workoutPlans.set(user.id, data);
      callback();
    });
  }


  getWorkouts(plan: WorkoutPlan, callback: (() => void) = () => { }) {
    this.http.getWorkouts(plan).subscribe(data => {
      this.workouts.set(plan.id, data);
      callback();
    })
  }


  getWorkoutData(type?: WorkoutDataType, workout?: Workout, exercise?: WorkoutExercise,
                 callback: (() => void) = () => { }) {
    let args: [string, number][] = [];

    if (type != undefined)
      args.push(['type', type.id]);
    if (workout != undefined)
      args.push(['training', workout.id]);
    if (exercise != undefined)
      args.push(['exercise', exercise.id]);

    this.http.getWorkoutData(new Map<string, number>(args)).subscribe(data => {
      this.workoutData = data;
      callback();
    });
  }
}
