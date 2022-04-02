import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DeviceType } from "./model/deviceType";
import { User } from "./model/user";
import { WorkoutPlan } from "./model/workoutPlan";
import { Workout } from "./model/workout";
import { WorkoutData } from "./model/workoutData";
import { UrlBuilderService } from "./url-builder.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }

  getUsers() {
    return this.http.get<User[]>(this.urlBuilder.getUserUrl());
  }


  getDevices() {
    return this.http.get<DeviceType[]>(this.urlBuilder.getDeviceUrl());
  }

  createDevice(device: DeviceType) {
    return this.http.post<DeviceType>(this.urlBuilder.getDeviceUrl(), device);
  }

  updateDevice(device: DeviceType) {
    return this.http.put<DeviceType>(this.urlBuilder.getDeviceUrl(device.id), device);
  }

  deleteDevice(id: number) {
    return this.http.delete(this.urlBuilder.getDeviceUrl(id));
  }


  getWorkoutPlans(user: User) {
    return this.http.get<WorkoutPlan[]>(this.urlBuilder.getWorkoutPlanUrl(user));
  }

  createWorkoutPlan(plan: WorkoutPlan, user: User) {
    return this.http.post<WorkoutPlan>(this.urlBuilder.getWorkoutPlanUrl(user), plan);
  }

  updateWorkoutPlan(plan: WorkoutPlan) {
    return this.http.put<WorkoutPlan>(this.urlBuilder.getWorkoutPlanUrl(plan.id), plan);
  }

  deleteWorkoutPlan(id: number) {
    return this.http.delete(this.urlBuilder.getWorkoutPlanUrl(id));
  }


  getWorkouts(plan: WorkoutPlan) {
    return this.http.get<Workout[]>(this.urlBuilder.getWorkoutUrl(plan));
  }


  getWorkoutData(args: Map<string, number>) {
    return this.http.get<WorkoutData[]>(this.urlBuilder.getWorkoutDataUrl(args));
  }
}
