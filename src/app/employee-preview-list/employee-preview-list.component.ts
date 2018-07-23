import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-preview-list',
  templateUrl: './employee-preview-list.component.html',
  styleUrls: ['./employee-preview-list.component.css']
})
export class EmployeePreviewListComponent implements OnInit {

  @Input() employees;

  constructor() { }

  ngOnInit() {
  }

}
