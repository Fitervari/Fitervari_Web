import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";

@Component({
  selector: 'app-workout-data',
  templateUrl: './workout-data.component.html',
  styleUrls: ['./workout-data.component.scss']
})
export class WorkoutDataComponent implements OnInit {
  users: User[] = [
    { id: 1, name: "Annalise Prentice" },
    { id: 2, name: "Harold Reader" },
    { id: 3, name: "Mia-Rose Padilla" },
    { id: 4, name: "Kain Allman" },
    { id: 5, name: "Gerald Millington" },
    { id: 6, name: "Warren Galvan" },
    { id: 7, name: "Klara Welsh" },
    { id: 8, name: "Farzana Meyers" },
    { id: 9, name: "Jamaal Fuller" },
    { id: 10, name: "Pierre Contreras" },
    { id: 11, name: "Allan Mcdermott" },
    { id: 12, name: "Max Mustermann" },
    { id: 13, name: "Rehaan Wilder" },
    { id: 14, name: "Jacqueline Durham" },
    { id: 15, name: "Serena Squires" },
    { id: 16, name: "Henley Rudd" },
    { id: 17, name: "Eryk Everett" },
    { id: 18, name: "Gabriela Hughes" },
    { id: 19, name: "Anne-Marie Davidson" },
    { id: 20, name: "Kadie Wormald" },
    { id: 21, name: "Kelsi Bull" }
  ];
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
  ]

  nameProperty = (u: User) => u.name;
  selectedUser = 0;

  constructor() { }

  ngOnInit(): void { }

  showPlans(user: User) {
    console.log(user);
  }
}
