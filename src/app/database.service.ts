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
  private defaultCallback: (() => void) = () => { };

  devices: DeviceType[] = [];
  users: User[] = [];
  workoutPlans: Map<number, WorkoutPlan[]> = new Map<number, WorkoutPlan[]>();
  workouts: Map<number, Workout[]> = new Map<number, Workout[]>();
  workoutData: WorkoutData[] = [];

  constructor(private http: HttpService) { }

  compareId(o1: any, o2: any) {
    //console.log(`${typeof (o1)}(${o1.id}) == ${typeof (o2)}(${o2.id})`);
    if ('id' in o1 && 'id' in o2)
      return o1.id == o2.id;
    return o1 == o2;
  }


  getUsers(callback: (() => void) = this.defaultCallback) {
    this.http.getUsers().subscribe(data => {
      this.users = data;
      callback();
    })
  }


  getDevices(callback: (() => void) = this.defaultCallback) {
    this.http.getDevices().subscribe(data => {
      this.devices = data;
      callback();
    });
  }

  createDevice(device: DeviceType, callback: (() => void) = this.defaultCallback) {
    this.http.createDevice(device).subscribe(_ => this.getDevices(callback));
  }

  updateDevice(device: DeviceType, callback: (() => void) = this.defaultCallback) {
    this.http.updateDevice(device).subscribe(_ => this.getDevices(callback));
  }

  deleteDevice(id: number, callback: (() => void) = this.defaultCallback) {
    this.http.deleteDevice(id).subscribe(_ => this.getDevices(callback));
  }


  getWorkoutPlans(user: User, callback: (() => void) = this.defaultCallback) {
    console.log("get plans")
    this.http.getWorkoutPlans(user).subscribe(data => {
      this.workoutPlans.set(user.id, data);
      callback();
    });
  }

  createWorkoutPlan(plan: WorkoutPlan, user: User, callback: (() => void) = this.defaultCallback) {
    console.log("create plan")
    this.http.createWorkoutPlan(plan, user).subscribe(_ => this.getWorkoutPlans(user, callback));
  }

  updateWorkoutPlan(WorkoutPlan: WorkoutPlan, user: User, callback: (() => void) = this.defaultCallback) {
    console.log("update plan")
    this.http.updateWorkoutPlan(WorkoutPlan).subscribe(_ => this.getWorkoutPlans(user, callback));
  }

  deleteWorkoutPlan(id: number, user: User, callback: (() => void) = this.defaultCallback) {
    console.log("delete plan")
    this.http.deleteWorkoutPlan(id).subscribe(_ => this.getWorkoutPlans(user, callback));
  }


  getWorkouts(plan: WorkoutPlan, callback: (() => void) = this.defaultCallback) {
    this.http.getWorkouts(plan).subscribe(data => {
      this.workouts.set(plan.id, data);
      callback();
    })
  }


  getWorkoutData(type?: WorkoutDataType, workout?: Workout, exercise?: WorkoutExercise,
                 callback: (() => void) = this.defaultCallback) {
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
