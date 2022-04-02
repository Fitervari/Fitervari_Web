import { Injectable } from '@angular/core';
import { User } from "./model/user";
import { WorkoutPlan } from "./model/workoutPlan";

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {
  //private baseurl = "https://localhost:8080/api";
  private baseurl = "https://student.cloud.htl-leonding.ac.at/m.rausch-schott/fitervari/api";

  public getDeviceUrl(by?: number) {
    const url = `${this.baseurl}/deviceGroups`;

    return by != undefined ? `${url}/${by}` : url;
  }

  public getUserUrl(by?: number) {
    const url = `${this.baseurl}/users`;

    return by != undefined ? `${url}/${by}` : url;
  }

  public getWorkoutPlanUrl(by?: number | User) {
    const url = `${this.baseurl}/workoutPlans`;

    if (by != undefined) {
      if (typeof(by) == "number")
        return `${url}/${by}`;
      return `${this.getUserUrl(by.id)}/workoutPlans`;
    }
    return url;
  }

  public getWorkoutUrl(by?: number | WorkoutPlan) {
    const url = `${this.baseurl}/workoutSessions`;

    if (by != undefined) {
      if (typeof(by) == "number")
        return `${url}/${by}`;
      return `${this.getWorkoutPlanUrl(by.id)}/workoutSessions`;
    }
    return url;
  }

  public getWorkoutDataUrl(args: Map<string, number>) {
    let url = `${this.baseurl}/healthdata`;

    if (args.size > 0) {
      let argsString = "";

      for (let [key, value] of args)
        argsString += `&${key}=${value}`;

      url += argsString.replace('&', '?');
    }

    return url;
  }
}
