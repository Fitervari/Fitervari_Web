import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";
import { SearchableListComponent } from "../searchable-list/searchable-list.component";

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
    this.database.getUsers(async () => {
      this.selectUser(this.database.users[0]);
      console.log("call f&s " + this.database.users)
      this.userList.filterAndSort();
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.database.getWorkoutPlans(this.selectedUser);
    console.log("plans: " + this.database.workoutPlans.get(this.selectedUser.id));
  }
}
