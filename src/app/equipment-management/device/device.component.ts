import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { DeviceType } from "../../model/deviceType";
import { MatExpansionPanel } from "@angular/material/expansion";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements AfterViewInit {
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

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    if (this.editOpen) {
      this.startEditing();
      this.cdr.detectChanges();
    }
  }

  startEditing() {
    this.panel.open();
    this.editingDevice = Object.create(this.device);
  }

  stopEditing(saveChanges: boolean) {
    if (this.editingDevice == undefined)
      return;

    if (saveChanges) {
      console.log(this.editingDevice);
      this.editFinished.emit(this.editingDevice);
      this.device = this.editingDevice;
    }
    else {
      this.editFinished.emit(undefined);
    }

    this.editingDevice = undefined;
    this.panel.close();
  }

  deleteDevice() {
    this.delete.emit(this.device.id);
  }
}
