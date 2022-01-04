import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DeviceType } from "../../model/deviceType";
import { MatExpansionPanel } from "@angular/material/expansion";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @ViewChild(MatExpansionPanel)
  panel!: MatExpansionPanel;

  @Input()
  device!: DeviceType;
  @Input()
  editOpen: boolean = false;

  @Output()
  editFinished = new EventEmitter<DeviceType>();
  @Output()
  delete = new EventEmitter<number>();

  open: boolean = false;
  editingDevice?: DeviceType;

  constructor() { }

  ngOnInit(): void {
    if (this.editOpen)
      this.toggleEditMode();
  }

  toggleEditMode(cancel = false) {
    if (cancel) {
      if (this.device.name === "") {
        this.deleteDevice();
        return;
      }

      if (this.editingDevice == undefined)
        return;

      this.panel.close();
      this.editingDevice = undefined;
    }
    else {
      if (this.editingDevice == undefined) {
        this.panel.open();
        this.editingDevice = Object.create(this.device);
      }
      else {
        this.editFinished.emit(this.editingDevice);
        this.device = this.editingDevice;
        this.panel.close();
        this.editingDevice = undefined;
      }
    }
  }

  deleteDevice() {
    this.delete.emit(this.device.id);
  }
}
