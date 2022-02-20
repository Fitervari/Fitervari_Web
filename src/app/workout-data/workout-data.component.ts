import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";
import { Workout } from "../model/workout";
import { WorkoutExercise } from "../model/workoutExercise";
import { WorkoutPlan } from "../model/workoutPlan";
import { WorkoutDataType } from "../model/workoutDataType";
import { SearchableListComponent } from "../searchable-list/searchable-list.component";

@Component({
  selector: 'app-workout-data',
  templateUrl: './workout-data.component.html',
  styleUrls: ['./workout-data.component.scss']
})
export class WorkoutDataComponent implements OnInit {
  @ViewChild(SearchableListComponent)
  userList!: SearchableListComponent<User>;

  shownPlans: WorkoutPlan[] = [];

  nameProperty = (u: User) => `${u.firstName} ${u.lastName}`;
  selectedUser: User = new User("", "");

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
    this.database.getUsers(async () => {
      this.selectUser(this.database.users[0]);
      console.log("call f&s " + this.database.users)
      this.userList.filterAndSort();
    });
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
    let type = new WorkoutDataType("Puls", 1);
    this.database.getWorkoutData(type, workout, exercise, () => {
      // DEMO: Show health data sample
      let message = `Gesundheitsdaten für\ntypeId = ${type.id}\ntrainingId = ${workout.id}\nexerciseId = ${exercise?.id}\n`;

      if (this.database.workoutData.length == 0)
        message += "\nNo data found";
      else
        for (let data of this.database.workoutData)
          message += `\n${data.time}: ${data.value}`;

      alert(message);
    });
  }
}
