import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";
import { SearchableListComponent } from "../searchable-list/searchable-list.component";
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


  nameProperty = (u: User) => `${u.firstName} ${u.lastName}`;
  selectedUser: User = new User("", "");

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
    this.database.getDevices();
    this.database.getUsers(() => {
      this.selectUser(this.database.users[0]);
      this.userList.updateShownData();
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.database.getWorkoutPlans(this.selectedUser);
  }

  addPlan() {
    this.database.createWorkoutPlan(
      new WorkoutPlan("Neuer Trainingsplan", Array<WorkoutExercise>(10).fill(new WorkoutExercise("Neue Übung", this.database.devices[0]))),
      this.selectedUser);
  }

  deletePlan(id: number) {
    this.database.deleteWorkoutPlan(id, this.selectedUser);
  }

  editPlan(plan: WorkoutPlan) {
    if (plan) {
      this.database.updateWorkoutPlan(plan, this.selectedUser);
    }
  }
}
