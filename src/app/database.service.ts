import { Injectable } from '@angular/core';
import { DeviceType } from "./model/deviceType";
import { User } from "./model/user";
import { HttpService } from "./http.service";
import { WorkoutPlan } from "./model/workoutPlan";
import { WorkoutExercise } from "./model/workoutExercise";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  devices: DeviceType[] = [
    new DeviceType("Hantelbank"),
    new DeviceType("Crosstrainer"),
    new DeviceType("Latzuggerät"),
    new DeviceType("Stepper"),
    new DeviceType("Beinpresse"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank"),
    new DeviceType("Hantelbank")
  ];
  users: User[] = [
    new User("Annalise", "Prentice", "", "", new Date(), 1),
    new User("Harold", "Reader"),
    new User("Mia-Rose", "Padilla"),
    new User("Kain", "Allman"),
    new User("Gerald", "Millington"),
    new User("Warren", "Galvan"),
    new User("Klara", "Welsh"),
    new User("Farzana", "Meyers"),
    new User("Jamaal", "Fuller"),
    new User("Pierre", "Contreras"),
    new User("Allan", "Mcdermott"),
    new User("Max", "Mustermann"),
    new User("Rehaan", "Wilder"),
    new User("Jacqueline", "Durham"),
    new User("Serena", "Squires"),
    new User("Henley", "Rudd"),
    new User("Eryk", "Everett"),
    new User("Gabriela", "Hughes"),
    new User("Anne-Marie", "Davidson"),
    new User("Kadie", "Wormald"),
    new User("Kelsi", "Bull"),
  ];
  workoutPlans: Map<number, WorkoutPlan[]> = new Map<number, WorkoutPlan[]>([
      [
        1,
        [
          new WorkoutPlan(
            "Beintraining",
            [
              {
                description: "",
                sets: [
                  {
                    description: "30kg",
                    id: 1,
                    repetitions: 5
                  },
                  {
                    description: "10kg",
                    id: 3,
                    repetitions: 20
                  },
                  {
                    description: "40kg",
                    id: 2,
                    repetitions: 10
                  }
                ],
                id: 1,
                device: this.devices[4],
                name: "Beinpressen",
              }]
          )
        ]
      ]
    ]);

  constructor(private http: HttpService) {
    //TODO: remove once db access is working
    this.devices.forEach((d, i) => d.id = i + 1);
  }

  compare(o1: any, o2: any) {
    if ('id' in o1 && 'id' in o2)
      return o1.id == o2.id;
    return o1 == o2;
  }

  getDevices() {
    this.http.getDevices().subscribe(data => this.devices = data);
  }

  createDevice(device: DeviceType) {
    this.http.createDevice(device).subscribe(_ => this.getDevices());
  }

  updateDevice(device: DeviceType) {
    this.http.updateDevice(device).subscribe(_ => this.getDevices());
  }

  deleteDevice(id: number) {
    this.http.deleteDevice(id).subscribe(_ => this.getDevices());
  }
}
