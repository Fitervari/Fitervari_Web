import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";
import { Workout } from "../model/workout";
import { WorkoutExercise } from "../model/workoutExercise";
import { WorkoutPlan } from "../model/workoutPlan";
import { WorkoutDataType } from "../model/workoutDataType";
import { SearchableListComponent } from "../searchable-list/searchable-list.component";
import { MatDialog } from "@angular/material/dialog";
import { HealthDataComponent } from "./health-data/health-data.component";
import { HealthDataBlock } from "../model/healthDataBlock";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-workout-data',
  templateUrl: './workout-data.component.html',
  styleUrls: ['./workout-data.component.scss']
})
export class WorkoutDataComponent implements OnInit {
  @ViewChild(SearchableListComponent)
  userList!: SearchableListComponent<User>;

  shownPlans: WorkoutPlan[] = [];

  fullName = (u: User) => `${u.firstName} ${u.lastName}`;
  selectedUser: User = new User("", "");

  constructor(public database: DatabaseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.database.getUsers(() => {
      this.selectUser(this.database.users[0]);
      this.userList.updateShownData();
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.database.getWorkoutPlans(this.selectedUser, () => {
      let plans = this.database.workoutPlans.get(this.selectedUser.id)!;

      if (plans.length == 0) {
        this.shownPlans = [];
        return;
      }

      for (let i = 0; i < plans.length; i++) {
        this.database.getWorkouts(plans[i], () => {
          if (i == plans.length - 1)
            this.shownPlans = plans;
        });
      }
    });
  }

  showWorkoutDetail(workout: Workout, exercise: WorkoutExercise) {
    let type = new WorkoutDataType("Puls", 1);
    this.database.getWorkoutData(type, workout, exercise, () => {
      this.dialog.open(HealthDataComponent, {
        data: new HealthDataBlock(
          `Gesundheitsdaten von ${this.fullName(this.selectedUser)} während der Übung "${exercise.name}" am Gerät ${exercise.deviceGroup.name}`,
          workout,
          this.database.workoutData)
      });
    });
  }

  formatWorkoutPlanDate(date: Date) {
    return formatDate(date, "dd.MM.yyyy", "en");
  }
}
