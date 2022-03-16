import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HealthDataBlock } from "../../model/healthDataBlock";

@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.component.html',
  styleUrls: ['./health-data.component.scss']
})
export class HealthDataComponent {
  maxValue: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public healthData: HealthDataBlock) {
    this.maxValue = healthData.data.sort((d1, d2) => d2.value - d1.value)[0].value;
  }
}
