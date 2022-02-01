import { Component, OnInit } from '@angular/core';
import { DeviceType } from "../model/deviceType";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-equipment-management',
  templateUrl: './equipment-management.component.html',
  styleUrls: ['./equipment-management.component.scss']
})
export class EquipmentManagementComponent implements OnInit {
  shownDevices: DeviceType[] = this.database.devices;

  newDevice?: DeviceType;
  filterText = "";

  constructor(public database: DatabaseService) { }

  ngOnInit(): void {
    this.database.getDevices();
  }

  filterAndSortDevices() {
    this.shownDevices = (this.filterText === ""
        ? this.database.devices.concat()
        : this.database.devices.filter(d => d.name.toLowerCase().includes(this.filterText.toLowerCase()))
    ).sort((d1, d2) => d1.name.localeCompare(d2.name));
  }

  addNewDevice() {
    this.newDevice = new DeviceType("");
    this.filterAndSortDevices();
  }

  newDeviceFinished(device?: DeviceType) {
    if (device && (device.name !== "" || device.description !== "")) {
      this.database.createDevice(device);
      this.filterAndSortDevices();
    }

    this.newDevice = undefined;
  }

  editDevice(device: DeviceType) {
    if (device) {
      this.database.updateDevice(device);
      this.filterAndSortDevices();
    }
  }
}
