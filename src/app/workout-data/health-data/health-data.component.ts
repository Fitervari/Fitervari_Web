import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HealthDataBlock } from "../../model/healthDataBlock";

@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.component.html',
  styleUrls: ['./health-data.component.scss']
})
export class HealthDataComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public healthData: HealthDataBlock) {

  }
}
