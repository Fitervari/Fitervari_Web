import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-workout-plans',
  templateUrl: './workout-plans.component.html',
  styleUrls: ['./workout-plans.component.scss']
})
export class WorkoutPlansComponent implements OnInit {
  nameProperty = (u: User) => `${u.firstname} ${u.lastname}`;
  selectedUser = 1;

  constructor(public database: DatabaseService) { }

  ngOnInit(): void { }

  showPlans(user: User) {
    this.selectedUser = user.id;
  }
}
