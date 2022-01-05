import { Component, OnInit } from '@angular/core';
import { DeviceType } from "../model/deviceType";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-equipment-management',
  templateUrl: './equipment-management.component.html',
  styleUrls: ['./equipment-management.component.scss']
})
export class EquipmentManagementComponent implements OnInit {
  tempTestDB = {
    devicesIdCounter: 6,
    Devices: [
      { id: 1, name: "Hantelbank", description: "Eine Hantelbank" },
      { id: 2, name: "Crosstrainer", description: "Ein Crosstrainer" },
      { id: 3, name: "Latzuggerät", description: "Ein Latzuggerät" },
      { id: 4, name: "Stepper", description: "Ein Stepper" },
      { id: 5, name: "Kabelzugstation", description: "Eine Kabelzugstation" }
      //,{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine
      // Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank",
      // description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name:
      // "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{
      // id: 0, name: "Hantelbank", description: "Eine Hantelbank" }
    ]
  }

  allDevices: DeviceType[] = [];
  shownDevices: DeviceType[] = this.allDevices;

  newDevice?: DeviceType;
  filterText = "";

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.updateFromDB();
  }

  updateFromDB() {
    //this.http.getDevices().subscribe(data => {
    //  this.allDevices = data;
    //  this.filterDevices();
    //});
    this.allDevices = this.tempTestDB.Devices;
    this.filterAndSortDevices();
  }

  filterAndSortDevices() {
    this.shownDevices =
      (this.filterText === ""
          ? this.allDevices.concat()
          : this.allDevices.filter(d => d.name.toLowerCase().includes(this.filterText.toLowerCase()))
      ).sort((d1, d2) => d1.name.localeCompare(d2.name));
  }

  addNewDevice() {
    this.newDevice = { id: 0, name: "", description: "" };
  }

  newDeviceFinished(device?: DeviceType) {
    if (device && (device.name !== "" || device.description !== ""))
      this.dbCreateDevice(device);
    this.newDevice = undefined;
  }

  updateDevice(device: DeviceType) {
    if (device)
      this.dbUpdateDevice(device);
  }

  dbCreateDevice(device: DeviceType) {
    //this.http.createDevice(device).subscribe();
    this.tempTestDB.Devices.push({
      id: this.tempTestDB.devicesIdCounter,
      name: device.name,
      description: device.description
    });
    this.tempTestDB.devicesIdCounter++;
    this.updateFromDB();
  }

  dbUpdateDevice(device: DeviceType) {
    //this.http.updateDevice(device).subscribe();
    let deviceInDB = this.tempTestDB.Devices.find(d => d.id == device.id)!;
    deviceInDB.name = device.name;
    deviceInDB.description = device.description;
    this.updateFromDB();
  }

  dbDeleteDevice(id: number) {
    //this.http.deleteDevice(id).subscribe();
    this.tempTestDB.Devices.splice(this.tempTestDB.Devices.findIndex(d => d.id === id), 1);
    this.updateFromDB();
  }
}
