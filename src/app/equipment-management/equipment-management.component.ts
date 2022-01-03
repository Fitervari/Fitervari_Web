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

      { id: 0, name: "Hantelbank", description: "Eine Hantelbank" },
      { id: 1, name: "Crosstrainer", description: "Ein Crosstrainer" },
      { id: 2, name: "Latzuggerät", description: "Ein Latzuggerät" }
      ,{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" },{ id: 0, name: "Hantelbank", description: "Eine Hantelbank" }
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
    //this.http.getDevices().subscribe(data => this.allDevices = data);
    this.allDevices = this.tempTestDB.Devices;
    this.filterDevices();
  }

  deleteDevice(id: number) {
    //this.http.deleteDevice(id).subscribe();
    this.tempTestDB.Devices.splice(this.tempTestDB.Devices.findIndex(d => d.id == id), 1);
    this.updateFromDB();
  }

  editDevice(device: DeviceType) {
    console.log("opening editing screen for " + device.name);
  }

  filterDevices() {
    if (this.filterText === "")
      this.shownDevices = this.allDevices.concat();
    else
      this.shownDevices = this.allDevices.filter(d => d.name.toLowerCase().includes(this.filterText.toLowerCase()));
  }
}
