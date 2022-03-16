import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HealthDataBlock } from "../../model/healthDataBlock";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.component.html',
  styleUrls: ['./health-data.component.scss']
})
export class HealthDataComponent {
  public chartOptions: Partial<ChartOptions>;

  constructor(@Inject(MAT_DIALOG_DATA) public healthData: HealthDataBlock) {
    let chartData = healthData.data.map(d => d.value);
    let times = healthData.data.map(d => formatDate(d.time, "hh:mm:ss", "en"));

    this.chartOptions = {
      series: [{
        name: "Puls",
        data: chartData
      }],
      chart: {
        height: 400,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      yaxis: {
        title: {
          text: "Puls"
        }
      },
      xaxis: {
        categories: times,
        labels: {
          show: false
        },
        title: {
          text: "Zeit"
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    };
  }

  formatWorkoutPlanDate(date: Date) {
    return formatDate(date, "dd.MM.yyyy", "en");
  }
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill: ApexFill;
};
