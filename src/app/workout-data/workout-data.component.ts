import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";
import { Workout } from "../model/workout";
import { WorkoutExercise } from "../model/workoutExercise";
import { WorkoutPlan } from "../model/workoutPlan";
import { WorkoutDataType } from "../model/workoutDataType";

@Component({
  selector: 'app-workout-data',
  templateUrl: './workout-data.component.html',
  styleUrls: ['./workout-data.component.scss']
})
export class WorkoutDataComponent implements OnInit {
  shownPlans: WorkoutPlan[] = [];

  nameProperty = (u: User) => `${u.firstName} ${u.lastName}`;
  selectedUser: User = new User("", "");

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
    this.selectUser(this.database.users[0]);
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.database.getWorkoutPlans(this.selectedUser, () => {
      let plans = this.database.workoutPlans.get(this.selectedUser.id)!;
      for (let i = 0; i < plans.length; i++) {
        this.database.getWorkouts(plans[i], () => {
          if (i == plans.length - 1)
            this.shownPlans = plans;
        });
      }
    });
  }

  showWorkoutDetail(workout: Workout, exercise?: WorkoutExercise) {
    this.database.getWorkoutData(new WorkoutDataType("Puls", 1), workout, exercise, () => {
      let message = 'Puls:\n';
      for (let data of this.database.workoutData)
        message += `${data.time}: ${data.value}\n`;
      alert(message);
    });
  }
}
