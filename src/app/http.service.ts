import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DeviceType } from "./model/deviceType";
import { User } from "./model/user";
import { WorkoutPlan } from "./model/workoutPlan";
import { Workout } from "./model/workout";
import { WorkoutData } from "./model/workoutData";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //private baseurl = "https://localhost:8080/api";
  private baseurl = "https://student.cloud.htl-leonding.ac.at/m.rausch-schott/fitervari/api";

  constructor(private http: HttpClient) { }

  private getDeviceUrl(by?: number) {
    return `${this.baseurl}/deviceGroups`;
  }

  private getUserUrl(by?: number) {
    const url = `${this.baseurl}/users`;

    return by != undefined ? `${url}/${by}` : url;
  }

  private getWorkoutPlanUrl(by?: number | User) {
    const url = `${this.baseurl}/workoutPlans`;

    if (by != undefined) {
      if (typeof(by) == "number")
        return `${url}/${by}`;
      return `${this.getUserUrl(by.id)}/workoutPlans`;
    }
    return url;
  }

  private getWorkoutUrl(by?: number | WorkoutPlan) {
    const url = `${this.baseurl}/workoutSessions`;

    if (by != undefined) {
      if (typeof(by) == "number")
        return `${url}/${by}`;
      return `${this.getWorkoutPlanUrl(by.id)}/workoutSessions`;
    }
    return url;
  }

  getWorkoutDataUrl(args: Map<string, number>) {
    let url = `${this.baseurl}/healthdata`;

    if (args.size > 0) {
      let argsString = "";

      for (let [key, value] of args)
        argsString += `&${key}=${value}`;

      url += argsString.replace('&', '?');
    }

    return url;
  }


  getUsers() {
    return this.http.get<User[]>(this.getUserUrl());
  }


  getDevices() {
    return this.http.get<DeviceType[]>(this.getDeviceUrl());
  }

  createDevice(device: DeviceType) {
    return this.http.post(this.getDeviceUrl(), device);
  }

  updateDevice(device: DeviceType) {
    return this.http.put(this.getDeviceUrl(device.id), device);
  }

  deleteDevice(id: number) {
    return this.http.delete(this.getDeviceUrl(id));
  }


  getWorkoutPlans(user: User) {
    return this.http.get<WorkoutPlan[]>(this.getWorkoutPlanUrl(user));
  }

  createWorkoutPlan(plan: WorkoutPlan, user: User) {
    return this.http.post<WorkoutPlan>(this.getWorkoutPlanUrl(user), plan);
  }

  updateWorkoutPlan(plan: WorkoutPlan) {
    return this.http.put(this.getWorkoutPlanUrl(plan.id), plan);
  }

  deleteWorkoutPlan(id: number) {
    return this.http.delete(this.getWorkoutPlanUrl(id));
  }


  getWorkouts(plan: WorkoutPlan) {
    return this.http.get<Workout[]>(this.getWorkoutUrl(plan));
  }


  getWorkoutData(args: Map<string, number>) {
    return this.http.get<WorkoutData[]>(this.getWorkoutDataUrl(args));
  }
}
