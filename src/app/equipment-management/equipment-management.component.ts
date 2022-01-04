import {Component, OnInit} from '@angular/core';
import {DeviceType} from "../model/deviceType";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-equipment-management',
  templateUrl: './equipment-management.component.html',
  styleUrls: ['./equipment-management.component.scss']
})
export class EquipmentManagementComponent implements OnInit {
  tempTestDB = {
    Devices: [
      {id: 0, name: "Hantelbank", description: "Eine Hantelbank"},
      {id: 1, name: "Crosstrainer", description: "Ein Crosstrainer"},
      {id: 2, name: "Latzuggerät", description: "Ein Latzuggerät"},
      {id: 3, name: "Stepper", description: "Ein Stepper"},
      {id: 4, name: "Kabelzugstation", description: "Eine Kabelzugstation"}
      //,{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine
      // Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank",
      // description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name:
      // "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{
      // id: 0, name: "Hantelbank", description: "Eine Hantelbank" }
    ]
  }

  allDevices: DeviceType[] = [];
  shownDevices: DeviceType[] = this.allDevices;
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

  createDevice(newDevice: DeviceType) {
    //this.http.createDevice(newDevice).subscribe();
    this.tempTestDB.Devices.push(newDevice);
    this.updateFromDB();
  }

  updateDevice(newDevice: DeviceType) {
    //this.http.updateDevice(newDevice).subscribe();
    this.deleteDevice(newDevice.id);
    this.createDevice(newDevice);
    this.updateFromDB();
  }

  deleteDevice(id: number) {
    //this.http.deleteDevice(id).subscribe();
    this.tempTestDB.Devices.splice(this.tempTestDB.Devices.findIndex(d => d.id === id), 1);
    this.updateFromDB();
  }
}
