import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Employee, DayPunch } from '../../model/employee';

@Component({
  selector: 'app-emp-stats-chart',
  templateUrl: './employee-stats-chart.component.html',
  styleUrls: [
    './employee-stats-chart.component.css'
  ]
})
export class EmployeeStatsChartComponent implements OnInit, AfterViewInit {

  @Input() employee;

  chart;
  totalHoursDataPoints = [];
  productiveHoursDataPoints = [];
  punchOutDataPoints = [];

  constructor() {}

  ngOnInit() {
    console.log(JSON.stringify(this.employee));
    this.aggregateData(this.employee);
  }

  ngAfterViewInit() {
    nv.addGraph(() => {

      const width = 1150, height = 600;
      const data = [];
      data.push({ 'color': '#F4A460', 'type': 'bar', 'yAxis': 2, 'key': 'Office Hours', 'values': [] });
      data.push({ 'color': '#D2B48C', 'type': 'bar', 'yAxis': 2, 'key': 'ODC Hours', 'values': [] });
      data.push({ 'color': '#76EEC6', 'type': 'line', 'yAxis': 1, 'key': 'ODC Hours', 'values': [] });

      this.totalHoursDataPoints.forEach(dataPoint => {
        data[0].values.push(dataPoint);
      });

      this.productiveHoursDataPoints.forEach(dataPoint => {
        data[1].values.push(dataPoint);
      });

      this.punchOutDataPoints.forEach(dataPoint => {
        data[2].values.push(dataPoint);
      });

      data.map(function(series) {
        series.values = series.values.map(function(d) { return {x: d[0], y: d[1] }; });
        return series;
      });

      this.chart = nv.models.linePlusBarChart()
                    .width(width)
                    .height(height)
                    .legendRightAxisHint(' [Using Right Axis]');

      this.chart.options({
        transitionDuration: 300,
        useInteractiveGuideline: false,
        reduceXTicks: false,
        rotateLabels: 0,
        showLegend: true
      });

      this.chart.tooltip.enabled(false);
      this.chart.bars.forceY([0]).padData(true);
      this.chart.y1Axis.tickFormat(function(d) { return d; });

      d3.select('#chart svg').datum(data).call(this.chart).style({ 'width': width, 'height': height });
      nv.utils.windowResize(this.chart.update);
    });
  }

  private aggregateData(employee: Employee) {
    employee.dayLevelStats.forEach((day, index) => {
      this.totalHoursDataPoints.push([index, day.totalHours]);
      this.productiveHoursDataPoints.push([index, day.totalProductiveHours]);
      this.punchOutDataPoints.push([index, day.punchOut]);
    });

  }
}
