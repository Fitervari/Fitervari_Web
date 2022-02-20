import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";
import { SearchableListComponent } from "../searchable-list/searchable-list.component";
import { MatExpansionPanel } from "@angular/material/expansion";
import { WorkoutPlan } from "../model/workoutPlan";
import { WorkoutExercise } from "../model/workoutExercise";

@Component({
  selector: 'app-workout-plans',
  templateUrl: './workout-plans.component.html',
  styleUrls: ['./workout-plans.component.scss']
})
export class WorkoutPlansComponent implements OnInit {
  @ViewChild(SearchableListComponent)
  userList!: SearchableListComponent<User>;
  @ViewChild('addExercisePanel')
  addExercisePanel!: MatExpansionPanel;

  nameProperty = (u: User) => `${u.firstName} ${u.lastName}`;
  selectedUser: User = new User("", "");

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
    this.database.getDevices();
    this.database.getUsers(async () => {
      this.selectUser(this.database.users[0]);
      this.userList.filterAndSort();
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.database.getWorkoutPlans(this.selectedUser);
  }

  onAddExerciseClick(plan: WorkoutPlan) {
    this.addExercisePanel.close();
    plan.exercises.push(new WorkoutExercise("Neue Übung", this.database.devices[0]));
  }

  deleteExercise(plan: WorkoutPlan, exercise: number) {
    plan.exercises.splice(plan.exercises.findIndex(e => this.database.compareId(e, exercise)));
  }

  addPlan() {
    this.database.workoutPlans.get(this.selectedUser.id)!.push(new WorkoutPlan("Neuer Trainingsplan"));
  }

  deletePlan(index: number) {
    this.database.workoutPlans.get(this.selectedUser.id)!.splice(index, 1);
  }
}
