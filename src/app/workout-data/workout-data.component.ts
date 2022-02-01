import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-workout-data',
  templateUrl: './workout-data.component.html',
  styleUrls: ['./workout-data.component.scss']
})
export class WorkoutDataComponent implements OnInit {
  workouts: any[][] = [
    [
      {
        date: "Mo, 6.12.",
        exercises: [
          {
            device: { id: 1, name: "Hantelbank", description: "Lorem ipsum dolor sit amet" },
            startTime: "15:44",
            endTime: "15:48",
            sets: [
              {
                repetitions: 10,
                setting: 40,
                unit: "kg"
              },
              {
                repetitions: 20,
                setting: 30,
                unit: "kg"
              }
            ]
          },
          {
            device: { id: 1, name: "Hantelbank", description: "Lorem ipsum dolor sit amet" },
            startTime: "15:44",
            endTime: "15:48",
            sets: [
              {
                repetitions: 10,
                setting: 40,
                unit: "kg"
              },
              {
                repetitions: 20,
                setting: 30,
                unit: "kg"
              }
            ]
          },
          {
            device: { id: 1, name: "Hantelbank", description: "Lorem ipsum dolor sit amet" },
            startTime: "15:44",
            endTime: "15:48",
            sets: [
              {
                repetitions: 10,
                setting: 40,
                unit: "kg"
              },
              {
                repetitions: 20,
                setting: 30,
                unit: "kg"
              }
            ]
          }
        ]
      },
      {
        date: "Mi, 8.12.",
        exercises: [
          {
            device: { id: 1, name: "Hantelbank", description: "Lorem ipsum dolor sit amet" },
            startTime: "15:44",
            endTime: "15:48",
            sets: [
              {
                repetitions: 10,
                setting: 40,
                unit: "kg"
              },
              {
                repetitions: 20,
                setting: 30,
                unit: "kg"
              }
            ]
          }
        ]
      },
      {
        date: "Fr, 10.12.",
        exercises: [
          {
            device: { id: 1, name: "Hantelbank", description: "Lorem ipsum dolor sit amet" },
            startTime: "15:44",
            endTime: "15:48",
            sets: [
              {
                repetitions: 10,
                setting: 40,
                unit: "kg"
              },
              {
                repetitions: 20,
                setting: 30,
                unit: "kg"
              }
            ]
          },
          {
            device: { id: 1, name: "Hantelbank", description: "Lorem ipsum dolor sit amet" },
            startTime: "15:44",
            endTime: "15:48",
            sets: [
              {
                repetitions: 10,
                setting: 40,
                unit: "kg"
              },
              {
                repetitions: 20,
                setting: 30,
                unit: "kg"
              }
            ]
          },
          {
            device: { id: 1, name: "Hantelbank", description: "Lorem ipsum dolor sit amet" },
            startTime: "15:44",
            endTime: "15:48",
            sets: [
              {
                repetitions: 10,
                setting: 40,
                unit: "kg"
              },
              {
                repetitions: 20,
                setting: 30,
                unit: "kg"
              }
            ]
          }
        ]
      }
    ]
  ] //TODO: move to database service

  nameProperty = (u: User) => `${u.firstname} ${u.lastname}`;
  selectedUser = 0;

  constructor(public database: DatabaseService) { }

  ngOnInit(): void { }

  showPlans(user: User) {
    console.log(user);
  }
}
